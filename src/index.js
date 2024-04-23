import chalk from "chalk";
import airport from "./airport.js";
import Plane from "./Plane.js";

console.log(chalk.blue(`PRODUCTION CODE`));
console.log(`====================`);

const oldCapacity = airport.capacity;
airport.modifyCapacity(2);
const newCapacity = airport.capacity;
console.log(`Airport capacity modified from ${oldCapacity} to ${newCapacity}.`);
console.log(`--------------------`);

console.log(chalk.green(`Before Test Plane 1 landed:`));

const testPlane1 = new Plane();
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

const testPlane2 = new Plane();
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
console.log(chalk.blue(`END OF CODE`));
