var OverviewDinnerView = function (container, model){
	model.attach(this);
	this.update = function(args){
		if (args == "confirmDinner") {
			this.totalPrice = container.find("#totalPrice");
    		this.totalPrice.html(model.getTotalMenuPrice());
			//console.log("I am in confirmDinner");
            // GET The number of people
			this.numberOfPeople = container.find(".numberOfPeople");
			this.numberOfPeople.html(model.getNumberOfGuests());
			this.listSelectDishes = container.find("#listSelectDishes");
			var selectDishes = "";
			var fullMenu = model.getFullMenu();

			this.numberOfPeople = container.find(".numberOfPeople");
			this.numberOfPeople.html(model.getNumberOfGuests());

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

	// // GET The number of people
	// this.numberOfPeople = container.find(".numberOfPeople");
	// this.numberOfPeople.html(model.getNumberOfGuests());
	// Get the list of the selected dishes in the menu
	this.numberOfPeople = container.find(".numberOfPeople");
	this.numberOfPeople.html(model.getNumberOfGuests());	

    // Get the full price
   

}

