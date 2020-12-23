const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=12ba06dc928282372ab84d8214d02efc&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}