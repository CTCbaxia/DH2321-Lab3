var DinnerMenuView = function(container,model){
	model.attach(this);
	this.dinnerMenu = container.find("#dinnerMenu");
	var menu = model.getFullMenu();
	var menuList = "";
	for (var i = 0; i < menu.length; i++) {
	    //console.log(menu[i]);
	    var id = menu[i].id;
	    var name = menu[i].name;
	    var price = model.getTotalDishPrice(id);
	    var totalPrice = model.getTotalMenuPrice();
	    
        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>"+ name +"</td>" +
						"<td style=\"text-align:right;\">" + price + "</td>" +
						"<td>"+ "<button type=\"button\" class=\"removeDish\" id="+ menu[i].id +">" + "delete" + "</button>" +"</td>" +
					"</tr>" +
				"</table>" ;
	};
        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>Total Price is </td>" +
						"<td style=\"text-align:right;\">" + totalPrice + " SEK</td>" +
					"</tr>" +
				"</table>";

	this.dinnerMenu.html(menuList);

	this.update = function(args){
		if (args == "addMenu" || args =="people"|| args == "removeDish"||args == "backToMenu") {
			this.dinnerMenu = container.find("#dinnerMenu");
			var menu = model.getFullMenu();
			var menuList = "";
			for (var i = 0; i < menu.length; i++) {
	   		 var id = menu[i].id;
	    	 var name = menu[i].name;
	    	 var price = model.getTotalDishPrice(id);
	    	 var totalPrice = model.getTotalMenuPrice();
	    
        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>"+ name +"</td>" +
						"<td style=\"text-align:right;\">" + price + "</td>" +
						"<td>"+ "<button type=\"button\"  class=\"removeDish\" id="+ menu[i].id +" >" + "delete" + "</button>" +"</td>" +
					"</tr>" +
				"</table>" ;
			};


        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>Total Price is </td>" +
						"<td style=\"text-align:right;\">" + totalPrice + " SEK</td>" +
					"</tr>" +
				"</table>";

	
		 //    $(".removeDish").on("click",function(){
		 //    var id = $(this).attr('id');
		 //    model.removeDishFromMenu(id);
		 //    model.notify("removeDish");
		 //    });
			
		this.dinnerMenu.html(menuList);
		$(".removeDish").click(removeDishFunction);

		}
		else if (args == "addPending") {
			this.dinnerMenu = container.find("#dinnerMenu");
			var menu = model.getFullPendingMenu();
			var menuList = "";
			for (var i = 0; i < menu.length-1; i++) {
	   		 var id = menu[i].id;
	    	 var name = menu[i].name;
	    	 var price = model.getTotalDishPrice(id);
	    	 
	    
	         menuList += "<table class=\"table\">" + 
						"<tr>" +
							"<td>"+ name +"</td>" +
							"<td style=\"text-align:right;\">" + price + "</td>" +
							"<td>"+ "<button type=\"button\"  class=\"removeDish\" id="+ menu[i].id +" >" + "delete" + "</button>" +"</td>" +//每列添加了button
						"</tr>" +
					"</table>" ;
			};
			var index = menu.length-1;
			var pendingID = menu[index].id;
	        menuList += "<table class=\"table\">" + 
						"<tr>" +
							"<td>"+ "pending" +"</td>" +
							"<td style=\"text-align:right;\">" + model.getTotalDishPrice(pendingID) + "</td>" +
							// "<td>"+ "<button type=\"button\"  class=\"removeDish\" id="+ menu[index].id +" >" + "delete" + "</button>" +"</td>" +//每列添加了button
						"</tr>" +
					"</table>" ;
			var totalPrice = model.getTotalMenuPrice();
	        menuList += "<table class=\"table\">" + 
						"<tr>" +
							"<td>Total Price is </td>" +
							"<td style=\"text-align:right;\">" + totalPrice + " SEK</td>" +
						"</tr>" +
					"</table>";

	
		 //    $(".removeDish").on("click",function(){
		 //    var id = $(this).attr('id');
		 //    model.removeDishFromMenu(id);
		 //    model.notify("removeDish");
		 //    });
			
		this.dinnerMenu.html(menuList);
		$(".removeDish").click(removeDishFunction);

		};

	}

}

