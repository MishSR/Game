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
    
