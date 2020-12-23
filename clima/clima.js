const axios = require('axios');

const getClima = async (lat, lng) => {

    const appid = '12ba06dc928282372ab84d8214d02efc'

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ appid }&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}