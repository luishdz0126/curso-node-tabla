const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'x'.green} ${ i } ${'='.bgGreen} ${ base * i }\n`;
        }

        if ( listar ) {

            console.log('===================');
            console.log('     Tabla del:'.green.underline, base);
            console.log('==================='.bgMagenta);
            console.log(consola);
        }
        

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        
        return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}