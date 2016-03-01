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
    console.log($(".backToMenu").attr("key"));
  });
  //click backToMenu without dish showing in the menu
  $(".backToMenu").on("click",function(){  
  	id = $(this).attr('id');
    console.log($(this).attr("key"));
  	model.pendingBackToList(id);
  });
}
