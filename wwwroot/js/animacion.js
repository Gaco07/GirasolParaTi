document.addEventListener("DOMContentLoaded", function () {

    const botonComenzar =
        document.getElementById("botonComenzar");

    const botonFinal =
        document.getElementById("botonFinal");

    const pantallaInicio =
        document.getElementById("pantallaInicio");

    const escena =
        document.querySelector(".escena");

    const mensajeFinal =
        document.getElementById("mensajeFinal");

    const pantallaFinal =
        document.getElementById("pantallaFinal");


    /* =========================================
       COMENZAR
    ========================================== */

    botonComenzar.addEventListener("click", function () {

        pantallaInicio.classList.add("ocultar");

        escena.classList.add("iniciar");

        setTimeout(function () {

            mensajeFinal.classList.add("mostrar");

        }, 5200);

    });


    /* =========================================
       ÚLTIMA PÁGINA
    ========================================== */

    botonFinal.addEventListener("click", function () {

        pantallaFinal.classList.add("mostrar");

    });

});