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
        return this.planesAtAirport.push(plane);
    }

};

export default airport;