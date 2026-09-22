document.addEventListener("DOMContentLoaded", function () {

    const botonComenzar = document.getElementById("botonComenzar");
    const botonFinal = document.getElementById("botonFinal");

    const pantallaInicio = document.getElementById("pantallaInicio");
    const escena = document.querySelector(".escena");
    const mensajeFinal = document.getElementById("mensajeFinal");
    const pantallaFinal = document.getElementById("pantallaFinal");


    // Botón "Toca aquí"
    botonComenzar.addEventListener("click", function () {

        pantallaInicio.classList.add("ocultar");

        escena.classList.add("iniciar");


        // Después de 3 segundos desaparecen los girasoles
        setTimeout(function () {

            escena.classList.add("ocultarGirasoles");

        }, 3000);


        // Después de 3.5 segundos aparece el mensaje
        setTimeout(function () {

            mensajeFinal.classList.add("mostrar");

        }, 3500);

    });


    // Botón de la flecha
    botonFinal.addEventListener("click", function () {

        pantallaFinal.classList.add("mostrar");

    });

});