export const airport = {
    capacity: 10,
};

export const modifyCapacity = (newCapacity) => {
    if (typeof newCapacity === Number) {
        airport.capacity = newCapacity;
    }    
}
