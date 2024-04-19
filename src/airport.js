export const airport = {    
    capacity: 10,  // default capacity used for testing
    modifyCapacity: function (newCapacity){
        if (Number.isInteger(newCapacity)) {
            this.capacity = newCapacity;
        }
    },    
};

export default airport;