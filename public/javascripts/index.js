jQuery(function($) {
  $( "#carousel ").rcarousel({
    margin: 100
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