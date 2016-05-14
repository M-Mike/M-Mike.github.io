//Permet d'aller smoothly vers la section recherchée en cliquant sur l'onglet

//Pour descendre aux sections concernées
$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

//Pour revenir à l'icône onemillionlines
$("a.navbar-brand[href^='#']").on('click', function(e) {
//a = lien -> on a fait un lien vers navbar-brand
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){
      //-50 est un offset, pour régler la position lors du click

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

//Pour revenir à l'icône back-to-top
$("#back-to-top a[href^='#']").on('click', function(e) {
//a = lien -> on a fait un lien vers navbar-brand
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){
      //-50 est un offset, pour régler la position lors du click

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});