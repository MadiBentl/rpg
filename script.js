var buildBoard = function(){
  $( document ).ready(function() {
    $("#board").css("width", "800").css("display","inline-block").css("font-size", "0");
    for (var x = 10; x < 40; x++){
      for (var y = 10; y < 40; y++){
        $("#board").append("<div class='block' style='display:inline-block; margin:0px; padding:0px; width:25px; height:25px; background-color:black'></div>");
      }
    }
  });
}
var buildInventory = function(){
  $(document).ready(function(){
    $("#gameInfo").css("width", "300px").css("height", "200px").css("display", "inline-block");
  });
}
buildInventory();
buildBoard();
