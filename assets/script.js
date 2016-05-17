var genRow = function(len) {
	var row = $("<div class='hex-row'></div>");
	for (i = 0; i < len; i = i + 1) {
		row.append(genHex());
	}
	return row;
}
var genHex = function() {
	return $("<div class='hex hexagon'><div class='inner'></div></div>");
}

var genHome = function() {
	var home = $("<section id='hexagons'></section>");
	var grid = $("<div id='hex-grid'></div>");
	var first_row = genRow(2);
	var second_row = genRow(3);
	var third_row = genRow(2);
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
}


var genContact = function() {
	var contact = $("<section id='contact' class='square'>\
		<h2>Contact</h2>\
		<p>Phone us: (719) 333-3333</p>\
		<p>Email us: example@example.com</p>\
		<p>Find us: <a href='#'>Google Maps</a></p>\
	    </section>");
	return contact
}

var genMenu = function() {
	var menu = $("<section id='menu' class='square'>\
		<h2>Menu</h2></section>");
	var table = $("<table><tbody>\
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
		</tbody></table>");
	menu.append(table);
	return menu
}

$(function() {
	var active = 'index';
	var main = $( "main" );
	var menuLink = $( "#menu-link" );
	var contactLink = $( "#contact-link");
	var homeLink = $( "#home-link" );
	
	var home = genHome();
	main.append(home);
	
	var contact = genContact();
	var menu = genMenu();

	contactLink.click(function() {
		if (active != 'contact') {
			main.children("section:nth-child(2)").detach();
			main.append(contact);
			active = 'contact';
		}
	});

	menuLink.click(function() {
		if (active != 'menu') {
			main.children("section:nth-child(2)").detach();
			main.append(menu);
			active = 'menu';
		}
	});

	homeLink.click(function() {
		if (active != 'home') {
			main.children("section:nth-child(2)").detach();
			main.append(home);
			active = 'home';
		}
	})
});