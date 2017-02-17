$(document).ready(function(){

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

var food = {
  position: "#t3312",
  exist: function(){
    $(document).ready(function(){
      if ($(food.position).hasClass("visitedTile")){
        $(food.position).text("\uD83C\uDF54");
      }
    });
  },
  changePosition: function(){
    var randomNumber = Math.floor(Math.random() * 15) + 5;

  }
}

var tree = {
  positions: ["#t2014","#t2015","#t2016","#t2017","#t2114","#t2115"],
  exist: function(){
    $(document).ready(function(){
      for (var x =0; x<tree.positions.length; x++){
        if ($(tree.positions[x]).hasClass("visitedTile")){
          $(tree.positions[x]).text("\uD83C\uDF32");
        }
      }
    });
  }
}
var miscellaneous = function(){
  tree.exist();
  mailbox.exist();
}
var interact = function(){
  if (sprite.position == mailbox.position){
    console.log("You've Got Mail.");
  }
  if (tree.positions.indexOf(sprite.position) > -1){
    console.log(sprite.position);
  }
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
          miscellaneous();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))-1);
          $(sprite.position).addClass("visitedTile").text("@");
          interact();
          break;

          case 38: // up
          $(sprite.position).empty();
          miscellaneous();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))-100);
          $(sprite.position).addClass("visitedTile").text("@");
          interact();
          break;

          case 39: // right
          $(sprite.position).empty();
          miscellaneous();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))+1);
          $(sprite.position).addClass("visitedTile").text("@");
          interact();
          break;

          case 40: // down
          $(sprite.position).empty();
          miscellaneous();
          sprite.position = "#t"+ (Number(sprite.position.slice(-4))+100);
          $(sprite.position).addClass("visitedTile").text("@");
          interact();
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
food.exist();
mailbox.exist();
sprite.initializeSprite();
sprite.moveSprite();
});
