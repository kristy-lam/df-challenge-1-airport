export const airport = {    

    capacity: 10,  // default capacity used for testing

    modifyCapacity: function (newCapacity){
        if (Number.isInteger(newCapacity) && newCapacity >= 0) {
            this.capacity = newCapacity;
        }
    },

    planesAtAirport: [],

    getNumOfPlanesAtAirport: function () {
    },

};

export default airport;