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
var prohibit = function(tile){
  $(tile).addClass("isProhibited");
}
var mailbox ={
  position: "#t1515",
  exist: function(){
    $(document).ready(function(){
        $(mailbox.position).text("\uD83D\uDCEC");
    });
  }
}
var house = {
  position: "#t1516",
  exist: function(){
    $(document).ready(function(){
      $(house.position).text("\uD83C\uDFE0");
    })
  }
}
var rock = {
  positions: [],
  generateRocks: function(){
    for (var x = 1010; x < 1040; x++){
      rock.positions.push("#t" + x);
    }
    for (var x = 1110; x < 1119; x++){
      rock.positions.push("#t" + x);
    }
    for (var x = 1123; x < 1125; x++){
      rock.positions.push("#t" + x);
    }
    for (var x = 1210; x < 1217; x++){
      rock.positions.push("#t" + x);
    }
    for (var x = 1310; x < 1316; x++){
      rock.positions.push("#t" + x);
    }
    for (var x = 1410; x < 1414; x++){
      rock.positions.push("#t" + x);
    }
    for (var x = 1510; x < 1513; x++){
      rock.positions.push("#t" + x);
    }
    console.log(rock.positions);
  },
  exist: function(){
    $(document).ready(function(){
      for (var y =0; y<rock.positions.length; y++){
        $(rock.positions[y]).addClass("isProhibited");
        if ($(rock.positions[y]).hasClass("visitedTile")){
          $(rock.positions[y]).text("\u26F0");
        }
      }
    });
  }
}
var water = {
  positions: ["#t3910","#t3911","#t3912","#t3913","#t3914","#t3810","#t3811","#t3812"],
  exist: function(){
    $(document).ready(function(){
      for (var x = 0; x< water.positions.length; x++){
        $(water.positions[x]).addClass("isProhibited");
        if ($(water.positions[x]).hasClass("visitedTile")){
          $(water.positions[x]).text("\uD83C\uDF0A");
        }
      }
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
var oracle = {
  position: "#t3438",
  exist: function(){
    $(document).ready(function(){
      $(oracle.position).text("\uD83D\uDC73");
    });
  }
}
//oracle tells you where you need to start your garden.
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
  rock.exist();
  water.exist();
  house.exist();
  oracle.exist();
}
var interact = function(){
  if (sprite.position == mailbox.position){
    console.log("You've Got Mail.");
  }
  $(document).keydown(function(e){
    switch(e.which){
        case 89: //y
        break;

        case 78:
        console.log("No wood for you");
        break;
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
  newPosition: "",
  moveSprite: function(){
    $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          sprite.newPosition = "#t"+ (Number(sprite.position.slice(-4))-1);
          if ((sprite.position.slice(4,6) > 10)
            && !$(sprite.newPosition).hasClass("isProhibited")){
            $(sprite.position).empty();
            miscellaneous();
            sprite.position = "#t"+ (Number(sprite.position.slice(-4))-1);
            $(sprite.position).addClass("visitedTile").text("@");
            interact();
          }
          else if ($(sprite.newPosition).hasClass("isProhibited")) {
            $(sprite.newPosition).addClass("visitedTile");
            miscellaneous();
          }
          break;

          case 38: // up
          sprite.newPosition = "#t"+ (Number(sprite.position.slice(-4))-100)
          if ((sprite.position.slice(2,4) > 10)
              && !$(sprite.newPosition).hasClass("isProhibited")){
            $(sprite.position).empty();
            miscellaneous();
            sprite.position = "#t"+ (Number(sprite.position.slice(-4))-100);
            $(sprite.position).addClass("visitedTile").text("@");
            interact();
          }
          else if ($(sprite.newPosition).hasClass("isProhibited")){
            $(sprite.newPosition).addClass("visitedTile");
            miscellaneous();
          }
          break;

          case 39: // right
          sprite.newPosition = "#t"+ (Number(sprite.position.slice(-4))+1);
          if ((sprite.position.slice(4,6) < 39)
            && !$(sprite.newPosition).hasClass("isProhibited")){
            $(sprite.position).empty();
            miscellaneous();
            sprite.position = "#t"+ (Number(sprite.position.slice(-4))+1);
            $(sprite.position).addClass("visitedTile").text("@");
            interact();
          }
          else if ($(sprite.newPosition).hasClass("isProhibited")) {
            $(sprite.newPosition).addClass("visitedTile");
            miscellaneous();
          }
          break;

          case 40: // down
          sprite.newPosition = "#t"+ (Number(sprite.position.slice(-4))+100);
          if ((sprite.position.slice(2,4) < 39)
            && !$(sprite.newPosition).hasClass("isProhibited")){
            $(sprite.position).empty();
            miscellaneous();
            sprite.position = "#t"+ (Number(sprite.position.slice(-4))+100);
            $(sprite.position).addClass("visitedTile").text("@");
            interact();
          }
          else if ($(sprite.newPosition).hasClass("isProhibited")) {
            $(sprite.newPosition).addClass("visitedTile");
            miscellaneous();
          }
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });
  }
};
//build a hash table with the locations of special items and what the special item is?
var initializeBoardElements = function(){
  rock.generateRocks();

  mailbox.exist();
}
var inventory = {
  wood: 0,
  water: 0,
  food: 0,
  ore: 0
}

var buildInventory= function(){
  $("#gameInfo").append("<div id='inventory'></div>");
};
buildInventory();
buildBoard();
initializeBoardElements();
tree.exist();
food.exist();
rock.exist();
sprite.initializeSprite();
sprite.moveSprite();
});
