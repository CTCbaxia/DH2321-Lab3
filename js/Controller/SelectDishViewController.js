var SelectDishViewController = function(view, model){

  //   $("#confirmDinner").on("click",function(){
  //   console.log("confirm confirmDinner");
  //   model.notify("confirmDinner");
  // })
  var id;
  $(".confirm").on("click",function(){  
    id = $(this).attr('id');
    $(".backToMenu").attr("key",1);
    model.addDishToMenu(id);
    // console.log($(".backToMenu").attr("key"));
    $(".selectDish").attr("keyDetail",0);
    console.log($(".selectDish").attr("keyDetail"));
  });
  //click backToMenu without dish showing in the menu
  $(".backToMenu").on("click",function(){  
  	id = $(this).attr('id');
  	model.pendingBackToList(id);
    $(".selectDish").attr("keyDetail",0);
    console.log($(".selectDish").attr("keyDetail"));
  });
}
