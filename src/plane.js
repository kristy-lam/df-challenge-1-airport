export default class Plane {
    constructor(name) {
        this.name = name;
        this.isAtAirport = false;
        this.instructedToLand = null;
        this.instructedToTakeOff = null;
    }

    getIsAtAirport() { return this.isAtAirport; };

    getInstructedToLand() { return this.instructedToLand };

    getInstructedToTakeOff() { return this.instructedToTakeOff };
    
};
