/**
* generates jQuery objects for the 
* home, contact, and menu pages
* appends these to the 'main' section
* based on which nav link is clicked
*/
const pages = {
  init() {
	pages.config = {
	  active: 'home',
	  $main: $('main'),
      $nav: $('#nav'),
      home: pages.genHome(),
      contact: pages.genContact(),
      menu: pages.genMenu()
    }

    pages.setup();
  },

  setup() {
    const config = pages.config;
    const $main = config.$main;
    $main.append(config.home);

    // delegates click events to nav
    config.$nav.on('click', (event) => {
      const id = event.target.id;
      if (id !== config.active && id !== 'nav') {

      	// removes old page, sets active to new page, adds new page
        $main.children('section:nth-child(2)').detach();
        config.active = id;
        $main.append(config[id]);	
      }
    });
  },

  genRow(len) {
  	// return a string representing a row of specified length len
    const row = ['<div class=\'hex-row\'>'];
    for (i = 0; i < len; i = i + 1) {
      row.push('<div class=\'hex hexagon\'><div class=\'inner\'></div></div>');
    }

    row.push('</div>');
    return row.join('');
  },

  genHome() {
  	// return an object containing the home page content
    const $home = $('<section id=\'home-page\'></section>');
    const $grid = $('<div id=\'hex-grid\'></div>');
    
    // is content inside of hexagons
    const content = ['<img src=\'assets/espresso.png\' alt=\'espresso\'>', 
                     '<img src=\'assets/coffee.png\' alt=\'coffee\'>', 
                     '<img src=\'assets/donut.png\' alt=\'donuts\'>', 
                     'At our Coffee Shop, we want to inspire and enlighten you. Come to our ' +
                     'Coffee Shop in Colorado Springs for the best coffee and atmosphere.',
                     '<img src=\'assets/fudge.png\' alt=\'fudge\'>', 
                     '<img src=\'assets/sandwich.png\' alt=\'sandwiches\'>', 
                     '<img src=\'assets/tea.png\' alt=\'tea\'>'];
    
    // create 3 rows of hexagons
    const $firstRow = $(pages.genRow(2));
    const $secondRow = $(pages.genRow(3));
    const $thirdRow = $(pages.genRow(2));

    // add classes/ids for styling hexagons
    $firstRow.add($thirdRow).addClass('odd');
    $secondRow
      .children()
      .eq(1)
        .attr('id', 'about');
    $grid
      .append($firstRow)
      .append($secondRow)
      .append($thirdRow);
   
    // set hexagons to contain content from the array
    $grid.find('.inner').html(function(index, oldHtml) {
      $(this).html(content[index]);
    });

 	$home.append($grid);
    return $home;
  },

  genContact() {
  	// return an object containing the contact page content
    return $('<section id=\'contact-page\' class=\'square\'>' +
             '<h2>Contact</h2><p>Phone us: (719) 333-3333</p>' +
             '<p>Email us: example@example.com</p>' +
             '<p>Find us: <a href=\'#\'>Google Maps</a></p></section>');
  },

  genMenu() {
  	// return an object containing the menu page content
    return $('<section id=\'menu-page\' class=\'square\'>' +
             '<h2>Menu</h2><table><tbody>' +
             '<tr><td>Americano</td><td>$4.99</td></tr>' +
             '<tr><td>Espresso</td><td>$4.99</td></tr>' +
             '<tr><td>Cafe Late</td><td>$4.99</td></tr>' +
             '<tr><td>Caramel Mocchiato</td><td>$5.99</td></tr>' +
             '<tr><td>Doppio</td><td>$4.99</td></tr>' +
             '<tr><td>Hot Chocolate</td><td>$5.99</td></tr>' +
             '<tr><td>Drip Coffee</td><td>$2.99</td></tr>' +
             '<tr><td>Hot Tea</td><td>$3.99</td></tr>' +
             '<tr><td>Fudge</td><td>$5.99</td></tr>' +
             '<tr><td>Single Donut</td><td>$2.99</td></tr>' +
             '<tr><td>Sandwich</td><td>$7.99</td></tr>' +
             '</tbody></table></section>');
    }
  };

$(() => { 
  pages.init() ;
});
