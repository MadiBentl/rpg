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
var stats = {
  life: 30,
  drainLife: function(qty){
    stats.life = stats.life - qty;
    $("#stats-data").text("\u2764"+ " " +stats.life);
    if (stats.life <= 0){
      $("#storyline").prepend("</br> sorry, you died!");
    }
  },
  resetLife: function(qty){
    stats.life= qty;
    $("#stats-data").text("\u2764"+ " " +stats.life);
  },
  assessLife: function(){
    $(sprite.newPosition).hasClass("garden") ? stats.resetLife(30) : stats.drainLife(1);
  }
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
  positions: ["#t3323","#t3223"],
  generateWater: function(){
    $(document).ready(function(){
      for (var x = 3511; x < 3515; x++){
        water.positions.push("#t" + x);
      }
      for (var x = 3610; x < 3612; x++){
        water.positions.push("#t" + x);
      }
      for (var x = 3614; x < 3617; x++){
        water.positions.push("#t" + x);
      }
      for (var x = 3615; x < 3619; x++){
        water.positions.push("#t" + x);
      }
      for (var x = 3519; x < 3520; x++){
        water.positions.push("#t" + x);
      }
      for (var x = 3420; x < 3423; x++){
        water.positions.push("#t" + x);
      }
      for (var x = 3510; x < 3515; x++){
        water.positions.push("#t" + x);
      }
    });
  },
  exist: function(){
    water.generateWater();
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
let oldwoman = {
  position: "#t1317",
  exist: function(){
    $(document).ready(function(){
      if ($(oldwoman.position).hasClass("visitedTile")){
        $(oldwoman.position).text("\uD83D\uDC75");
      }
    });
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
var lumberjack = {
  position: "#t2114",
  exist: function(){
    $(document).ready(function(){
      if ($(lumberjack.position).hasClass("visitedTile")){
        $(lumberjack.position).text("\uD83D\uDC68");
      }
    });
  },
  stage: 1,
  dialogue:{
    1: "You there! What are you doing cutting MY trees? \
    Get out of here before I throw my axe at you!",
    2: "Quest:"
  }
}
//oracle tells you where you need to start your garden.
var tree = {
  positions: ["#t2014","#t2015","#t2113","#t2016","#t2017","#t2114","#t2115"],
  exist: function(){
    $(document).ready(function(){
      if ($("#t2113").hasClass("visitedTile")) $("#t2113").text("\uD83C\uDF32");
      for (var x =2014; x<2018; x++){
        if ($("#t" + x).hasClass("visitedTile")){
          $(tree.positions).push("#t"+x);
          $("#t" + x).text("\uD83C\uDF32");
        }
      }
      for (var x =2115; x<2120; x++){
        if ($("#t" + x).hasClass("visitedTile")){
          $(tree.positions).push("#t"+x);
          $("#t" + x).text("\uD83C\uDF32");
        }
      }
      for (var x =2214; x<2221; x++){
        if ($("#t" + x).hasClass("visitedTile")){
          $(tree.positions).push("#t"+x);
          $("#t" + x).text("\uD83C\uDF32");
        }
      }
    });
  }
}
var buildGarden = function(){
  $(document).ready(function(){
    for (var x = 1715; x< 1720; x++){
      $("#t"+x).removeClass("visitedTile").addClass("garden");
    }
    for (var x = 1515; x< 1520; x++){
      $("#t"+x).removeClass("visitedTile").addClass("garden");
    }
    for (var x = 1615; x< 1620; x++){
      $("#t"+x).removeClass("visitedTile").addClass("garden");
    }
  });
};
var miscellaneous = function(){
  tree.exist();
  lumberjack.exist();
  buildGarden();
  mailbox.exist();
  rock.exist();
  water.exist();
  house.exist();
  oracle.exist();
  oldwoman.exist();
}
var interact = function(){
  if (sprite.position == mailbox.position){
    $("#storyline").prepend("</br> You've Got Mail. Read Mail? Y/N");
  }
  if (sprite.position == house.position){
    $("#storyline").prepend("</br> Welcome home! Take a nap? Y/N");
  }
  if (tree.positions.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br> Cut tree? Y/N")
  }
  $(document).one("keydown", function(e){
    switch(e.which){
        case 89: //y
        if (sprite.position == house.position){
          $("#storyline").prepend("</br> Zzz...zzz...zzz...");
          break;
        }
        if (sprite.position == mailbox.position){
          $("#storyline").prepend("</br> Welcome to the game!");
          break;
        }
        if (tree.positions.indexOf(sprite.position) > -1){
          $("#storyline").prepend("</br> Chop, Chop, Chop!");
          my_inv["wood"]["qty"] += 1;
          inventory.displayInventory();
          break;
        }
        break;

        case 78:
        if (sprite.position == mailbox.position){
          $("#storyline").prepend("</br> No mail for you.");
          break;
        }
        if (sprite.position == house.position){
          $("#storyline").prepend("</br> I'll sleep when I'm dead.");
          break;
        }
        break;
      }
    });
}
var sprite = {
  position: "#t1517",
  initializeSprite: function(){
    $(document).ready(function(){
      $("#t1517").addClass("visitedTile").text("@");
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
            stats.assessLife();
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
            stats.assessLife();
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
            stats.assessLife();
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
            stats.assessLife();
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
var my_inv = {
  wood:{
    qty: 4,
    symbol: "\uD83C\uDF32"
  },
  water:{
    qty: 3,
    symbol: "\uD83C\uDF0A"
  },
  food:{
    qty: 0,
    symbol: "\uD83C\uDF54"
  },
}
var inventory = {
  displayInventory: function(){
    var x = 1;
    for (var prop in my_inv){
      $("#i" + x).text(my_inv[prop]["symbol"] + my_inv[prop]["qty"]);
      x++;
    }
  }
}
var buildSideBar = function(){
  $("#gameInfo").append("<div id='inventory'></div>");
}
var buildStats = function(){
  $("#inventory").append("<div id= 'stats'></div>");
  $("#stats").append("<h2>Stats</h2>").append("<div id = 'stats-data'></div>");
  $("#stats-data").text("\u2764"+ " " +stats.life);
}
var buildInventory= function(){
  $("#inventory").append("<h2>Inventory</h2>").append("<div id='inventory-grid'></div>");
  for (var x = 1; x < 16; x++){
    $("#inventory-grid").append("<div class='inventory-item' id = 'i"+ x + "'></div>");
  }
};
var buildStoryLine = function(){
  $("#gameCommunications").append("<div id = 'story'></div>")
                          .append("<div id = 'quests'></div>")
                          .append("<h2>Story Line</h2>");
  $("#story").append("<h2>Story</h2>").append("<div id= 'storyline'></div>")
  $("#quests").append("<h2>Quests</h2>");
}
var buildGui = function(){
  buildBoard();
  buildSideBar();
  buildStats();
  buildInventory();
  buildStoryLine();
  buildGarden();
}
buildGui();
miscellaneous();
inventory.displayInventory();
initializeBoardElements();
sprite.initializeSprite();
sprite.moveSprite();
});
