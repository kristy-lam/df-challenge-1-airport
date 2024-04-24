import Plane from '../src/Plane.js';

export const airport = {    

    capacity: 10,  // default capacity used for testing

    modifyCapacity (newCapacity){
        if (Number.isInteger(newCapacity) && newCapacity >= 0) {
            this.capacity = newCapacity;
        }
    },

    planesAtAirport: [],

    getPlanesAtAirport() { return planesAtAirport },
    
    getNumOfPlanesAtAirport () { return this.planesAtAirport.length },
    
    isFull() { return this.planesAtAirport.length === this.capacity },    
    
    addPlane(plane) {
        if (plane instanceof Plane && !this.planesAtAirport.includes(plane) && !(this.isFull())) {
            plane.isAtAirport = true;
            this.planesAtAirport.push(plane);
        }
    },

    removePlane(plane) {
        plane.isAtAirport = false;
        const planeIndex = this.planesAtAirport.indexOf(plane);
        this.planesAtAirport.splice(planeIndex, 1);
    },

    instructToLand(plane) {
        if ((!this.planesAtAirport.includes(plane)) && (!this.isFull)) {
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