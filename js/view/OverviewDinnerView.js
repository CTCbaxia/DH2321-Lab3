var OverviewDinnerView = function (container, model){
	model.attach(this);


	// Get The number of people
	this.numberOfPeople = container.find(".numberOfPeople");
	this.numberOfPeople.html(model.getNumberOfGuests());	

    // Get the full price
   	this.update = function(args){
		if (args == "confirmDinner") {
            // GET The number of people
			this.numberOfPeople = container.find(".numberOfPeople");
			this.numberOfPeople.html(model.getNumberOfGuests());
			this.listSelectDishes = container.find("#listSelectDishes");
			this.totalPrice = container.find("#totalPrice");
    		this.totalPrice.html(model.getTotalMenuPrice());
			var selectDishes = "";
			var fullMenu = model.getFullMenu();


			for (var i = 0; i < fullMenu.length; i++) {
		    var dishID = fullMenu[i].id;
			var dishPrice = model.getTotalDishPrice(dishID);

			selectDishes += "<div class=\"col-md-2 col-md-offset-0\">" +
						    "<div class=\"dish\">" +
						    "<div><img src=\'images/" + fullMenu[i].image + "\' ></div>" +
						    "<div class=\"dishname\">" + fullMenu[i].name + "</div>" +
						    "</div>" +
						    "<div class= \"price\"> " +
							dishPrice + "SEK" +
						    "</div>" +
				        "</div>";
			};
        	this.listSelectDishes.html(selectDishes);
		};
	}

}

