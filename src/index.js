import chalk from "chalk";
import airport from "./airport.js";
import Plane from "./Plane.js";

// For additional tasks
import WeatherChecker from "./WeatherChecker.js";

console.log(chalk.blue(`PRODUCTION CODE`));
console.log(`====================`);

const oldMaxCapacity = airport.getMaxCapacity();
airport.modifyMaxCapacity(2);
const newMaxCapacity = airport.getMaxCapacity();
console.log(`Airport capacity modified from ${oldMaxCapacity} to ${newMaxCapacity}.`);
console.log(`--------------------`);

console.log(chalk.green(`Before Test Plane 1 landed:`));

const testPlane1 = new Plane('testPlane1');
console.log(`Test Plane 1 is at the airport: ${testPlane1.getIsAtAirport()}.`);
console.log(`The number of planes at the airport is ${airport.getNumOfPlanesAtAirport()}.`);
console.log(`--------------------`);

airport.instructToLand(testPlane1);
airport.addPlane(testPlane1);

console.log(chalk.green(`After Test Plane 1 has landed:`));
console.log(`Test Plane 1 is at the airport: ${testPlane1.getIsAtAirport()}.`);
console.log(`The number of planes at the airport is ${airport.getNumOfPlanesAtAirport()}.`);
console.log(`The airport is full: ${airport.isFull()}.`);
console.log(`--------------------`);

const testPlane2 = new Plane('testPlane2');
airport.instructToLand(testPlane2);
airport.addPlane(testPlane2);

console.log(chalk.green(`After Test Plane 2 has landed:`));
console.log(`Test Plane 2 is at the airport: ${testPlane1.getIsAtAirport()}.`);
console.log(`The number of planes at the airport is ${airport.getNumOfPlanesAtAirport()}.`);
console.log(`The airport is full: ${airport.isFull()}.`);
console.log(`--------------------`);

airport.instructToTakeOff(testPlane1);
airport.removePlane(testPlane1);

console.log(chalk.green(`After Test Plane 1 has taken off:`));
console.log(`Test Plane 1 is at the airport: ${testPlane1.getIsAtAirport()}.`);
console.log(`The number of planes at the airport is ${airport.getNumOfPlanesAtAirport()}.`);
console.log(`The airport is full: ${airport.isFull()}.`);
console.log(`--------------------`);

const testPlane3 = new Plane('testPlane3');
airport.instructToLand(testPlane3);
airport.addPlane(testPlane3);

console.log(chalk.green(`After Test Plane 3 has landed:`));
console.log(`Test Plane 3 is at the airport: ${testPlane3.getIsAtAirport()}.`);
console.log(`The number of planes at the airport is ${airport.getNumOfPlanesAtAirport()}.`);
console.log(`The airport is full: ${airport.isFull()}.`);
console.log(`--------------------`);

const testPlane4 = new Plane('testPlane4');
airport.instructToLand(testPlane4);
airport.addPlane(testPlane4);

console.log(chalk.green(`Air traffic control tries to instruct Test Plane 4 to land (when the airport is full):`));
console.log(`Test Plane 4 receives instruction to land: ${testPlane4.getInstructedToLand()}.`);
console.log(`Test Plane 4 is at the airport: ${testPlane4.getIsAtAirport()}.`);
console.log(`The number of planes at the airport is ${airport.getNumOfPlanesAtAirport()}.`);
console.log(`The airport is full: ${airport.isFull()}.`);

console.log(`====================`);
console.log(chalk.blue(`END OF CODE DEMONSTRATION`));

console.log(`\n********************************\n`);

// Additional Tasks Demonstration
console.log(chalk.magenta(`PRODUCTION CODE (for additional tasks)`));
console.log(`====================`);

console.log(chalk.green(`Test Plane 2 is instructed to take off when weather is not stormy:`));
console.log(`Current weather condition: ${WeatherChecker.getCurrentWeather()}.`);  // 'Not stormy' by default
airport.instructToTakeOff(testPlane2);
console.log(`Test Plane 2 receives instruction to take off: ${testPlane2.getInstructedToTakeOff()}.`);
airport.removePlane(testPlane2);
console.log(`Test Plane 2 is at the airport: ${testPlane2.getIsAtAirport()}.`);
console.log(`The number of planes at the airport is ${airport.getNumOfPlanesAtAirport()}.`);
console.log(`The airport is full: ${airport.isFull()}.`);

console.log(chalk.green(`Air traffic control instructs Test Plane 3 to take off despite stormy weather:`));
WeatherChecker.setCurrentWeather('stormy');  // Setting weather for testing purpose, functionality not for user
console.log(`Current weather condition: ${WeatherChecker.getCurrentWeather()}.`);
airport.instructToTakeOff(testPlane3);
console.log(`Test Plane 3 receives instruction to take off: ${testPlane3.getInstructedToTakeOff()}.`);

console.log(chalk.green(`Air traffic control instructs Test Plane 4 wants to land despite stormy weather:`));
console.log(`Current weather condition: ${WeatherChecker.getCurrentWeather()}.`);
airport.instructToLand(testPlane4);
console.log(`Test Plane 4 receives instruction to land: ${testPlane3.getInstructedToLand()}.`);

console.log(chalk.green(`Test Plane 1 is instructed to land when weather is not stormy:`));
WeatherChecker.setCurrentWeather('not stormy');
console.log(`Current weather condition: ${WeatherChecker.getCurrentWeather()}.`);
airport.instructToLand(testPlane1);
console.log(`Test Plane 1 receives instruction to land: ${testPlane1.getInstructedToLand()}.`);

console.log(`====================`);
console.log(chalk.magenta(`END OF CODE DEMONSTRATION`));
