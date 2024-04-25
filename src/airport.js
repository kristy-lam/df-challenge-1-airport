import Plane from '../src/Plane.js';

export const airport = {    

    maxCapacity: 10,  // default capacity used for testing

    getMaxCapacity() { return this.maxCapacity },
    
    modifyMaxCapacity (newMaxCapacity){
        if (Number.isInteger(newMaxCapacity) && newMaxCapacity >= 0) {
            this.maxCapacity = newMaxCapacity;
        }
    },

    planesAtAirport: [],
    
    getNumOfPlanesAtAirport () { return this.planesAtAirport.length },
    
    isFull() { return this.planesAtAirport.length === this.maxCapacity },    
    
    addPlane(plane) {
        if (plane instanceof Plane && !this.planesAtAirport.includes(plane) && !this.isFull()) {
            plane.isAtAirport = true;
            plane.instructedToLand = null;
            this.planesAtAirport.push(plane);
        }
    },

    removePlane(plane) {
        plane.isAtAirport = false;
        plane.instructedToTakeOff = null;
        const planeIndex = this.planesAtAirport.indexOf(plane);
        this.planesAtAirport.splice(planeIndex, 1);
    },

    instructToLand(plane) {
        if (!this.planesAtAirport.includes(plane) && !this.isFull()) {
            plane.instructedToLand = true;
        }
    },

    instructToTakeOff(plane) {
        if (this.planesAtAirport.includes(plane)) {
            plane.instructedToTakeOff = true;
        }
    }

};

export default airport;