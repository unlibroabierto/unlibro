  $(document).ready(function () {
    // Manejador de clics en los enlaces del menú de navegación
    $('a.nav-link').on('click', function (event) {
      // Prevenir el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtener el identificador de la sección a la que se va a desplazar
      var target = this.hash;

      // Desplazarse suavemente a la sección correspondiente
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800, function () {
        // Agregar el identificador de la sección a la URL
        window.location.hash = target;
      });
    });
  });



    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000, // Cambia este valor según la duración de cada slide en milisegundos
            animateOut: 'fadeOut', // Efecto de salida para el cambio de slide
            nav: false,
            dots: false
        });
    });


   
  