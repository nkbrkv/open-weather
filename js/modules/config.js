const appid = 'OPEN WEATHER API TOKEN';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&lang=ru&appid=${appid}`;

const config = {
    // For Header
    city: document.querySelector('#city'),
    state: document.querySelector('#state'),
    temp: document.querySelector('#temp'),

    // For Props
    feel: document.querySelector('#feel'),
    pressure: document.querySelector('#pressure'),
    humidity: document.querySelector('#humidity'),
    wind: document.querySelector('#wind'),
};

export {url, config};
