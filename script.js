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
  monstersKilled: 0,
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
      if (mailbox.hasMsg == true){
        $(mailbox.position).text("\uD83D\uDCEC");
      }
      else
        $(mailbox.position).text("\uD83D\uDCEA");
    });
  },
  hasMsg:true,
  messages:{
    1: "WARNING: Watch out for black tiles, as the unknown world is full of monsters!"
  },
  msgCount: 1
}
var house = {
  position: ["#t1516","#t2627","#t2829","#t2830","#t2828","#t2728","#t2628","#t2729",
             "#t2912", "#t2813", "#t3211", "#t3113"],
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x < house.position.length; x++){
        if ($(house.position[x]).hasClass("visitedTile") || $(house.position[x]).hasClass("garden")){
          $(house.position[x]).text("\uD83C\uDFE0");
        }
      }
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
var riverman = {
  position: "#t3411",
  exist: function(){
    $(document).ready(function(){
      if ($(riverman.position).hasClass("visitedTile")){
        $(riverman.position).text("\uD83D\uDC66");
      }
    });
  },
  questGiven: false,
  dialogue: function(){
    if (riverman.questGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC66 \uD83C\uDF0A: The bridge broke and my family lives on the other side! Can you help me build a brige?");
      $("#quests").append("</br> - Help the Riverman build a bridge");
      riverman.questGiven = true;
    }
    else if (riverman.questGiven == true && lumberjack.chatted == false){
      $("#storyline").prepend("</br> \uD83D\uDC72: I don't know where to start");
      $("#storyline").prepend("</br> \uD83D\uDC66 \uD83C\uDF0A: Head to the forest South of your house!");
    }
    else if (riverman.questGiven == true && lumberjack.chatted == true ){
      $("#storyline").prepend("</br> \uD83D\uDC72: That's one grumpy lumberjack!");
      $("#storyline").prepend("</br> \uD83D\uDC66 \uD83C\uDF0A: He's the only one who knows how to build a bridge! Ask around and see if you can find something to sweeten him up!");
      lumberjack.questGiven = true;
    }
    else if (riverman.questGiven == true && my_inv["wood"]["qty"] >= 15){
      $("#storyline").prepend("</br> \uD83D\uDC72: I got all the wood I need!");
      $("#storyline").prepend("</br> \uD83D\uDC66 \uD83C\uDF0A: It takes more than that to build a bridge!");
    }
    else if (lumberjack.soup == true){
      $("#storyline").prepend("</br> \uD83D\uDC72: I need to make the lumberjack a Fisherman's Stew! Do you know the recipe?");
      $("#storyline").prepend("</br> \uD83D\uDC66 \uD83C\uDF0A: Fisherman's Stew! Now there's a meal I haven't tasted in years! They lost the recipe in a fire.");
    }
  }
}
var water = {
  positions: ["#t3323","#t3223", "#t3123", "#t3122", "#t3022", "#t2922",
              "#t2821", "#t2720", "#t2620", "#t2519", "#t2520", "#t2419",
              "#t2320", "#t2221", "#t2122", "#t2123", "#t2224", "#t2125",
              "#t2025", "#t1925", "#t1825", "#t1726", "#t1626", "#t1527",
              "#t1427", "#t1327", "#t1226", "#t1227", "#t1127"],
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
let oldwoman = {
  position: "#t1317",
  exist: function(){
    $(document).ready(function(){
      if ($(oldwoman.position).hasClass("visitedTile")){
        $(oldwoman.position).text("\uD83D\uDC75");
      }
    });
  },
  bookGiven: false,
  questGiven: false,
  dialogue: function(){
    if (lumberjack.questGiven != true){
      $("#storyline").prepend("</br> \uD83D\uDC75 \u26F0: Hello dear, I am the guardian of these mountains!");
    }
    else if (lumberjack.questGiven == true && oldwoman.bookGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC72: Do you know anything about Fisherman's Stew?");
      $("#storyline").prepend("</br> \uD83D\uDC75 \u26F0: I haven't heard about Fisherman's Stew in years! I believe I have a RiverPeople Recipe Book right here! Unfortunately it's not written in English. Maybe it'll help you out!");
      $("#storyline").prepend("</br> The Old Woman gives you a book written in a strange language \uD83D\uDCD5");
      oldwoman.bookGiven = true;
      my_inv["book"]["qty"] += 1;
      inventory.displayInventory();

    }
  }
}
let ghost = {
  positions: ["#t3320"],
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x< ghost.positions.length; x++){
        if($(ghost.positions[x]).hasClass("visitedTile")){
          $(ghost.positions[x]).text("\uD83D\uDC7B");
        }
      }
    });
  },
  questGiven:false,
  bookTranslated: false,
  dialogue: function(){
    if (ghost.questGiven == false && oldwoman.bookGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC7B : OOooooo OOooooOOoOOO!")
    }
    else if (ghost.questGiven == false && oldwoman.bookGiven == true && ghost.bookTranslated == false){
      $("#storyline").prepend("</br> The ghost makes some ghost-y noises and returns to you a translated book.");
      $("#quests").append("</br> - Make Fish Stew: 1 Octopus, 3 Tunas, 10 Tangs, 8 Mushrooms, 1 hot pepper.");
      ghost.bookTranslated = true;
    }
    else if (ghost.bookTranslated == true && ghost.questGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC7B : BOO! OooOOooO Ooo! ooO!! OO!!")
                     .prepend("</br> \uD83D\uDC72: I think he's trying to tell me something...");
    }
  }
}
let farmer = {
  position: "#t1422",
  questGiven: false,
  exist: function(){
    $(document).ready(function(){
      if ($(farmer.position).hasClass("visitedTile")){
        $(farmer.position).text("\uD83D\uDC69");
      }
    });
  },
  dialogue: function(){
    if (fruitTree.isSafe == false && farmer.questGiven == false){
      $("#storyline").prepend("</br>\uD83D\uDC69 \uD83C\uDF3E: My orchard is full of bears! I need your protection! Here, take this sword \uD83D\uDDE1");
      my_inv["sword"]["qty"] += 1;
      inventory.displayInventory();
      $("#quests").append("- Fight off the bears in the orchard!");
      farmer.questGiven = true;
    }
    else if (fruitTree.isSafe == false && farmer.questGiven == true){
      $("#storyline").prepend("</br>\uD83D\uDC69 \uD83C\uDF3E: Hurry up and kill the bears!");
    }
    else if (fruitTree.isSafe == true){
      $("#storyline").prepend(`</br> \uD83D\uDC69 \uD83C\uDF3E: Thank you so much for saving my orchard from
        those evil bears - please feel free to pick peaches from my trees whenever you like!
        You can keep the sword too!`);
      fruitTree.canPick = true;
    }
  }
}
let store = {
  position: "#t3016",
  isOpen: false,
  itemsForSale: ["1: Coffee", "2: Hot Pepper", "3: Balloon"],
  exist: function(){
    $(document).ready(function(){
      if($(store.position).hasClass("visitedTile")){
        $(store.position).text("\uD83C\uDFE3");
      }
    });
  }
}
let fruitTree = {
  position: ["#t1423","#t1424", "#t1425", "#t1323", "#t1324", "#t1325"],
  isSafe: false,
  canPick: false,
  exist: function(){
    $(document).ready(function(){
      for (var x = 0; x< fruitTree.position.length; x++){
        if ($(fruitTree.position[x]).hasClass("visitedTile")){
          $(fruitTree.position[x]).text("\uD83C\uDF33");
        }
      }
    });
  }
}
let farmHouse = {
  position: "#t1523",
  exist: function(){
    $(document).ready(function(){
      if ($(farmHouse.position).hasClass("visitedTile")){
        $(farmHouse.position).text("\uD83C\uDFE1");
      }
    });
  }
}
var oracle = {
  position: "#t3438",
  exist: function(){
    $(document).ready(function(){
      if ($(oracle.position).hasClass("visitedTile")){
        $(oracle.position).text("\uD83D\uDC73");
      }
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
  questGiven: false,
  chatted: false,
  soup: false,
  dialogue:function(){
    if (lumberjack.questGiven == false && riverman.questGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC68 \uD83C\uDF32: You there! Get away from my trees!");
    }
    else if (lumberjack.questGiven == false && riverman.questGiven == true){
      $("#storyline").prepend("</br> \uD83D\uDC68 \uD83C\uDF32: Hrumph! Why do you think I'd want ta talk to the likes of you!");
      lumberjack.chatted = true;
    }
    else if (lumberjack.questGiven == true && riverman.questGiven == true){
      $("#storyline").prepend("</br> \uD83D\uDC72: When was the last time you had Fisherman's Stew?");
      $("#storyline").prepend("</br> \uD83D\uDC68 \uD83C\uDF32: I haven't had Fisherman's Stew since the recipe was lost! If you can find out the recipe and make me the stew I'll do anything ye like!");
      lumberjack.soup = true;
    }
  }
}
//oracle tells you where you need to start your garden.
var tree = {
  positions: ["#t2014","#t2015","#t2113","#t2016","#t2017","#t2114","#t2115", "#t1220", "#t3031"],
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
  store.exist();
  bug.exist();
  mushroom.exist();
  ghost.exist();
  riverman.exist();
  tree.exist();
  lumberjack.exist();
  buildGarden();
  mailbox.exist();
  rock.exist();
  water.exist();
  house.exist();
  oracle.exist();
  oldwoman.exist();
  farmer.exist();
  farmHouse.exist();
  fruitTree.exist();
}
var interact = function(){
  if (sprite.position == mailbox.position){
    if (mailbox.hasMsg == true)
      $("#storyline").prepend("</br>\uD83D\uDCEC You've Got Mail. Read Mail?");
    else{
      $("#storyline").prepend(`</br> You don't have any mail right now.
      Your last message said: ${mailbox.messages[mailbox.msgCount]}`);
    }
  }
  else if (mushroom.position.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br>\uD83C\uDF44 Pick Mushroom?  Y/N");
  }
  else if (sprite.position == store.position){
    if (store.isOpen == false){
      $("#storyline").prepend("</br>\uD83C\uDFE3 The Store is Closed. Come Back Later");
    }
    else{
      $("#storyline").prepend("</br>\uD83C\uDFE3 The Store is Open. Would you like to Buy (B) or Sell (S)?");
    }
  }
  else if (sprite.position == oldwoman.position){
    oldwoman.dialogue();
  }
  else if (ghost.positions.indexOf(sprite.position) > -1){
    ghost.dialogue();
  }
  else if (sprite.position == lumberjack.position){
    lumberjack.dialogue();
  }
  else if (beast.positions.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br> You are being attacked!");
    if (beast.hp > 0){
      attackSprite();
      console.log("Attacking");
    }
    else{
      console.log("You died");
    }
  }
  else if (sprite.position == farmer.position){
    farmer.dialogue();
  }
  else if (sprite.position == riverman.position){
    riverman.dialogue();
  }
  else if (sprite.position == house.position){
    $("#storyline").prepend("</br>\uD83C\uDFE0 Welcome home! Take a nap? Y/N");
  }
  else if (tree.positions.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br>\uD83C\uDF32 Cut tree? Y/N");
    console.log(tree.positions);
    console.log(sprite.position);
  }
  else if ((fruitTree.position.indexOf(sprite.position) > -1) && fruitTree.canPick == true){
    $("#storyline").prepend("</br>\uD83C\uDF51 Pick Peach? Y/N");
    if (my_inv["peach"]["qty"] < 5){
      my_inv["peach"]["qty"] += 1;
      inventory.displayInventory();
    }
  }
  $(document).one("keydown", function(e){
    switch(e.which){
        case 89: //y
        if (sprite.position == house.position){
          $("#storyline").prepend("</br> Zzz...zzz...zzz...");
          break;
        }
        else if (mushroom.position.indexOf(sprite.position) >= 0){
          $("#storyline").prepend("</br> You picked a mushroom!");
          my_inv["mushroom"]["qty"] += 1;
          inventory.displayInventory();
          let mushroomPosition = mushroom.position.indexOf(sprite.position);
          mushroom.position.splice(mushroomPosition, 1);
          break;
        }
        else if (sprite.position == mailbox.position){
          $("#storyline").prepend("</br>" + mailbox.messages[mailbox.msgCount]);
          mailbox.hasMsg = false;
          break;
        }
        else if (tree.positions.indexOf(sprite.position) >= 0){
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
        else if (sprite.position == house.position){
          $("#storyline").prepend("</br> I'll sleep when I'm dead.");
          break;
        }
        break;
      }
    });
}
var beast = {
  positions: ["#t1417","#t1423","#t1424", "#t1425", "#t1323", "#t1324", "#t1325"],
  hp: 30
}
let bug = {
  position: ["#t2415", "#t3310"],
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x <= bug.position.length; x++){
        if ($(bug.position[x]).hasClass("visitedTile")){
          $(bug.position[x]).text("\uD83D\uDC1B");
        }
      }
    });
  }
}
var mushroom = {
  position: ["#t1710", "#t1713", "#t1811", "#t2010","#t2211"],
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x <= mushroom.position.length; x++){
        if ($(mushroom.position[x]).hasClass("visitedTile")){
          $(mushroom.position[x]).text("\uD83C\uDF44");
          console.log("existing");
        }
      }
    });
  }
}
var createHit = function(){
  return Math.floor(Math.random()*5);
}
var determineHit = function(){
  hit = createHit();
  beast.hp = beast.hp - hit;
}
var interval;
var attackSprite = function(){
  interval = setInterval(attacking, 1000);
}
var attacking = function(){
  //beast.hp = 30;
  stats.life = stats.life - createHit();
  $("#storyline").prepend("</br> Your HP: " + stats.life);
  $("#stats-data").text("\u2764"+ " " +stats.life);
  if ((beast.positions.indexOf(sprite.position) <= -1)){ //no longer on same tile
    clearInterval(interval);
    console.log(beast.positions[0], sprite.position, "cleared");
  }
  if (stats.life <= 0){ //you die
    $("#storyline").prepend("</br> You died!");
    clearInterval(interval);
  }
}
var bears = {
  position: ["#t1423","#t1424", "#t1425", "#t1323", "#t1324", "#t1325"],
  bearsKilled: 0
}
var sprite = {
  position: "#t1517",
  initializeSprite: function(){
    $(document).ready(function(){
      $("#t1517").addClass("visitedTile").text("\uD83D\uDC72");
    });
  },
  newPosition: "",
  moveSprite: function(){
    $(document).keydown(function(e) {

      switch(e.which) {
          case 32: //space bar
          e.preventDefault();
          if (beast.positions.indexOf(sprite.position) > -1 && my_inv["sword"]["qty"] == 0){
            $("#storyline").prepend("</br> Your attack is futile - if only you had a weapon of some kind.");
          }
          else if (beast.positions.indexOf(sprite.position) > -1 && my_inv["sword"]["qty"] > 0){ //if on a beast tile
console.log("sword words");
            determineHit(beast.hp)
            if (beast.hp > 0){
              $("#storyline").prepend("</br> Monster HP: " + beast.hp);
            }
            else if (beast.hp <= 0){ //beast dead
              let beastLocation = beast.positions.indexOf(sprite.position);
              let bearLocation = bears.position.indexOf(sprite.position);
              if (bears.position.indexOf(sprite.position) > -1){ //bears
                bears.bearsKilled += 1
                bears.position.splice(bearLocation, 1);
                console.log("spliced ", sprite.position, bears.position);
                $("#stats-bears").text("\uD83D\uDC3B" + " " + bears.bearsKilled + "/6");
                if (bears.position.length == 0){
                  fruitTree.isSafe = true;
                }
              }
              $("#storyline").prepend("</br> You killed the beast");
              stats.monstersKilled = stats.monstersKilled + 1;
              my_inv["money"]["qty"] += 1;
              inventory.displayInventory();
              $("#stats-monsters").text("\uD83D\uDC32" + "  " + stats.monstersKilled);
              beast.positions.splice(beastLocation, 1);
              console.log("beast", beast.positions);
              console.log("bear", bears.position);
              console.log("popped");
              clearInterval(interval);
              beast.hp = 30;
            }
            else if (stats.life <= 0){
              $("#storyline").prepend("</br> Sorry you died");
              clearInterval(interval);
            }
          }
          break;

          case 37: // left
          sprite.newPosition = "#t"+ (Number(sprite.position.slice(-4))-1);
          if ((sprite.position.slice(4,6) > 10)
            && !$(sprite.newPosition).hasClass("isProhibited")){
            clearInterval(interval);
            stats.assessLife();
            $(sprite.position).empty();
            miscellaneous();
            sprite.position = "#t"+ (Number(sprite.position.slice(-4))-1);
            $(sprite.position).addClass("visitedTile").text("\uD83D\uDC72");
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
            clearInterval(interval);
            stats.assessLife();
            $(sprite.position).empty();
            miscellaneous();
            sprite.position = "#t"+ (Number(sprite.position.slice(-4))-100);
            $(sprite.position).addClass("visitedTile").text("\uD83D\uDC72");
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
            clearInterval(interval);
            stats.assessLife();
            $(sprite.position).empty();
            miscellaneous();
            sprite.position = "#t"+ (Number(sprite.position.slice(-4))+1);
            $(sprite.position).addClass("visitedTile").text("\uD83D\uDC72");
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
            clearInterval(interval);
            $(sprite.position).empty();
            miscellaneous();
            sprite.position = "#t"+ (Number(sprite.position.slice(-4))+100);
            $(sprite.position).addClass("visitedTile").text("\uD83D\uDC72");
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
var initializeBoardElements = function(){
  rock.generateRocks();

  mailbox.exist();
}
var my_inv = {
  wood:{
    qty: 4,
    symbol: "\uD83C\uDF32"
  },
  money: {
    qty: 0,
    symbol: "\uD83D\uDCB0"
  },
  book:{
    qty: 0,
    symbol: "\uD83D\uDCD5"
  },
  water:{
    qty: 3,
    symbol: "\uD83C\uDF0A"
  },
  peach:{
    qty: 0,
    symbol: "\uD83C\uDF4A"
  },
  pick:{
    qty: 0,
    symbol: "\u26CF"
  },
  rock:{
    qty: 0,
    symbol: "\u26F0"
  },
  sword:{
    qty: 0,
    symbol: "\uD83D\uDDE1"
  },
  fishingPole:{
    qty: 0,
    symbol: "\uD83C\uDFA3"
  },
  tuna: {
    qty: 0,
    symbol: "\uD83D\uDC1F"
  },
  angelfish:{
    qty: 0,
    symbol: "\uD83D\uDC20"
  },
  octopus: {
    qty: 0,
    symbol: "\uD83D\uDC19"
  },
  seed: {
    qty: 0,
    symbol: "\uD83C\uDF30"
  },
  mushroom: {
    qty: 0,
    symbol: "\uD83C\uDF44"
  },
  tomato: {
    qty: 0,
    symbol: "\uD83C\uDF45"
  },
  stew: {
    qty: 0,
    symbol: "\uD83C\uDF72"
  }
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
  $("#stats").append("<h2>Stats</h2>").append("<div class = 'stat' id = 'stats-data'></div>")
                                      .append("<div class = 'stat' id = 'stats-monsters'></div>")
                                      .append("<div class = 'stat' id = 'stats-bears'></div>")
  $("#stats-monsters").text("\uD83D\uDC32" + "  " + stats.monstersKilled);
  $("#stats-bears").text("\uD83D\uDC3B" + " " + bears.bearsKilled + "/6");
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
