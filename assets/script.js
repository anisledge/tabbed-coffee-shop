
var pages = {
	init: function() {
		pages.config = {
			active: 'home-link',
			main: $( "main" ),
			menuLink: $( "#menu-link" ),
			contactLink: $( "#contact-link"),
			homeLink: $( "#home-link" ),
			home: pages.genHome(),
			contact: pages.genContact(),
			menu: pages.genMenu()
		}
		
		pages.setup();
	},
	setup: function () {
		pages.config.main.append(pages.config.home);
		$("#nav").on('click', function( event ) {
			var id = event.target.id;
			if (id != pages.config.active && id != 'nav') {
				pages.config.main.children("section:nth-child(2)").detach();
				pages.config.active = id;
				if (id == 'menu-link') {
					pages.config.main.append(pages.config.menu);
				} else if (id == 'contact-link') {
					pages.config.main.append(pages.config.contact);
				} else if (id == 'home-link') {
					pages.config.main.append(pages.config.home);	
				}
			}
		});
	},
	genRow: function(len) {
		var row = $("<div class='hex-row'></div>");
		for (i = 0; i < len; i = i + 1) {
			row.append("<div class='hex hexagon'><div class='inner'></div></div>");
		}
		return row;
	},
	genHome: function() {
		var home = $("<section id='hexagons'></section>");
		var grid = $("<div id='hex-grid'></div>");
		var first_row = pages.genRow(2);
		var second_row = pages.genRow(3);
		var third_row = pages.genRow(2);
		first_row.add(third_row).addClass('odd');
		second_row.children().eq(1).attr('id', 'about');
		grid.append(first_row).append(second_row).append(third_row);
		
		var content = ["<img src='assets/espresso.png' alt='espresso'>", 
							 "<img src='assets/coffee.png' alt='coffee'>", 
							 "<img src='assets/donut.png' alt='donuts'>", 
							 'At our Coffee Shop, we want to inspire and enlighten you.\
							  Come to our Coffee Shop in Colorado Springs for the best \
							  coffee and atmosphere.', 
							 "<img src='assets/fudge.png' alt='fudge'>", 
							 "<img src='assets/sandwich.png' alt='sandwiches'>", 
							 "<img src='assets/tea.png' alt='tea'>"]
		
		grid.find(".inner").html( function(index, oldText) {
			$(this).html(content[index]);
		});

		home.append(grid);
		return home
	},
	genContact: function() {
		return $("<section id='contact' class='square'>\
			<h2>Contact</h2>\
			<p>Phone us: (719) 333-3333</p>\
			<p>Email us: example@example.com</p>\
			<p>Find us: <a href='#'>Google Maps</a></p>\
		    </section>");
	},
	genMenu: function() {
		return $("<section id='menu' class='square'>\
			<h2>Menu</h2>\
			<table><tbody>\
			<tr><td>Americano</td><td>$4.99</td></tr>\
			<tr><td>Espresso</td><td>$4.99</td></tr>\
			<tr><td>Cafe Late</td><td>$4.99</td></tr>\
			<tr><td>Caramel Mocchiato</td><td>$5.99</td></tr>\
			<tr><td>Doppio</td><td>$4.99</td></tr>\
			<tr><td>Hot Chocolate</td><td>$5.99</td></tr>\
			<tr><td>Drip Coffee</td><td>$2.99</td></tr>\
			<tr><td>Hot Tea</td><td>$3.99</td></tr>\
			<tr><td>Fudge</td><td>$5.99</td></tr>\
			<tr><td>Single Donut</td><td>$2.99</td></tr>\
			<tr><td>Sandwich</td><td>$7.99</td></tr>\
			</tbody></table>\
			</section>");
	}
};

$(function() {
	pages.init()
});