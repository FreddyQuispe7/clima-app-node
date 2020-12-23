
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng( argv.direccion )
//     .then( console.log );

// clima.getClima( 40.750000, -74.00000 )
//     .then( console.log )
//     .catch( console.log )

let getInfo = async (direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima( coordenadas.lat, coordenadas.lng );
        return `El clima de ${ coordenadas.direccion } es de ${ temperatura } grados`
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`
    }
}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log )