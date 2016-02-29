var ListDishesViewController = function(view, model){
    view.selectType.change(function(){
  	var dishType = view.selectType.val();
  	model.setSelectedDish(dishType);

    $(".selectDish").on("click",function(){
        var value = [];
        var selectClass = $(".selectDish");
        var id = $(this).attr('id');
        model.setDishID(id); 
         $(".confirm").attr('id',id);
      });

  });
   
  view.search.click(function(){
  	var filter = view.keyWords.val();
  	model.setFilter(filter);
  });

  $(".selectDish").on("click",function(){
    var value = [];
    var selectClass = $(".selectDish");
    var id = $(this).attr('id');
    model.setDishID(id);
    $(".confirm").attr('id',id);
  });
  
  //unused 
  // $(".confirm").on("click",function(){  
  //   var id = $(this).attr('id');
  //   model.addDishToMenu(id);
  // });

}
