var DinnerMenuViewController = function(view, model){
  //remove dish function
  $(".removeDish").on("click",function(){
    var id = $(this).attr('id');
    console.log(id);
    model.removeDishFromMenu(id);
    // console.log(model.removeDishFromMenu(id));
  })
}

