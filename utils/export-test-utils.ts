#!/usr/bin/env node

/**
 * TypeScript utilities for testing package exports across all client packages
 * Validates that expected import paths work correctly with TypeScript compilation
 */

interface TestCase {
  description: string;
  importPath: string;
  expectedType?: string;
  shouldFail?: boolean;
}

async function testImport(description: string, importPath: string, expectedType: string = 'object'): Promise<boolean> {
  try {
    const module = await import(importPath);
    const actualType = typeof module;

    if (actualType === expectedType) {
      console.log(`PASS ${description}: ${importPath}`);
      return true;
    } else {
      console.log(`FAIL ${description}: ${importPath} - Expected ${expectedType}, got ${actualType}`);
      return false;
    }
  } catch (error) {
    console.log(`FAIL ${description}: ${importPath} - ${(error as Error).message}`);
    return false;
  }
}

async function testImportShouldFail(description: string, importPath: string): Promise<boolean> {
  try {
    await import(importPath);
    console.log(`FAIL ${description}: ${importPath} - Should have failed but didn't`);
    return false;
  } catch (error) {
    console.log(`PASS ${description}: ${importPath} - Correctly failed`);
    return true;
  }
}

export async function runExportTests(packageName: string, tests: TestCase[]): Promise<void> {
  console.log(`Testing ${packageName} TypeScript imports...\n`);
  let errors = 0;

  // Run test cases
  for (const test of tests) {
    let result: boolean;
    if (test.shouldFail) {
      result = await testImportShouldFail(test.description, test.importPath);
    } else {
      result = await testImport(test.description, test.importPath, test.expectedType);
    }

    if (!result) {
      errors++;
    }
  }

  // Summary
  console.log(`\nTest Results: ${errors === 0 ? 'All tests passed!' : `${errors} test(s) failed`}`);

  if (errors > 0) {
    process.exit(1);
  }
}

export {
  testImport,
  testImportShouldFail
};