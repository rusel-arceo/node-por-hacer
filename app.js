const argv= require('./config/yargs').argv;
const color = require ('colors');
const { cargarDB, getListado } = require('./por-hacer/por-hacer');
//Este funciona y esta desetructurado, uso el de abajo solo por seguir el curso. const { crear, actualizar } = require('./por-hacer/por-hacer');
const porHacer = require('./por-hacer/por-hacer');

//variables
let tarea='';
let respuesta;
//console.log(argv);

 let comando = argv._[0];

 switch (comando)
 {

    case 'crear':
        
        console.log('crear');
        porHacer.crear(argv.descripcion);
       
    break;

    case 'enlistar':
        console.log('Lista de tareas por hacer: ');
        let listado=porHacer.getListado();
        for(let tarea of listado)
        {
            console.log('================Por hacer=================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            
            console.log('========================================='.green);
        }
    break;
    case 'actualizar':
        console.log('actualizar');
        respuesta = porHacer.actualizar(argv.descripcion, argv.completado);
        (respuesta)?console.log('La tarea se actualizó correctamente'):console.log('Ocurrio un error al actualizar');
    break;
    case 'eliminar':
        console.log('Eliminando...');
        respuesta = porHacer.eliminar(argv.descripcion);
        (respuesta)?console.log('La tarea se eliminó correctamente'):console.log('Ocurrio un error al eliminar,\n Revise que la descripción sea textualmente correcta');
    break;
    default: 
        console.log("Comando no reconocido");

 }