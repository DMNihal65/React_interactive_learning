# JavaScript Challenges Testing Guide

This guide explains how to work with the tests in the ChallengesAndQuests folder.

## Setup

Before running tests, make sure you have installed the required dependencies:

```bash
npm install
```

## Running Tests

### Run All Tests

To run all tests:

```bash
npm test
```

### Run a Specific Test

To run a specific test, use the custom test runner:

```bash
node runTest.js arrow-functions
```

Replace `arrow-functions` with the name of the test you want to run.

### Watch Mode

To run tests in watch mode (tests will rerun when files change):

```bash
npm run test:watch
```

### Coverage Report

To generate a coverage report:

```bash
npm run test:coverage
```

## Test Structure

Each challenge has:

1. A challenge file in the `challenges/` directory
2. A corresponding test file in the `tests/` directory
3. A solution file in the `solutions/` directory (for reference)

## Workflow

1. Read the challenge file to understand the requirements
2. Implement your solution in the challenge file
3. Run the test to see if your solution passes
4. If the test fails, read the error message to understand what went wrong
5. Update your solution and run the test again
6. Once all tests pass, you can move on to the next challenge
7. If you get stuck, you can look at the solution file for guidance

## Test Files

- `01-arrow-functions.test.js` - Tests for arrow functions
- `02-destructuring.test.js` - Tests for destructuring
- `01-meeting-scheduler.test.js` - Tests for the meeting scheduler project

## Examples

### Example: Running the Arrow Functions Test

```bash
node runTest.js arrow-functions
```

### Example: Running a Test in Watch Mode

```bash
npm run test:watch -- --testPathPattern=arrow-functions
```

## Debugging Tests

If a test fails, the error message will show:

1. What was expected
2. What was received
3. Which line in the test file failed

Use this information to debug your solution. 