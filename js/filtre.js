


  // init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    filter: '.img',
    filter: '.vid',
    filter: '.article',
    filter: '*' 
  });

  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {

    var filterValue = $(this).attr('data-filter');
  
    $grid.isotope({ filter: filterValue });
  });