function getBotResponse(input) {

    //rock joji and rick
    if (input == "rock") {
        return "paper";
    } else if (input == "joji") {
        window.location.href = "https://youtu.be/uy4mdPZNBbY";
        return "te estamos redirigiendo";
    } else if (input == "rick") {
        window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        return "te estamos redirigiendo";
    }




    const hola = 'Hola';
    const hola1 ='hola';
    const hola2 ='ola';
    if (input.includes(hola)||input.includes(hola1)||input.includes(hola2)) {
        return "Hola, soy un bot de prueba (Si tienes dudas prueba diciendo ayuda)";
    }


    const help = 'Ayuda';
    const help1 ='ayuda';
    const help2 ='AYUDA';
    if (input.includes(help)||input.includes(help1)||input.includes(help2)) {
        pft="Este es el apartado de preguntas frecuentes, si no encuentras tu pregunta, puedes escribirnos tu duda por correo solo diciendo Correo:\n";
        pf1="¿pregunta frecuente 1? escribe 1\n";
        pf2="¿pregunta frecuente 2? escribe 2\n";
        pf3="¿pregunta frecuente 3? escribe 3\n";
        pf4="¿pregunta frecuente 4? escribe 4\n";
        pf5="¿pregunta frecuente 5? escribe 5\n";
        return(pft+pf1+pf2+pf3+pf4+pf5);
        
    }

    // preguntas frecuentes respuestas
    if(input == '1'||input.includes("pregunta frecuente 1")){
        return "Respuesta a la pregunta frecuente 1";
    }
    if(input == '2'||input.includes("pregunta frecuente 2")){
        return "Respuesta a la pregunta frecuente 2";
    }
    if(input == '3'||input.includes("pregunta frecuente 3")){
        return "Respuesta a la pregunta frecuente 3";
    }
    if(input == '4'||input.includes("pregunta frecuente 4")){
        return "Respuesta a la pregunta frecuente 4";
    }
    if(input == '5'||input.includes("pregunta frecuente 5")){
        return "Respuesta a la pregunta frecuente 5";
    }
    // preguntas frecuentes respuestas



    if(input == 'Correo'){
        window.location.href = "mailto:example@gmail.com";
        return "Te estamos redirigiendo al correo";
    }

    if(input == 'Tengo una duda'){
        return "Prueba escribiendo ayuda";
    }

    if(input=="❤️"){
        return "❤️ "+"Muchas gracias por tu apoyo";
    }


    // Simple responses
    if (input == "Hola" || input == "hola" || input == "ola" ) {
        return "Hola, soy un bot de prueba (Si tienes dudas prueba diciendo ayuda)";
    } else if (input == "adios" || input=="bye"||input=="chao"||input=="chau"||input=="Adios") {
        a= "Adios, muchas gracias por comprar";
        return a;
    } else {
        return "Prueba preguntar algo mas, si tienes dudas prueba diciendo ayuda";
    }
}
