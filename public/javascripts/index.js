jQuery(function($) {
  $( "#carousel ").rcarousel({
    margin: 10,
    visible: 5,
    step: 1,
    carousel_height: 200
  });

  $( "#ui-carousel-next" )
    .add( "#ui-carousel-prev" )
    .hover(
    function() {
      $( this ).css( "opacity", 0.7 );
    },
    function() {
      $( this ).css( "opacity", 1.0 );
    }
  );
});