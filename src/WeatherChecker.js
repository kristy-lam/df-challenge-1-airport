export default class WeatherChecker {

    static #currentWeather = 'stormy';

    static getCurrentWeather() { return WeatherChecker.#currentWeather };
    
};