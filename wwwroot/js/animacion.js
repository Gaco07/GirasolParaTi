document.addEventListener("DOMContentLoaded", function () {

    const botonComenzar = document.getElementById("botonComenzar");

    const botonFinal = document.getElementById("botonFinal");

    const pantallaInicio = document.getElementById("pantallaInicio");

    const escena = document.querySelector(".escena");

    const mensajeFinal = document.getElementById("mensajeFinal");

    const pantallaFinal = document.getElementById("pantallaFinal");


    botonComenzar.addEventListener("click", function () {

        pantallaInicio.classList.add("ocultar");

        escena.classList.add("iniciar");


        // Después de 8 segundos desaparecen los girasoles

        setTimeout(function () {

            escena.classList.add("ocultarGirasoles");

        }, 8000);


        // Después de 9 segundos aparece el mensaje centrado

        setTimeout(function () {

            mensajeFinal.classList.add("mostrar");

        }, 9000);

    });


    botonFinal.addEventListener("click", function () {

        pantallaFinal.classList.add("mostrar");

    });

});
```
