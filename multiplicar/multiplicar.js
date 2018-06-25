const fs = require('fs'); //nativos
var colors = require('colors');
//const fs = require('express');//no nativos
//const fs = require('fs');//creados por nosotros

let listarTabla = (base, limite = 10) => {

    if (!Number(base)) {
        reject(`la base ${base} No es un número`);
        return;
    }
    if (!Number(limite)) {
        reject(`el limite ${limite} No es un número`);
        return;
    }

    console.log('============================='.green);
    console.log(`=======Tabla del ${base}============`.green);
    console.log('============================='.green);
    

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} No es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla del ${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla del ${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

