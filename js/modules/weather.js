import svg from './svg';

export default class Weather {
    constructor(time, state, temp, stateID, parent = '.weather__list') {
        this.time = this.convertTime(time);
        this.state = state;
        this.temp = this.convertTemp(temp);
        this.parent = parent;
        this.statePicture = this.selectPicture(stateID);

    }

    convertTime(time) {
        const timestamp = time;
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);
    }

    convertTemp(temp) {
        return Math.round(temp - 273.15);
    }

    selectPicture(stateID) {
        const id = (stateID + '');
        switch(+id[0]) {
            case 2: return svg.thunderstorm;
            case 3: return svg.drizzle;
            case 5: return svg.rain;
            case 6: return svg.snow;
            case 7: return svg.atmosphere;
            case 8: 
                if (stateID == 800) return svg.clear;
                else return svg.clouds;
        }
    }

    render() {
        const parent = document.querySelector(this.parent);
        const element = document.createElement('li');
        element.classList.add('weather__item');

        element.innerHTML = `
        <span class="weather__date">${this.time}</span>
        <i class="weather__icon">${this.statePicture}</i>
        <i>${this.state}</i>
        <span class="weather__temp">${this.temp}&#176</span>`;

        parent.append(element);
    }
}