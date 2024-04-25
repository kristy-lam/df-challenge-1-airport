import airport from "../src/airport.js";
import Plane from "../src/Plane.js";
import WeatherChecker from "../src/WeatherChecker.js";
import { assertEquals } from "../spec/test-framework.js";
import chalk from "chalk";

// AFTER EACH function
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    airport.maxCapacity = 10;  // Back to default maximum capacity
    airport.planesAtAirport = [];
};

// * User Story 1
console.log(`USER STORY 1`);

// ? Test 1.1: Check whether there is a representation of the airport's
// ? maximum capacity of the number of planes that can be at the airport
console.log(`Test 1.1`);
console.log(`==================`);
console.log(
    `Check whether the airport object has a representation of the airport's maximum capacity as a property`
);

// Arrange
let expected = true;
let actual, result;

// Act
actual = Object.hasOwn(airport, 'maxCapacity');

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 1 - TEST 1

// * User Story 2
console.log(`USER STORY 2.1`);

// ? Test 1.2: Test that maximum capacity can be modified accordingly
console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Test that maximum capacity can be modified accordingly`
);

// Arrange
expected = 20;
let testMaxCapacity = 20;

// Act
airport.modifyMaxCapacity(testMaxCapacity);
actual = airport.getMaxCapacity();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testMaxCapacity = undefined;

//! END OF USER STORY 2 - TEST 1

// ? Test 2.2: Test that only a number can only be used as maximum capacity
console.log(`Test 2.2`);
console.log(`==================`);
console.log(
    `Test that only a number can only be used as maximum capacity`
);

// Arrange
expected = 10;
testMaxCapacity = "fifteen";

// Act
airport.modifyMaxCapacity(testMaxCapacity);
actual = airport.getMaxCapacity();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testMaxCapacity = undefined;

//! END OF USER STORY 2 - TEST 2

// ? Test 2.3: Test that only a positive number can only be used as maximum capacity
console.log(`Test 2.3`);
console.log(`==================`);
console.log(
    `Test that only a positive number can only be used as maximum capacity`
);

// Arrange
expected = 10;
testMaxCapacity = -8;

// Act
airport.modifyMaxCapacity(testMaxCapacity);
actual = airport.maxCapacity;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testMaxCapacity = undefined;

//! END OF USER STORY 2 - TEST 3

// * User Story 3
console.log(`USER STORY 3`);

// ? Test 3.1: Test that there is a property of isAtAirport for a plane object
console.log(`Test 3.1`);
console.log(`==================`);
console.log(
    `Test that there is a property of isAtAirport for a plane object`
);

// Arrange
expected = true;

// Act
let testPlane = new Plane;
actual = Object.hasOwn(testPlane, 'isAtAirport');

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 3 - TEST 1

// ? Test 3.2: Test that user can get the isAtAirport property of a plane
console.log(`Test 3.2`);
console.log(`==================`);
console.log(
    `Test that user can get the isAtAirport property of a plane`
);

// Arrange
testPlane = new Plane;
testPlane.isAtAirport = true;
expected = true;

// Act
actual = testPlane.getIsAtAirport(testPlane);

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 3 - TEST 2

// * User Story 4
console.log(`USER STORY 4`);

// ? Test 4.1: Test the getNumOfPlanesAtAirport function correctly shows the number of planes currently at the airport
console.log(`Test 4.1`);
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
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 4 - TEST 1

// ? Test 4.2: Test the isFull function is correct when the airport is empty
console.log(`Test 4.2`);
console.log(`==================`);
console.log(
    `Test the isFull function is correct when the airport is empty`
);

// Arrange
expected = false;

// Act
actual = airport.isFull();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 4 - TEST 2

// ? Test 4.3: Test the isFull function is correct when there is a plane at the airport
console.log(`Test 4.3`);
console.log(`==================`);
console.log(
    `Test the isFull function is correct when there is a plane at the airport`
);

// Arrange
testPlane = new Plane;
airport.addPlane(testPlane);
expected = false;

// Act
actual = airport.isFull();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 4 - TEST 3

// ? Test 4.4: Test the isFull function is correct when the airport is full
console.log(`Test 4.4`);
console.log(`==================`);
console.log(
    `Test the isFull function is correct when the airport is full`
);

// Arrange
function generateTestPlanes(num) {
    return Array.from({ length: num }, () => new Plane());
}
const testPlanesArray = generateTestPlanes(10);
airport.planesAtAirport = testPlanesArray;
expected = true;

// Act
actual = airport.isFull();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 4 - TEST 4

// * User Story 5
console.log(`USER STORY 5`);

// ? Test 5.1: Test when a plane is added, that plane is in the planesAtAirport array
console.log(`Test 5.1`);
console.log(`==================`);
console.log(
    `Test when a plane is added, that plane is in the planesAtAirport array`
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
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 5 - TEST 1

// ? Test 5.2: Test that a plane which is not an instance of the Plane class cannot be added to the planesAtAirport array
console.log(`Test 5.2`);
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
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 5 - TEST 2

// ? Test 5.3: Test that the same plane cannot be added to the planesAtAirport array again when it is already at the airport
console.log(`Test 5.3`);
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
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 5 - TEST 3

//* USER STORY 6
console.log(`USER STORY 6`);

// ? Test 6.1: Test that a plane which is already at the airport cannot be instructed to land
console.log(`Test 6.1`);
console.log(`==================`);
console.log(
    `Test that a plane which is already at the airport cannot be instructed to land`
);

// Arrange
testPlane = new Plane();
airport.planesAtAirport = [testPlane];
expected = null;

// Act
airport.instructToLand(testPlane);
actual = testPlane.instructedToLand;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 6 - TEST 1

// ? Test 6.2: Test that when a plane has landed at the airport, its isAtAirport property is changed to true
console.log(`Test 6.2`);
console.log(`==================`);
console.log(
    `Test that when a plane has landed at the airport, its isAtAirport property is changed to true`
);

// Arrange
testPlane = new Plane();
expected = true;

// Act
airport.addPlane(testPlane);
actual = testPlane.isAtAirport;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 6 - TEST 2

// ? Test 6.3: Test that a plane cannot be added to the airport when is full
console.log(`Test 6.3`);
console.log(`==================`);
console.log(
    `Test that a plane cannot be added to the airport when is full`
);

// Arrange
airport.maxCapacity = 1;
let testPlane1 = new Plane();
airport.addPlane(testPlane1);
let testPlane2 = new Plane();
expected = false;

// Act
airport.addPlane(testPlane2);
actual = airport.planesAtAirport.includes(testPlane2);

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane1 = undefined;
testPlane2 = undefined;

//! END OF USER STORY 6 - TEST 3

// ? Test 6.4: Test that a plane cannot be instructed to land when the airport is full
console.log(`Test 6.4`);
console.log(`==================`);
console.log(
    `Test that a plane cannot be instructed to land when the airport is full`
);

// Arrange
airport.maxCapacity = 1;
testPlane1 = new Plane();
airport.addPlane(testPlane1);
testPlane2 = new Plane();
expected = null;

// Act
airport.instructToLand(testPlane2);
actual = testPlane2.getInstructedToLand();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane1 = undefined;
testPlane2 = undefined;

//! END OF USER STORY 6 - TEST 4

// ? Test 6.5: Test that after a plane has been instructed to land, the instructed to land property of that plane changes to true
console.log(`Test 6.5`);
console.log(`==================`);
console.log(
    `Test that after a plane has been instructed to land, the instructed to land property of that plane changes to true`
);

// Arrange
testPlane = new Plane();
expected = true;

// Act
airport.instructToLand(testPlane);
actual = testPlane.getInstructedToLand();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 6 - TEST 5


// ? Test 6.6: Test that after a plane has landed, the instructed to land property of that plane returns to null
console.log(`Test 6.6`);
console.log(`==================`);
console.log(
    `Test that after a plane has landed, the instructed to land property of that plane returns to null`
);

// Arrange
testPlane = new Plane();
airport.instructToLand(testPlane);
expected = null;

// Act
airport.addPlane(testPlane);
actual = testPlane.getInstructedToLand();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 6 - TEST 6

// * User Story 7
console.log(`USER STORY 7`);

// ? Test 7.1: Test when a plane is removed, that plane is removed from the planesAtAirport array
console.log(`Test 7.1`);
console.log(`==================`);
console.log(
    `Test when a plane is removed, that plane is removed from the planesAtAirport array`
);

// Arrange
testPlane1 = new Plane('testPlane1');
testPlane2 = new Plane('testPlane2');
airport.addPlane(testPlane1);
airport.addPlane(testPlane2);
expected = false;

// Act
airport.removePlane(testPlane1);
actual = airport.planesAtAirport.includes(testPlane1);

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane1 = undefined;
testPlane2 = undefined;

//! END OF USER STORY 7 - TEST 1

// ? Test 7.2: Test that when a plane has taken off from the airport, its isAtAirport property is changed to false
console.log(`Test 7.2`);
console.log(`==================`);
console.log(
    `Test that when a plane has taken off from the airport, its isAtAirport property is changed to false`
);

// Arrange
testPlane = new Plane();
airport.addPlane(testPlane);
expected = false;

// Act
airport.removePlane(testPlane);
actual = testPlane.isAtAirport;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 7 - TEST 2

// ? Test 7.3: Test that a plane which is not at the airport cannot be instructed to take off
console.log(`Test 7.3`);
console.log(`==================`);
console.log(
    `Test that a plane which is not at the airport cannot be instructed to take off`
);

// Arrange
testPlane = new Plane();
airport.addPlane(testPlane);
airport.removePlane(testPlane);
expected = null;

// Act
airport.instructToTakeOff(testPlane);
actual = testPlane.instructedToTakeOff;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 7 - TEST 3

// ? Test 7.4: Test that when a plane is instructed to take off, the instructed to take off property of that plane changes to true
console.log(`Test 7.4`);
console.log(`==================`);
console.log(
    `Test that when a plane is instructed to take off, the instructed to take off property of that plane changes to true`
);

// Arrange
testPlane = new Plane();
airport.addPlane(testPlane);
expected = true;

// Act
airport.instructToTakeOff(testPlane);
actual = testPlane.getInstructedToTakeOff();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 7 - TEST 4

// ? Test 7.5: Test that when a plane has taken off, the instructed to take off property of that plane returns to null
console.log(`Test 7.5`);
console.log(`==================`);
console.log(
    `Test that when a plane has taken off, the instructed to take off property of that plane returns to null`
);

// Arrange
testPlane = new Plane();
airport.addPlane(testPlane);
airport.instructToTakeOff(testPlane);
airport.removePlane(testPlane);
expected = null;

// Act
actual = testPlane.getInstructedToTakeOff();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;

//! END OF USER STORY 7 - TEST 5

// * User Story 8
console.log(`USER STORY 8`);

// ? Test 8.1: should be able to get current weather condition
console.log(`Test 8.1`);
console.log(`==================`);
console.log(
    `should be able to get current weather condition`
);

// Arrange
expected = 'stormy';

// Act
WeatherChecker.setCurrentWeather('stormy');
actual = WeatherChecker.getCurrentWeather();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF USER STORY 8 - TEST 1

// * User Story 9
console.log(`USER STORY 9`);

// ? Test 9.1: should not allow user to instruct a plane to land if weather is stormy
console.log(`Test 9.1`);
console.log(`==================`);
console.log(
    `should not allow user to instruct a plane to land if weather is stormy`
);

// Arrange
WeatherChecker.setCurrentWeather('stormy');
testPlane = new Plane();
expected = null;

// Act
airport.instructToLand(testPlane);
actual = testPlane.getInstructedToLand();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;
WeatherChecker.setCurrentWeather(undefined);

//! END OF USER STORY 9 - TEST 1

// ? Test 9.2: should allow user to instruct a plane to land if weather is not stormy
console.log(`Test 9.2`);
console.log(`==================`);
console.log(
    `should allow user to instruct a plane to land if weather is not stormy`
);

// Arrange
WeatherChecker.setCurrentWeather('not stormy');
testPlane = new Plane();
expected = true;

// Act
airport.instructToLand(testPlane);
actual = testPlane.getInstructedToLand();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;
WeatherChecker.setCurrentWeather(undefined);

//! END OF USER STORY 9 - TEST 2

// * User Story 10
console.log(`USER STORY 10`);

// ? Test 10.1: should not allow user to instruct a plane to take off if weather is stormy
console.log(`Test 10.1`);
console.log(`==================`);
console.log(
    `should not allow user to instruct a plane to take off if weather is stormy`
);

// Arrange
testPlane = new Plane();
airport.addPlane(testPlane);
WeatherChecker.setCurrentWeather('stormy');
expected = null;

// Act
airport.instructToTakeOff(testPlane);
actual = testPlane.getInstructedToTakeOff();

// Assert
result = assertEquals(expected, actual);

// Report
console.log(result ? chalk.green(`Pass`) : chalk.red(`Fail`));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
testPlane = undefined;
WeatherChecker.setCurrentWeather('undefined');

//! END OF USER STORY 10 - TEST 1

