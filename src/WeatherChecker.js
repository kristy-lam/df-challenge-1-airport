export default class WeatherChecker {

    static #currentWeather = 'not stormy';  // default 'not stormy' to enable tests for the marked tasks

    // Setter for testing only
    static setCurrentWeather = weather => { WeatherChecker.#currentWeather = weather };

    static getCurrentWeather() { return WeatherChecker.#currentWeather };
    
};