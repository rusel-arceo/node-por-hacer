const descripcion = {
    descripcion : {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer, actualizar o eliminar'                        
   } 
 }

 const completado = {                            
    default: true,    
    alias:'c',
    desc: 'Marca como completado o pendiente la tarea'
    }    

const argv = require('yargs')
    .command('crear','Crea una nueva tarea por hacer', {descripcion})
    .command('actualizar','actualiza una tarea a completa', {
        descripcion,
        completado
        })
    .command('eliminar','Elimina una tarea por hacer',{descripcion})
        .argv;

module.exports={
    argv
}    
            