//add an image
//copy about how great the restaurant is
//headline
//append each element to the #content div
//use tabs to access the Contact and Menu pages
//do not use a separate page, change the content using jQuery
//when you click a tab, the JS will remove that tabs elements, 
//and add the new tabs elements

//document ready

var genRow = function(row_type, hex_type) {
	var row = $("<div class='hex-row " + row_type + "'></div>");
	row.append( genHex(hex_type) );
	row.append( genHex(hex_type) );
	return row;
}
var genHex = function(hex_type) {
	return $("<div class='hex hexagon " + hex_type + "'><div class='inner'></div></div>");
}

var genHome = function(content_list) {
	var home = $("<section id='hexagons'></section>");
	var grid = $("<div id='hex-grid'></div>");
	var first_row = genRow("odd", "top");
	var second_row = genRow("even", "middle");
	second_row.children().last().attr('id', 'about');
	second_row.append(genHex("middle"));
	var third_row = genRow("odd", "bottom");
	grid.append(first_row).append(second_row).append(third_row);
	grid.find(".inner").html( function(index, oldText) {
		$(this).html(content_list[index]);
	});

	home.append(grid);
	return home
}

var genContact = function() {
	var contact = $("<section id='contact' class='square'>  </section>");
	contact.append("<h2>Contact</h2>");
	contact.append("<p>Phone us: (719) 333-3333</p>");
	contact.append("<p>Email us: example@example.com</p>");
	contact.append("<p>Find us: <a href='#'>Google Maps</a></p>");
	return contact
}
var genMenu = function(menu_items) {
	var menu = $("<section id='menu' class='square'></section>");
	menu.append("<h2>Menu</h2>");
	
	var table = $("<table></table>");
	var tbody = $("<tbody></tbody>");
	for (i = 0; i < menu_items.length; i = i + 1) {
		tbody.append("<tr><td>" + menu_items[i] + "</td><td>$9.99</td></tr>");
	}
	table.append(tbody);
	menu.append(table);
	return menu
}

$(function() {
	var active = 'index';
	var main = $( "main" );
	var menuLink = $( "#menu-link" );
	var contactLink = $( "#contact-link");
	var homeLink = $( "#home-link" );
	var menu_items = ['Americano', 'Espresso', 'Cafe Late', 'Caramel Mocchiato', 
				  'Doppio', 'Hot Chocolate', 'Drip Coffee', 'Hot Tea', 'Fudge', 'Single Donut']
	var index_content = ["<img src='images/espresso.png' alt='espresso'>", 
						 "<img src='images/coffee.png' alt='coffee'>", 
						 "<img src='images/donut.png' alt='donuts'>", 
						 'At our Coffee Shop, we want to inspire and enlighten you. Come to our Coffee Shop in Colorado Springs for the best coffee and atmosphere.', 
						 "<img src='images/fudge.png' alt='fudge'>", 
						 "<img src='images/sandwich.png' alt='sandwiches'>", 
						 "<img src='images/tea.png' alt='tea'>"]


	var contact = genContact();
	var home = genHome(index_content);
	var menu = genMenu(menu_items);
	
	main.append(home);

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