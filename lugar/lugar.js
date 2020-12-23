const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodedUrl = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${encodedUrl}`
    });

    const resp = await instance.get()
    
    if ( resp.data.length === 0 ) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data[0];
    const direccion = data.countryregion;
    const lat = data.location.lat;
    const lng = data.location.lng;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
