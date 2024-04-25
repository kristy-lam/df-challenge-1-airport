export default class WeatherChecker {

    static #currentWeather = 'stormy';

    // Setter for testing only
    static setCurrentWeather = weather => { WeatherChecker.#currentWeather = weather };

    static getCurrentWeather() { return WeatherChecker.#currentWeather };
    
};