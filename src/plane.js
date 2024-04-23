import airport from "./airport.js";
export default class Plane {

    isAtAirport;
    
    landed = () => { this.isAtAirport = true; }
    
    instructedToLand;
    
};
