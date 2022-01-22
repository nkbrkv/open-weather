import Weather from "./weather";

export default class Header extends Weather{
    constructor(city, state, temp, config) {
        super();
        this.city = city;
        this.state = state;
        this.temp = this.convertTemp(temp);
        this.config = config;
    }
    render() {
        this.config.city.textContent = this.city;
        this.config.state.textContent = this.state;
        this.config.temp.textContent = `${this.temp}°`
    }
}