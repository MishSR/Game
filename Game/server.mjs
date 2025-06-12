import Hello from './functions.js'
import inquire from 'inquirer';

inquire.prompt ([
    {
        type: 'input',
        name: 'nombre',
        message: '¿Cuál es tu nombre?'
    },
     {
    type: 'list',
    message: '¿Cuál es tu estado civil?',
    name: 'status',
    choices: ['Soltera', 'Casada', 'Divorciada', 'Viuda']
  }
   
]).then(respuestas => {
   if (!['Sherry', 'Karen', 'Itzel'].includes(respuestas.nombre)) {
        console.log('No puedes participar, gracias');
        return;
    } else{
        console.log('Hola mi amor, te estaba esperando');
    }

   if (!['Casada'].includes(respuestas.status)) {
        console.log('Respuesta incorrecta, sigue intentando');
        return;
    } else{
        console.log('¡Felicidades! Escogiste la unica respuesta correcta');}
});
    

/*import Hello from './functions.js'
import inquirer from 'inquirer';

async function iniciar (){
    let nombreValido= false;
    let respuestas= {};
}
while (!nombreValido) {
    const respuestaNombre = await inquirer.prompt ([
    {
        type: 'input',
        name: 'nombre',
        message: '¿Cuál es tu nombre?',
},
]);

 if (!['Sherry', 'Karen', 'Itzel'].includes(respuestaNombre.nombre)) {
        console.log('No puedes participar, gracias');
    } else{
        console.log('Hola mi amor, te estaba esperando');
        nombreValido = true;
        respuestas.nombre = respuestaNombre.nombre;
    }
}


let estadoValido= false;
while (!estadoValido){
    const respuestaEstado = await inquirer.prompt ([
        {
    type: 'list',
    message: '¿Cuál es tu cestado civil?',
    name: 'status',
    choices: ['Soltera', 'Casada', 'Divorciada', 'Viuda'],

    },
    ]);

    if (respuestaEstado.status !=='Casada'){
        console.log('Respuesta incorrecta, sigue intentando');
    } else{
        console.log('¡Felicidades! Escogiste la unica respuesta correcta');
    estadoValido= true;
    respuestas.status = respuestaEstado.status;
}

}

iniciar();*/