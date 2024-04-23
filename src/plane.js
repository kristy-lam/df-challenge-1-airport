export default class Plane {
    constructor(name) {
        this.name = name;
        this.isAtAirport = undefined;
        this.instructedToLand = undefined;
    }

    getIsAtAirport () {
        return this.isAtAirport;
    }
};
