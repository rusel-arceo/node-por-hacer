const fs = require('fs');

let listadoPorHacer=[];

const guardarDB = ( ) => {
    let data = JSON.stringify (listadoPorHacer); //Pasa el arreglo a formato JSON
    fs.writeFile('./db/data.json', data , ( err) => {  //Al parecer toma la ruta raíz como inicio
       if(err) throw new Error('Hubo un error al crear el archivo');
    //importante agregar el if porque si no siempre lo lanza
    });
    return true;
}

//leer el archivo.json y lo carga a el arreglo
const cargarDB = ()=>{
    try{
        listadoPorHacer=require('../db/data.json'); 
        //Yo usaba el fs.readFile pero como es un archivo .json se puede simplemente requerir y se convierte automaticamente
        //console.log(listadoPorHacer);        
    }catch{
        listadoPorHacer=[];
    }
    return listadoPorHacer;
}

//función para actualizar los por hacer de completado


const getListado=()=>{
    return cargarDB();
}

const actualizar=(descripcion, completado=true)=>{
    cargarDB();
    //let tarea = listadoPorHacer.find((tarea)=>{return tarea.descripcion=descripcion});
    //El find funciona bien, solo en caso de que no encuentre la tarea, devolvería undefined y se evaluaría con esto.
    //Usaré el finIndex que lo que devuelve es el index, para practica e ir igual que es curso
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion===descripcion);
    if(index>=0)  //si no lo encuentra devuelve -1
    {
        listadoPorHacer[index].completado=completado;
        guardarDB();
        console.log(listadoPorHacer[index]);
        return true;        
    }
    return false;
    
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion, //significa descripcion: descripcion pero en ECMA script 6
        //ya si tiene el mismo nombre la propieda y el valor, se pude omitir.
        completado: false
    };
    
    listadoPorHacer.push(porHacer);
    
        respuesta = guardarDB(listadoPorHacer);
        if (respuesta)
        {console.log(`La tarea ${listadoPorHacer} se ha creado`); }
          
        return porHacer;
}

const eliminar = (descripcion) => {
    let nuevoListadoPorHacer;
    cargarDB();
  
    nuevoListadoPorHacer = listadoPorHacer.filter((tarea) => {
        return tarea.descripcion!=descripcion;
    });
    //El filter regresa los que cumplan la condición, el map solo modifica los valores
    
    if(listadoPorHacer.length != nuevoListadoPorHacer.length)
    {
        listadoPorHacer=nuevoListadoPorHacer;
        
        console.log(listadoPorHacer);  
            respuesta = guardarDB();
            if (respuesta)
            {
                console.log('La tarea ');
                console.log(descripcion);
                console.log(' se ha Eliminado');
            }
              
            return true;
    }else{
        return false;
    }
}

// const actualizar = (descripcion, completado) => {
//     let porHacer = {
//         descripcion,
//         completado
//     };
    
//     listadoPorHacer.push(porHacer);
//     return porHacer;
// }

module.exports = 
{
    crear,
    actualizar,
    getListado,
    eliminar
}
