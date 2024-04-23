import airport from "../src/airport.js";
import Plane from "../src/Plane.js";
import { assertEquals } from "../spec/test-framework.js";

// AFTER EACH function
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    airport.capacity = 10;  // Back to default capacity
    testCapacity = undefined;
    airport.planesAtAirport = [];
};

// * User Story 1
console.log(`USER STORY 1`);

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
expected = undefined;
actual = undefined;
result = undefined;

//! END OF USER STORY 1 - TEST 1

// * User Story 2
console.log(`USER STORY 2`);

// ? Test 1: Test that capacity can be modified accordingly
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test that capacity can be modified accordingly`
);

// Arrange
expected = 20;
let testCapacity = 20;

// Act
airport.modifyCapacity(testCapacity);
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 2 - TEST 1

// ? Test 2: Test that only a number can only be used as capacity
console.log(`Test 2`);
console.log(`==================`);
console.log(
    `Test that only a number can only be used as capacity`
);

// Arrange
expected = 10;
testCapacity = "fifteen";

// Act
airport.modifyCapacity(testCapacity);
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 2 - TEST 2

// ? Test 3: Test that only a positive number can only be used as capacity
console.log(`Test 3`);
console.log(`==================`);
console.log(
    `Test that only a positive number can only be used as capacity`
);

// Arrange
expected = 10;
testCapacity = -8;

// Act
airport.modifyCapacity(testCapacity);
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 2 - TEST 3

// * User Story 3
console.log(`USER STORY 3`);

// ? Test 1: Test that there is a Boolean property of isAtAirport for a plane object
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test that there is a Boolean property of isAtAirport for a plane object`
);

// Arrange
expected = false;

// Act
let testPlane = new Plane;
actual = testPlane.isAtAirport;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 3 - TEST 1

// * User Story 4
console.log(`USER STORY 4`);

// ? Test 1: Test the getNumOfPlanesAtAirport function correctly shows the number of planes currently at the airport
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test the getNumOfPlanesAtAirport function correctly shows the number of planes currently at the airport`
);

// Arrange
expected = 0;

// Act
actual = airport.getNumOfPlanesAtAirport();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 4 - TEST 1

// ? Test 2: Test the isAirportFull function correctly shows whether the airport is full
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test the isAirportFull function correctly shows whether the airport is full`
);

// Arrange
expected = false;

// Act
actual = airport.isAirportFull();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 4 - TEST 2

// * User Story 5
console.log(`USER STORY 5`);

// ? Test 1: Test when a plane is added, that plane is in the planesAtAirport array
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test when a plane is added, that plane is in the planesAtAirport array`
);

// Arrange
testPlane = new Plane();
expected = true;

// Act
airport.addPlane(testPlane);
actual = airport.planesAtAirport.includes(testPlane);

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 5 - TEST 1

// ? Test 2: Test that a plane which is not an instance of the Plane class cannot be added to the planesAtAirport array
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test that a plane which is not an instance of the Plane class cannot be added to the planesAtAirport array`
);

// Arrange
testPlane = {};
expected = false;

// Act
airport.addPlane(testPlane);
actual = airport.planesAtAirport.includes(testPlane);

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 5 - TEST 2

// ? Test 3: Test that the same plane cannot be added to the planesAtAirport array again when it is already at the airport
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test that the same plane cannot be added to the planesAtAirport array again when it is already at the airport`
);

// Arrange
testPlane = new Plane();
expected = 1;

// Act
airport.addPlane(testPlane);
airport.addPlane(testPlane);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 5 - TEST 3


// ? Test 4: Test that a plane which is already at the airport cannot be instructed to land
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test that a plane which is already at the airport cannot be instructed to land`
);

// Arrange
testPlane = new Plane();
airport.planesAtAirport = [testPlane];
expected = false;

// Act
airport.instructToLand(testPlane);
actual = testPlane.allowedToLand;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 5 - TEST 3
