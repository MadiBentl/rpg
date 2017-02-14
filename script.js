var buildBoard = function(){
  $( document ).ready(function() {
    $("#board").css("width", "800").css("font-size", "0");
    for (var x = 0; x< 800; x++){
        $("#board").append("<div class='block' style='display:inline-block; margin:0px; padding:0px; width:25px; height:25px; background-color:black'></div>");
    }
    $(".block").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});
  });
}
buildBoard();
