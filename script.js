var buildBoard = function(){
  $( document ).ready(function() {
    for (var x = 10; x < 40; x++){
      for (var y = 10; y < 40; y++){
        $("#board").append("<div id='t" + x + y + "' class='tile'></div>");
      }
    }
  });
}

var sprite = {
  position: "#t1514",
  initializeSprite: function(){
    $(document).ready(function(){
      $("#t1514").addClass("visitedTile").text("@");
      console.log("works");
    });
  },
  moveSprite: function(){
    $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          $(sprite.position).empty();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))-1);
          $(sprite.position).addClass("visitedTile").text("@");
          break;

          case 38: // up
          $(sprite.position).empty();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))-100);
          $(sprite.position).addClass("visitedTile").text("@");
          break;

          case 39: // right
          $(sprite.position).empty();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))+1);
          $(sprite.position).addClass("visitedTile").text("@");
          break;

          case 40: // down
          $(sprite.position).empty();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))+100);
          $(sprite.position).addClass("visitedTile").text("@");
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });
  }
};



//buildInventory();
buildBoard();
sprite.initializeSprite();
sprite.moveSprite();
