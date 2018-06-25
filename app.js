const argv = require('./config/yargs').argv;// para traer solamente la funcion y no todo el archivo
var colors = require('colors');

//aqui utilizo la destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


console.log('Base: ', argv.base);
console.log('Limite: ', argv.limite);

let comando = argv._[0];
console.log(comando);


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ` + `${archivo}`.green)).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

        break;
}




//asi se manejan las promesas
// crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => console.log(e));