import airport from "../src/airport.js";
import { assertEquals } from "../spec/test-framework.js";

// AFTER EACH function
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
};

// * User Story 1
// ? Test 1: Check whether there is a representation of the airport's
// ? maximum capacity of the number of planes that can be at the airport

console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Check whether the airport object has a representation of the airport's maximum capacity as a property`
);

// Arrange
let expected = true;
let actual, result;

// Act
actual = Object.hasOwn(airport, 'capacity');

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 1
