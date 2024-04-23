import Plane from '../src/Plane.js';

export const airport = {    

    capacity: 10,  // default capacity used for testing

    modifyCapacity: function (newCapacity){
        if (Number.isInteger(newCapacity) && newCapacity >= 0) {
            this.capacity = newCapacity;
        }
    },

    planesAtAirport: [],

    getNumOfPlanesAtAirport: function () {        
        return this.planesAtAirport.length;
    },
    
    isFull: function () {
        return this.planesAtAirport.length === this.capacity;
    },    

    addPlane: function (plane) {
        if (plane instanceof Plane && !this.planesAtAirport.includes(plane) && !(this.isFull())) {
            plane.isAtAirport = true;
            this.planesAtAirport.push(plane);
        }
    },

    removePlane: function (plane) {
        plane.isAtAirport = false;
        const planeIndex = this.planesAtAirport.indexOf(plane);
        this.planesAtAirport.splice(planeIndex, 1);
    },

    instructToLand: function (plane) {
        if ((!this.planesAtAirport.includes(plane))) {
            plane.instructedToLand = true;
        }
    }

};

export default airport;