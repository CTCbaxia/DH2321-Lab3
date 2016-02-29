var DinnerMenuView = function(container,model){
	model.attach(this);
	this.dinnerMenu = container.find("#dinnerMenu #tableBody");
	this.price = container.find("#totalPrice")
	var menu = model.getFullMenu();
	var menuList = "";

	for (var i = 0; i < menu.length; i++) {
	    //console.log(menu[i]);
	    var id = menu[i].id;
	    var name = menu[i].name;
	    var price = model.getTotalDishPrice(id);
	    var totalPrice = model.getTotalMenuPrice();
	    
        menuList += "<tr>" +
						"<td>"+ name +"</td>" +
						"<td style=\"text-align:right;\">" + price + "</td>" +
						"<td>"+ "<button type=\"button\" class=\"removeDish\" id="+ menu[i].id +">" + "<span class = \"glyphicon glyphicon-remove\"></span></button>" +"</td>" +//每列添加了button
					"</tr>" ;
	};
        
    this.price.html(totalPrice);
	this.dinnerMenu.html(menuList);

	this.update = function(args){
		if (args == "addMenu" || args =="people"|| args == "removeDish") {
			this.dinnerMenu = container.find("#dinnerMenu #tableBody");
			var menu = model.getFullMenu();
			var menuList = "";
			for (var i = 0; i < menu.length; i++) {
	   		 var id = menu[i].id;
	    	 var name = menu[i].name;
	    	 var price = model.getTotalDishPrice(id);
	    	 var totalPrice = model.getTotalMenuPrice();
	    
        menuList += "<tr>" +
						"<td>"+ name +"</td>" +
						"<td style=\"text-align:right;\">" + price + "</td>" +
						"<td>"+ "<button type=\"button\" class=\"removeDish\" id="+ menu[i].id +">" + "<span class = \"glyphicon glyphicon-remove\"></span>" + "</button>" +"</td>" +//每列添加了button
					"</tr>" ;
			};


        this.price.html(totalPrice);
		this.dinnerMenu.html(menuList);
		$(".removeDish").click(removeDishFunction);

		};
	}
}

