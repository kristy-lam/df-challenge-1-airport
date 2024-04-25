export default class WeatherChecker {

    static #currentWeather = undefined;

    // Setter for testing only
    static setCurrentWeather = weather => { WeatherChecker.#currentWeather = weather };

    static getCurrentWeather() { return WeatherChecker.#currentWeather };
    
};