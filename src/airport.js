import Plane from "./Plane.js";

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

    isAirportFull: function () {
        return this.getNumOfPlanesAtAirport === this.capacity;
    },

    addPlane: function (plane) {
        if (plane instanceof Plane && (!this.planesAtAirport.includes(plane))) {
            this.planesAtAirport.push(plane);
            plane.landed();
        }
    },

    instructToLand: function (plane) {
        if ((!this.planesAtAirport.includes(plane))) {
            plane.instructedToLand = true;
        }
    }

};

export default airport;