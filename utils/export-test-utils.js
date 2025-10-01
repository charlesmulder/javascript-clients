#!/usr/bin/env node

/**
 * Shared utilities for testing package exports across all client packages
 * Validates that expected import paths work correctly
 */

function testImport(description, importPath, expectedType = 'object') {
  try {
    const module = require(importPath);
    const actualType = typeof module;

    if (actualType === expectedType) {
      console.log(`PASS ${description}: ${importPath}`);
      return true;
    } else {
      console.log(`FAIL ${description}: ${importPath} - Expected ${expectedType}, got ${actualType}`);
      return false;
    }
  } catch (error) {
    console.log(`FAIL ${description}: ${importPath} - ${error.message}`);
    return false;
  }
}


function testImportShouldFail(description, importPath) {
  try {
    require(importPath);
    console.log(`FAIL ${description}: ${importPath} - Should have failed but didn't`);
    return false;
  } catch (error) {
    console.log(`PASS ${description}: ${importPath} - Correctly failed`);
    return true;
  }
}

function runExportTests(packageName, tests) {
  console.log(`Testing ${packageName} imports...\n`);
  let errors = 0;

  // Run test cases
  tests.forEach(test => {
    let result;
    if (test.shouldFail) {
      result = testImportShouldFail(test.description, test.importPath);
    } else {
      result = testImport(test.description, test.importPath, test.expectedType);
    }

    if (!result) {
      errors++;
    }
  });

  // Summary
  console.log(`\nTest Results: ${errors === 0 ? 'All tests passed!' : `${errors} test(s) failed`}`);

  if (errors > 0) {
    process.exit(1);
  }
}

module.exports = {
  testImport,
  testImportShouldFail,
  runExportTests
};