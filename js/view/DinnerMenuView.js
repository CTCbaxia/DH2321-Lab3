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
						"<td>"+ "<button type=\"button\" class=\"removeDish\" id="+ menu[i].id +">" + "delete" + "</button>" +"</td>" +//每列添加了button
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
		if (args == "addMenu" || args =="people"|| args == "removeDish") {
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
						"<td>"+ "<button type=\"button\"  class=\"removeDish\" id="+ menu[i].id +" >" + "delete" + "</button>" +"</td>" +//每列添加了button
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
			// });
			
		this.dinnerMenu.html(menuList);

		};
		// else if (args == "removeDish") {
		// 	this.dinnerMenu = container.find("#dinnerMenu");
		// 	var menu = model.getFullMenu();
		// 	//console.log(menu);
		// 	var menuList = "";
		// 	for (var i = 0; i < menu.length; i++) {
	 //   		 //console.log(menu[i]);
	 //   		 var id = menu[i].id;
	 //    	 var name = menu[i].name;
	 //    	 var price = model.getTotalDishPrice(id);
	 //    	 var totalPrice = model.getTotalMenuPrice();

  //      		 menuList += "<table class=\"table\">" + 
		// 			"<tr>" +
		// 				"<td>"+ name +"</td>" +
		// 				"<td style=\"text-align:right;\">" + price + "</td>" +
		// 				"<td>"+ "<button type=\"button\" class=\"removeDish\" id= "+ menu[i].id +">" + "delete" + "</button>" +"</td>" +
		// 			"</tr>" +
		// 		"</table>" ;
		// 	};

  //       menuList += "<table class=\"table\">" + 
		// 			"<tr>" +
		// 				"<td>Total Price is </td>" +
		// 				"<td style=\"text-align:right;\">" + totalPrice + " SEK</td>" +
		// 			"</tr>" +
		// 		"</table>";

		// 	  // //remove dish function
		// 	  // $(".removeDish").click(function(){
		// 	  //   var id = $(this).attr('id');
		// 	  //   // console.log("I am on click");
		// 	  //   model.removeDishFromMenu(id);
		// 	  //   // console.log(model.removeDishFromMenu(id));
		// 	  // });

		// // console.log("view ok");
		// this.dinnerMenu.html(menuList);

		// };

	}
	//removeMenu update
}

