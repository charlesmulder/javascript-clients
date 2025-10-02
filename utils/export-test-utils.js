#!/usr/bin/env node
"use strict";
/**
 * TypeScript utilities for testing package exports across all client packages
 * Validates that expected import paths work correctly with TypeScript compilation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.runExportTests = runExportTests;
exports.testImport = testImport;
exports.testImportShouldFail = testImportShouldFail;
var tslib_1 = require("tslib");
function testImport(description_1, importPath_1) {
    return tslib_1.__awaiter(this, arguments, void 0, function (description, importPath, expectedType) {
        var module_1, actualType, error_1;
        if (expectedType === void 0) { expectedType = 'object'; }
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Promise.resolve("".concat(importPath)).then(function (s) { return require(s); })];
                case 1:
                    module_1 = _a.sent();
                    actualType = typeof module_1;
                    if (actualType === expectedType) {
                        console.log("PASS ".concat(description, ": ").concat(importPath));
                        return [2 /*return*/, true];
                    }
                    else {
                        console.log("FAIL ".concat(description, ": ").concat(importPath, " - Expected ").concat(expectedType, ", got ").concat(actualType));
                        return [2 /*return*/, false];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log("FAIL ".concat(description, ": ").concat(importPath, " - ").concat(error_1.message));
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function testImportShouldFail(description, importPath) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var error_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Promise.resolve("".concat(importPath)).then(function (s) { return require(s); })];
                case 1:
                    _a.sent();
                    console.log("FAIL ".concat(description, ": ").concat(importPath, " - Should have failed but didn't"));
                    return [2 /*return*/, false];
                case 2:
                    error_2 = _a.sent();
                    console.log("PASS ".concat(description, ": ").concat(importPath, " - Correctly failed"));
                    return [2 /*return*/, true];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function runExportTests(packageName, tests) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var errors, _i, tests_1, test_1, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Testing ".concat(packageName, " TypeScript imports...\n"));
                    errors = 0;
                    _i = 0, tests_1 = tests;
                    _a.label = 1;
                case 1:
                    if (!(_i < tests_1.length)) return [3 /*break*/, 7];
                    test_1 = tests_1[_i];
                    result = void 0;
                    if (!test_1.shouldFail) return [3 /*break*/, 3];
                    return [4 /*yield*/, testImportShouldFail(test_1.description, test_1.importPath)];
                case 2:
                    result = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, testImport(test_1.description, test_1.importPath, test_1.expectedType)];
                case 4:
                    result = _a.sent();
                    _a.label = 5;
                case 5:
                    if (!result) {
                        errors++;
                    }
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7:
                    // Summary
                    console.log("\nTest Results: ".concat(errors === 0 ? 'All tests passed!' : "".concat(errors, " test(s) failed")));
                    if (errors > 0) {
                        process.exit(1);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=export-test-utils.js.map