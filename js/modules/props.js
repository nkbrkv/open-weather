import Weather from "./weather";

export default class Props extends Weather {
    constructor(feelsLike, pressure, humidity, wind, config) {
        super();
        this.feelsLike = this.convertTemp(feelsLike);
        this.pressure = pressure;
        this.humidity = humidity;
        this.wind = wind;
        this.config = config;
    }

    render() {
        this.config.feel.textContent = `${this.feelsLike}°`;
        this.config.pressure.textContent = `${this.pressure} mm Hg`;
        this.config.humidity.textContent = `${this.humidity}%`;
        this.config.wind.textContent = `${this.wind} m/s`;
    }
}