//Importar las preguntas y respuestas
//Este import se puede hacer gracias a que en el index.html se ha incluido el atributo type="module" en la etiqueta script, lo que permite utilizar módulos de JavaScript y, por lo tanto, importar y exportar funcionalidades entre archivos.
import { questionsAndAnswers } from "./questions-and-answers.js";

//Variables
let selectedQuestions = [];
let score = 0;


//Seleccionar los elementos del DOM
const questionContainer = document.querySelector('#question-container');
const optionContainer = document.querySelector('#option-container');
const resultContainer = document.querySelector('#result-container');

//Punto de entrada del programa
showTopics();

function showTopics(){
    resultContainer.innerHTML = ''; // Limpia el contenedor de resultados para que no muestre el resultado anterior al mostrar los temas nuevamente.

    // Mantiene los estilos de los contenedores y muestra en pantalla
    questionContainer.innerHTML = '<h2 class="question">Seleccione el tema:</h2>';

    // console.log(Object.keys(questionsAndAnswers)); Esto imprimirá las categorías disponibles en el objeto questionsAndAnswers, lo que puede ser útil para verificar que las preguntas y respuestas se han importado correctamente.

    // El forEach recorre cada categoría de preguntas y respuestas, (option) es un objeto que representa cada categoría.
    Object.keys(questionsAndAnswers).forEach((option)=>{
        optionContainer.innerHTML += `<p class="option">${option.charAt(0).toUpperCase() + option.slice(1)}</p>`; //Primer letra en mayúscula y todo lo demás en minúscula.
        // Las comillas invertidas se hacen apretando Alt + cerrar corchete.
        // El ${} permite insertar el valor de la variable (option) dentro de la cadena de texto. Insertar código JS en un texto HTML.
    })

    const options = optionContainer.querySelectorAll('.option'); // Selecciona todas las opciones de categoría que se han creado dinámicamente y las almacena en la variable options.
    //Es una lista de nodos, no un array.

    // El forEach recorre cada opción de categoría y le agrega un evento de clic. Cuando se hace clic en una opción, se ejecuta la función que imprime la opción seleccionada en la consola. Por lo tanto al apretar en una opción, en consola se muestra la opción seleccionada.
    options.forEach((option)=>{
        option.addEventListener('click', ()=>{
            const topic = option.innerHTML.toLowerCase(); // Convierte el texto de la opción a minúsculas para facilitar la comparación con las claves del objeto questionsAndAnswers.
            selectTopic(topic);
        })
    })
}

//Función para seleccionar un tema y muestra la primer pregunta de dicho tema seleccionado.
function selectTopic(topic){
    selectedQuestions = questionsAndAnswers[topic];
    showQuestion(0);
    
}

function showQuestion(index){

    if(index >= selectedQuestions.length){
        showResult();
        return;
    }

    const {pregunta, respuestas, respuestaCorrecta} = selectedQuestions[index]; // Desestructuración del objeto para obtener la pregunta, las respuestas y la respuesta correcta de la pregunta actual.
    questionContainer.innerHTML = `<h2 class="question">${pregunta}</h2>`;

    showOptions(respuestas, respuestaCorrecta, index);
}


function showOptions(respuestas, respuestaCorrecta, index){

    optionContainer.innerHTML = ''; // Limpia las opciones anteriores antes de mostrar las nuevas opciones para la pregunta actual.
    respuestas.forEach((answer)=>{
        optionContainer.innerHTML += `<p class="option">${answer}</p>`;
    })

    const options = optionContainer.querySelectorAll('.option'); // Selecciona todas las opciones de respuesta que se han creado dinámicamente y las almacena en la variable options.
    

    options.forEach((option)=>{
        option.addEventListener('click', ()=>{
            // Comparar lo que el usuario hizo click con la respuesta correcta.
            if(option.innerHTML === respuestaCorrecta){
                option.classList.add('correct');
                score++;
            }else{
                option.classList.add('incorrect');
            }
            // correct e incorrect son clases CSS para definir estilos si es correcta o incorrecta la respuesta seleccionada.

            setTimeout(()=>{
                showQuestion(index + 1);
            }, 
            1000) //1 segundo de espera.

        })
    })
}

function showResult(){
    questionContainer.innerHTML = '';
    optionContainer.innerHTML = '';
    resultContainer.innerHTML = `<h2 class="total">Puntaje final: ${score} de ${selectedQuestions.length} preguntas acertadas</h2>
    <div class="button-container">
    <button id="restartBtn"> Reiniciar</button>
    </div>
    `;


const restartButton = resultContainer.querySelector('#restartBtn');

restartButton.addEventListener('click', ()=>{
    score = 0; // Reinicia el puntaje a 0 para que al reiniciar el juego no se mantenga el puntaje anterior.
    showTopics();
})
}