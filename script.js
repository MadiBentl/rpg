var buildBoard = function(){
  $( document ).ready(function() {
    for (var x = 10; x < 40; x++){
      for (var y = 10; y < 40; y++){
        $("#board").append("<div id='t" + x + y + "' class='tile'></div>");
      }
    }
  });
}

var mailbox ={
  position: "#t1515",
  exist: function(){
    $(document).ready(function(){
      $(mailbox.position).text("\uD83D\uDCEC");
    });
  }
}

var tree = {
  positions: ["#t2014","#t2015","#t2016","#t2017","#t2114","#t2115"],
  exist: function(){
    $(document).ready(function(){
      for (var x =0; x<tree.positions.length; x++){
        $(tree.positions[x]).text("\uD83C\uDF32");
      }
    });
  }
}
var miscellaneous = 
var sprite = {
  position: "#t1514",
  initializeSprite: function(){
    $(document).ready(function(){
      $("#t1514").addClass("visitedTile").text("@");
      $("#t2222").addClass("visitedTile").text("\uD83D\uDCEC");
      console.log("works");
    });
  },
  moveSprite: function(){
    $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          $(sprite.position).empty();
          tree.exist();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))-1);
          $(sprite.position).addClass("visitedTile").text("@");
          break;

          case 38: // up
          $(sprite.position).empty();
          tree.exist();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))-100);
          $(sprite.position).addClass("visitedTile").text("@");
          break;

          case 39: // right
          $(sprite.position).empty();
          tree.exist();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))+1);
          $(sprite.position).addClass("visitedTile").text("@");
          break;

          case 40: // down
          $(sprite.position).empty();
          tree.exist();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))+100);
          $(sprite.position).addClass("visitedTile").text("@");
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });
  }
};
//build a hash table with the locations of special items and what the special item is?


//buildInventory();
buildBoard();
tree.exist();
mailbox.exist();
sprite.initializeSprite();
sprite.moveSprite();
