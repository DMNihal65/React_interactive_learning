/**
 * Test Runner Script
 * 
 * Usage: 
 * To run all tests: node runTest.js
 * To run specific test: node runTest.js <test-name>
 * 
 * Example: node runTest.js arrow-functions
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get the test name from command line arguments
const testName = process.argv[2];

// If no test name is provided, run all tests
if (!testName) {
  console.log('Running all tests...');
  runCommand('npm test');
  process.exit(0);
}

// Construct the test file path
const testsDir = path.join(__dirname, 'ChallengesAndQuests', 'tests');
const testFiles = fs.readdirSync(testsDir).filter(file => file.endsWith('.test.js'));

// Find a matching test file
const matchingFile = testFiles.find(file => file.includes(testName));

if (!matchingFile) {
  console.error(`No test file found matching: ${testName}`);
  console.log('Available tests:');
  testFiles.forEach(file => {
    console.log(`- ${file.replace('.test.js', '')}`);
  });
  process.exit(1);
}

// Run the test
const testFile = path.join(testsDir, matchingFile);
console.log(`Running test: ${matchingFile}`);
runCommand(`npx jest ${testFile}`);

/**
 * Executes a command and prints the output
 * @param {string} command - Command to execute
 */
function runCommand(command) {
  try {
    const output = execSync(command, { stdio: 'inherit' });
    return output;
  } catch (error) {
    console.error(`Command failed: ${command}`);
    process.exit(1);
  }
} 