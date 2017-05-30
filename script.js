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
  },
  boostHP: function(num){
    stats.life += num;
    $("#stats-data").text("\u2764"+ " " +stats.life);
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
    1: "\u2620 WARNING: Watch out for black tiles, as the unknown world is full of monsters! \u2620"
  },
  remindMsg: function(){
    $("#storyline").prepend("</br>\uD83D\uDCEC You've Got Mail. Checkout Your Mailbox to Read it.");
  },
  msgCount: 1
}
var church = {
  position: "#t2629",
  exist: function(){
    $(document).ready(function(){
      if ($(church.position).hasClass("visitedTile")){
        $(church.position).text("\u26EA");
      }
    })
  }
}
var holyMountains = {
  position: ["#t3939", "#t3838", "#t3837", "#t3736", "#t3636", "#t3536", "#t3436", "#t3335", "#t3235", "#t3134"
            ,"#t3035", "#t2936", "#t2836", "#t2737", "#t2738", "#t2639", "#t2539", "#t2439", "#t2339"],
  exist: function(){
    $(document).ready(function(){
      for (var x = 0; x<holyMountains.position.length; x++){
        $(holyMountains.position[x]).addClass("holy");
        if (sprite.symbol == "\uD83D\uDC72"){
          $(holyMountains.position[x]).addClass("isProhibited");
        }
        else{
          $(holyMountains.position[x]).removeClass("isProhibited");
        }
        if ($(holyMountains.position[x]).hasClass("visitedTile")){
          $(holyMountains.position[x]).text("\uD83D\uDDFB");
        }
      }
    });
  }
}
var customsBuilding = {
  position: "#t2827",
  exist: function(){
    $(document).ready(function(){
      $(customsBuilding.position).addClass("isProhibited");
      if ($(customsBuilding.position).hasClass("visitedTile")){
        $(customsBuilding.position).text("\uD83C\uDFDB");
      }
    });
  }
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
var key = {
  position: "#t1010",
  exist: function(){
    $(document).ready(function(){
      if ($(key.position).hasClass("\uD83D\uDD11")){
        $(key.position).text("\uD83D\uDD11");
      }
    });
  }
}
var rock = {
  position: [],
  generateRocks: function(){
    for (var x = 1011; x < 1040; x++){
      rock.position.push("#t" + x);
    }
    for (var x = 1110; x < 1119; x++){
      rock.position.push("#t" + x);
    }
    for (var x = 1123; x < 1125; x++){
      rock.position.push("#t" + x);
    }
    for (var x = 1210; x < 1217; x++){
      rock.position.push("#t" + x);
    }
    for (var x = 1310; x < 1316; x++){
      rock.position.push("#t" + x);
    }
    for (var x = 1410; x < 1414; x++){
      rock.position.push("#t" + x);
    }
    for (var x = 1510; x < 1513; x++){
      rock.position.push("#t" + x);
    }
  },
  exist: function(){
    $(document).ready(function(){
      for (var y =0; y<rock.position.length; y++){
        $(rock.position[y]).addClass("isProhibited");
        if ($(rock.position[y]).hasClass("visitedTile")){
          $(rock.position[y]).text("\u26F0");
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
      $("#storyline").prepend("</br> \uD83D\uDC66 \uD83C\uDF0A: The bridge broke and my family lives on the other side! Can you help me build a bridge?");
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
  }
}
let castle = {
  position: "#t3814",
  exist: function(){
    $(document).ready(function(){
      $(castle.position).addClass("isProhibited");
      if ($(castle.position).hasClass("visitedTile")){
        $(castle.position).text("\uD83C\uDFF0");
      }
    });
  }
}
let beach = {
  position: "#t3521",
  exist: function() {
    $(document).ready(function(){
      if($(beach.position).hasClass("visitedTile")){
        $(beach.position).text("\u26F1")
      }
    });
  }
}
let beachbro = {
  position: "#t3520",
  exist: function(){
    $(document).ready(function(){
      if($(beachbro.position).hasClass("visitedTile")){
        $(beachbro.position).text("\uD83D\uDE0E");
      }
    });
  }
}
let guardsman = {
  position: ["#t3914", "#t3714"],
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x<guardsman.position.length; x++){
        $(guardsman.position[x]).addClass("isProhibited");
        if($(guardsman.position[x]).hasClass("visitedTile")){
          $(guardsman.position[x]).text("\uD83D\uDC82");
        }
      }
    });
  }
}
var urn = {
  position: ["#t3925", "#t3923", "#t3921", "#t3822", "#t3824"],
  unblessedGraves: ["#t3925", "#t3923", "#t3921", "#t3822", "#t3824"],
  exist: function(){
    $(document).ready(function(){
      for (var x = 0; x < urn.position.length; x++){
        if ($(urn.position[x]).hasClass("visitedTile")){
          $(urn.position[x]).text("\u26B1");
        }
      }
    });
  }
}
var water = {
  position: ["#t3323","#t3223", "#t3123", "#t3122", "#t3022", "#t2922",
              "#t2821", "#t2720", "#t2620", "#t2519", "#t2520", "#t2419",
              "#t2320", "#t2221", "#t2122", "#t2123", "#t2224", "#t2125",
              "#t2025", "#t1925", "#t1825", "#t1726", "#t1626", "#t1527",
              "#t1427", "#t1327", "#t1226", "#t1227", "#t1127", "#t2026",
              "#t2127", "#t2226", "#t2027", "#t2028", "#t1929", "#t1829",
              "#t1830", "#t1831", "#t1832", "#t1732", "#t1733", "#t1633",
              "#t1533", "#t1432", "#t1331", "#t1231", "#t1130"],
  generateWater: function(){
    $(document).ready(function(){
      for (var x = 3511; x < 3515; x++){
        water.position.push("#t" + x);
      }
      for (var x = 3610; x < 3612; x++){
        water.position.push("#t" + x);
      }
      for (var x = 3614; x < 3617; x++){
        water.position.push("#t" + x);
      }
      for (var x = 3615; x < 3619; x++){
        water.position.push("#t" + x);
      }
      for (var x = 3519; x < 3520; x++){
        water.position.push("#t" + x);
      }
      for (var x = 3420; x < 3423; x++){
        water.position.push("#t" + x);
      }
      for (var x = 3510; x < 3515; x++){
        water.position.push("#t" + x);
      }
    });
  },
  bridgeBuilt: false,
  buildBridge: function(){
    $(document).ready(function(){
      water.position.splice(water.position.indexOf("#t2620"), 1);
    });
  },
  exist: function(){
    water.generateWater();
    $(document).ready(function(){
      for (var x = 0; x< water.position.length; x++){
        $(water.position[x]).addClass("isProhibited");
        if ($(water.position[x]).hasClass("visitedTile")){
          $(water.position[x]).text("\uD83C\uDF0A");
        }
      }
      if (water.bridgeBuilt && $("#t2620").hasClass("visitedTile")){
        $("#t2620").text("\uD83C\uDF09").removeClass("isProhibited");
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
  position: "#t3320",
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x< ghost.position.length; x++){
        if($(ghost.position).hasClass("visitedTile")){
          $(ghost.position).text("\uD83D\uDC7B");
        }
      }
    });
  },
  questGiven:false,
  questFinished: false,
  bookTranslated: false,
  dialogue: function(){
    if (ghost.questGiven == false && oldwoman.bookGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC7B : OOooooo OOooooOOoOOO!")
    }
    else if (ghost.questGiven == false && oldwoman.bookGiven == true && ghost.bookTranslated == false){
      $("#storyline").prepend("</br> The ghost makes some ghost-y noises and returns to you a translated book.");
      $("#quests").append("</br> - \uD83C\uDF72 Make Fish Stew: 1 Octopus, 3 Tunas, 10 Tangs, 8 Mushrooms, 1 hot pepper.");
      ghost.bookTranslated = true;
    }
    else if (ghost.bookTranslated == true && oracle.beadsGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC7B : BOO! OooOOooO Ooo! ooO!! OO!!")
                     .prepend("</br> \uD83D\uDC72: I think he's trying to tell me something...");
    }
    else if (oracle.beadsGiven == true && ghost.questGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC7B : I'm so lonely!!")
                     .prepend("</br> \uD83D\uDC72: Do you know how I can get out of here?")
                     .prepend("</br> \uD83D\uDC7B: You can understand me! Please help me cross over to the other side. If you do that for me, I'll tell you how to get out of here.");
     ghost.questGiven = true;
     $("#quest").prepend("<br> - Help the ghost cross over to the other side.")
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
      $("#quests").append("- \uD83D\uDC3B Fight off the bears in the orchard!");
      farmer.questGiven = true;
    }
    else if (fruitTree.isSafe == false && farmer.questGiven == true){
      $("#storyline").prepend("</br>\uD83D\uDC69 \uD83C\uDF3E: Hurry up and kill the bears!");
    }
    else if (fruitTree.isSafe == true){
      $("#storyline").prepend(`</br> \uD83D\uDC69 \uD83C\uDF3E: Thank you so much for saving my orchard from
        those evil bears - please feel free to pick peaches from my trees whenever you like! Peaches will give you +10hp - press P to eat a peach.
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
        $(store.position).text("\uD83C\uDFEA");
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
  beadsGiven: false,
  exist: function(){
    $(document).ready(function(){
      if ($(oracle.position).hasClass("visitedTile")){
        $(oracle.position).text("\uD83D\uDC73");
      }
    });
  },
  dialogue: function(){
    if (oracle.beadsGiven == false){
      $("#storyline").prepend("<br>\uD83D\uDC72 Are you the oracle? Can you help me get home?");
      $("#storyline").prepend("<br>\uD83D\uDC73 Hello there! Only the oldest inhabitants of this land know how to leave - here's a gift to make communicating with them easier.");
      $("#storyline").prepend("<br>\uD83D\uDCFF The oracle hands you a set of mystic prayer beads.")
      my_inv["beads"]["qty"] += 1;
      inventory.displayInventory();
      oracle.beadsGiven = true;
      $("#quests").prepend("<br> - Find the oldest inhabitants of the land.");
    }
  }
}
var fire = {
  position: "#t2317",
  exist: function(){
    $(document).ready(function(){
      if ($(fire.position).hasClass("visitedTile")){
        $(fire.position).text("\uD83D\uDD25");
      }
    });
  }
}
let goat = {
  position: "#t1525",
  byFarm: true,
  exist: function(){
    $(document).ready(function(){
      if ($(goat.position).hasClass("visitedTile") && goat.byFarm == true){
        $(goat.position).text("\uD83D\uDC10");
      }
    });
  }
}
var camp = {
  position: "#t2318",
  exist: function(){
  $(document).ready(function(){
    if ($(camp.position).hasClass("visitedTile")){
      $(camp.position).text("\uD83C\uDFD5");
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
  soupMade:false,
  dialogue:function(){
    if (lumberjack.questGiven == false && riverman.questGiven == false){
      $("#storyline").prepend("</br> \uD83D\uDC68 \uD83C\uDF32: You there! Get away from my trees!");
    }
    else if (lumberjack.questGiven == false && riverman.questGiven == true){
      $("#storyline").prepend("</br> \uD83D\uDC68 \uD83C\uDF32: Hrumph! Why do you think I'd want ta talk to the likes of you!");
      lumberjack.chatted = true;
    }
    else if (lumberjack.questGiven == true && riverman.questGiven == true && lumberjack.soupMade == false){
      $("#storyline").prepend("</br> \uD83D\uDC72: When was the last time you had Fisherman's Stew?");
      $("#storyline").prepend("</br> \uD83D\uDC68 \uD83C\uDF32: I haven't had Fisherman's Stew since the recipe was lost! If you can find out the recipe and make me the stew I'll do anything ye like!");
      lumberjack.soupMade = true;
    }
    else if (my_inv["stew"]["qty"] >= 1){
      $("#storyline").prepend("</br> \uD83D\uDC66 \uD83C\uDF0A \uD83C\uDF72: You made me Fisherman's Stew! Thank you, brave adventurer! Bring me 15 pieces of wood and I will make a bridge for you.");
      my_inv["stew"]["qty"] -= 1;
      lumberjack.soupMade = true;
      inventory.displayInventory();
    }
    else if (my_inv["wood"]["qty"] >= 15 && lumberjack.soupMade == true){
      $("#storyline").prepend("</br> \uD83D\uDC68 \uD83C\uDF32: You give the lumberjack the wood, and he builds a bridge.");
      my_inv["wood"]["qty"] -= 15;
      water.bridgeBuilt = true;
    }
  }
}
var tree = {
  position: ["#t2014","#t2015","#t2113","#t2016","#t2017","#t2114","#t2115", "#t1220", "#t3031"],
  exist: function(){
    $(document).ready(function(){
      if ($("#t2113").hasClass("visitedTile")) $("#t2113").text("\uD83C\uDF32");
      for (var x =2014; x<2018; x++){
        if ($("#t" + x).hasClass("visitedTile")){
          $(tree.position).push("#t"+x);
          $("#t" + x).text("\uD83C\uDF32");
        }
      }
      for (var x =2115; x<2120; x++){
        if ($("#t" + x).hasClass("visitedTile")){
          $(tree.position).push("#t"+x);
          $("#t" + x).text("\uD83C\uDF32");
        }
      }
      for (var x =2214; x<2221; x++){
        if ($("#t" + x).hasClass("visitedTile")){
          $(tree.position).push("#t"+x);
          $("#t" + x).text("\uD83C\uDF32");
        }
      }
    });
  }
}
let housesToSearch = ["#t2627","#t2829","#t2830","#t2828","#t2728","#t2628","#t2729",
             "#t2912", "#t2813", "#t3211", "#t3113"];
let housesSearched = 0;
var generateRandomItem = function(){
  let numberOfItems = Math.floor(Math.random() * (4)) + 1;
  let possibleItems = ["seed", "money", "wood", "mushroom"];
  let receivedItems = [];
  let receivedItemsEmojis = [];
  if (housesToSearch.indexOf(sprite.position) > -1){
    for (let x = 0; x < numberOfItems; x++){
      let randomItem = Math.floor(Math.random() * 4)
      receivedItems.push(possibleItems[randomItem]);
      receivedItemsEmojis.push(my_inv[possibleItems[randomItem]]["symbol"]);
      my_inv[possibleItems[randomItem]]["qty"] += 1;
      inventory.displayInventory();
    }
    housesSearched += 1;
    if (housesSearched == 2){
      receivedItems.push("fishingPole");
      receivedItemsEmojis.push("\uD83C\uDFA3");
      my_inv["fishingPole"]["qty"] += 1;
      inventory.displayInventory();
      $("#storyline").prepend("</br>\uD83C\uDFA3 You found a fishing rod! Now to find some bait.");
    }
    housesToSearch.splice(housesToSearch.indexOf(sprite.position), 1);
  }
  if (receivedItems.length > 0){
    $("#storyline").prepend("</br> You Find: " + receivedItemsEmojis.join(""));
  }
  else{
    $("#storyline").prepend("</br> You've already searched this house");
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
  bag.exist();
  store.exist();
  bug.exist();
  mushroom.exist();
  alembic.exist();
  seed.exist();
  ghost.exist();
  riverman.exist();
  tree.exist();
  lumberjack.exist();
  fire.exist();
  urn.exist();
  castle.exist();
  guardsman.exist();
  beachbro.exist();
  beach.exist();
  camp.exist();
  buildGarden();
  mailbox.exist();
  rock.exist();
  key.exist();
  water.exist();
  house.exist();
  church.exist();
  customsBuilding.exist();
  holyMountains.exist();
  oracle.exist();
  oldwoman.exist();
  farmer.exist();
  farmHouse.exist();
  goat.exist();
  fruitTree.exist();
}
var purchase = function(){
  $(document).one("keydown", function(e){
    switch(e.which){
      case 49: //1
        if (store.isOpen && store.position == sprite.position){
          if (my_inv["money"]["qty"] > 4){
            $("#storyline").prepend("<br> \u2615 You drink your coffee and gain 40hp!");
            stats.life += 40;
            my_inv["money"]["qty"] -= 5;
            inventory.displayInventory();
          }
          else
            $("#storyline").prepend("<br> You don't have enough money...");
        }
      break;

      case 50: //2
        if (store.isOpen && store.position == sprite.position){
          if (my_inv["money"]["qty"] > 9){
            $("#storyline").prepend("<br> \uD83C\uDF36 You buy a hot pepper!");
            my_inv["pepper"]["qty"] += 1;
            my_inv["money"]["qty"] -= 10;
            inventory.displayInventory();
          }
          else {
            $("#storyline").prepend("<br> You don't have enough money...");
          }
        }
      break;

      case 51: //3
      if (store.isOpen && (store.position == sprite.position)){
        if (my_inv["money"]["qty"] >= 1){
          $("#storyline").prepend("<br> \uD83C\uDF88 The cashier hands your a balloon... which you accidentally release and watch float away. Oops.");
          my_inv["money"]["qty"] -= 1;
          inventory.displayInventory();
        }
        else {
          $("#storyline").prepend("<br> You don't have enough money...");
        }
      }
      break;
    }
  });
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
  else if (urn.position.indexOf(sprite.position) > -1){
    if (my_inv["holywater"]["qty"] >= 1){
      $("#storyline").prepend("\uD83C\uDF76 Sprinkle Holy Water? Y/N");
    }
  }
  else if(sprite.position == fire.position){
    if (my_inv["mushroom"]["qty"] >= 8 && my_inv["tang"]["qty"] >= 10 && my_inv["tuna"]["qty"] >= 3 && my_inv["pepper"]["qty"] >=1 && my_inv["octopus"]["qty"] >= 1){
      my_inv["mushroom"]["qty"] -= 8;
      my_inv["tang"]["qty"] -= 10;
      my_inv["tuna"]["qty"] -= 3;
      my_inv["pepper"]["qty"] -= 1;
      my_inv["octopus"]["qty"] -= 1;
      $("#storyline").prepend("<br> \uD83C\uDF72 You throw the tuna, tang, pepper and octopus on the fire and make a tasty Fish Stew!");
      my_inv["stew"]["qty"] += 1;
      inventory.displayInventory();
    }
    else{
      $("#storyline").prepend("<br> \uD83D\uDD25 Ouch! That fire sure is toasty!");
    }
  }
  else if (sprite.position == church.position){
    console.log("activated");
    if (my_inv["water"]["qty"] >= 15){
      $("#storyline").prepend("The priest gives you a bottle of Holy Water. \uD83C\uDF76");
      my_inv["holywater"]["qty"] += 1;
      my_inv["water"]["qty"] -= 15;
      inventory.displayInventory();
    }
  }
  else if (goat.position == sprite.position){
    if (water.bridgeBuilt == true){
      $("#storyline").prepend("<br>\uD83D\uDC10 Steal goat?");
    }
    else{
      $("#storyline").prepend("<br>\uD83D\uDC10 That goat sure looks pretty bored...");
    }
  }
  else if (oracle.position == sprite.position){
    oracle.dialogue();
  }
  else if (alembic.position == sprite.position){
    $("#storyline").prepend("<br> \u2697 Take alembic? Y/N");
  }
  else if (camp.position == sprite.position){
    $("#storyline").prepend("<br> \uD83C\uDFD5 Take Nap? Y/N");
  }
  else if (bug.position.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br>\uD83D\uDC1B Pick Up Bug? Y/N");
  }
  else if (bag.position.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br>\uD83D\uDC5B You found a bag. Looks inside? Y/N");
  }
  else if (seed.position.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br>\uD83C\uDF30 Take Seed?  Y/N");
  }
  else if (mushroom.position.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br>\uD83C\uDF44 Pick Mushroom?  Y/N");
  }
  else if (sprite.position == store.position){
    if (store.isOpen == false){
      $("#storyline").prepend("</br>\uD83C\uDFE3 The Store is Closed. Come Back Later");
    }
    else{
      $("#storyline").prepend("</br>\uD83C\uDFE3 The Store is Open. Would you like to Buy (B) or Sell Mushrooms (S)?");
    }
  }
  else if (sprite.position == oldwoman.position){
    oldwoman.dialogue();
  }
  else if (ghost.position.indexOf(sprite.position) > -1){
    ghost.dialogue();
  }
  else if (sprite.position == lumberjack.position){
    lumberjack.dialogue();
  }
  else if (beast.position.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br>\u2694 \uD83D\uDC32 You are being attacked!");
    if (beast.hp > 0){
      attackSprite();
    }
    else{
    }
  }
  else if (sprite.position == farmer.position){
    farmer.dialogue();
  }
  else if (sprite.position == riverman.position){
    riverman.dialogue();
  }
  else if (house.position.indexOf(sprite.position) > -1){
    if ($(sprite.position).hasClass("garden")){
      $("#storyline").prepend("</br>\uD83C\uDFE0 Welcome home! Take a nap? Y/N");
    }
    else{
      $("#storyline").prepend("</br>\uD83C\uDFE0 Search House? Y/N");
    }
  }
  else if (tree.position.indexOf(sprite.position) > -1){
    $("#storyline").prepend("</br>\uD83C\uDF32 Cut tree? Y/N");
  }
  else if ((fruitTree.position.indexOf(sprite.position) > -1) && fruitTree.canPick == true){
    $("#storyline").prepend("</br>\uD83C\uDF51 Pick Peach? Y/N");
  }
  $(document).one("keydown", function(e){
    switch(e.which){

                case 86: //V
                water.position.splice(water.position.indexOf("#t2620"), 1);
                $("#t2620").removeClass("isProhibited").text("");
                water.bridgeBuilt = true;
                ghost.questFinished = false;
                urn.unblessedGraves.length = 0;
                break;
        case 89: //y
          if ((house.position.indexOf(sprite.position) >= 0 && $(sprite.position).hasClass("garden")) ||
              sprite.position == camp.position){
            $("#storyline").prepend("</br>\uD83D\uDECF Zzz...zzz...zzz... It's a new day! \uD83C\uDF1E \uD83C\uDF1E \uD83C\uDF1E \uD83C\uDF1E");
            bug.newDay();
            mushroom.newDay();
            if (urn.unblessedGraves.length == 0 && ghost.questFinished == false) {
              console.log("urn active");
              ghost.position = "#t3928";
              ghost.questFinished = true;
            }
            (store.isOpen == false) ? store.isOpen = true : store.isOpen = false;
          }
        else if (house.position.indexOf(sprite.position) >= 0){
            generateRandomItem();
          }
        else if (urn.position.indexOf(sprite.position) > -1){
          if (my_inv["holywater"]["qty"] >= 1){
              $("#storyline").prepend("</br> \uD83C\uDF76 You sprinkle holy water on the grave.");
              urn.unblessedGraves.splice(sprite.position, 1);
              if (urn.unblessedGraves.length == 0){
                $("#storyline").prepend("</br> \uD83C\uDF76 You've blessed all the graves. Maybe the ghost will be happy now.");
              }
          }
        }
        else if (alembic.position == sprite.position){
            $("#storyline").prepend("<br> \u2697 I don't know how I could use this.");
            my_inv["alembic"]["qty"] += 1;
            alembic.isTaken = true;
            inventory.displayInventory();
        }
        else if (sprite.position == goat.position){
          if (water.bridgeBuilt == false){
            $("#storyline").prepend("<br> Why would you steal a goat?");
          }
          else if (water.bridgeBuilt == true){
            $("#storyline").prepend("<br> \uD83D\uDC10 You jump on the goat. Press N to get off the goat.");
            sprite.symbol = "\uD83D\uDC10";
            goat.byFarm = false;
            if (my_inv["fishingPole"]["qty"] > 0){
              my_inv["fishingPole"]["qty"] = 0;
              inventory.displayInventory();
              $("#storyline").prepend("<br> As you jump on the goat you accidentally break your fishing pole!");
            }
          }
        }
        else if (bag.position.indexOf(sprite.position) > -1){
          $("#storyline").prepend("</br>\uD83D\uDC5B The bag contains 5 coins \uD83D\uDCB0 \uD83D\uDCB0 \uD83D\uDCB0 \uD83D\uDCB0 \uD83D\uDCB0");
            my_inv["money"]["qty"] += 5;
            bag.position = [];
            inventory.displayInventory();
          }
          else if (bug.position.indexOf(sprite.position) > -1){
            $("#storyline").prepend("</br>\uD83D\uDC1B You picked up a bug");
            my_inv["bug"]["qty"] += 1;
            inventory.displayInventory();
            let bugPosition = bug.position.indexOf(sprite.position);
             bug.position.splice(bugPosition, 1);
          //  break;
          }
          else if (seed.position.indexOf(sprite.position) > -1){
            $("#storyline").prepend("</br>\uD83C\uDF30 You pick up the seed. I wonder what this is for!");
            my_inv["seed"]["qty"] += 1;
            inventory.displayInventory();
            let seedPosition = seed.position.indexOf(sprite.position);
            seed.position.splice(seedPosition, 1);
          }
          else if (mushroom.position.indexOf(sprite.position) >= 0){
            $("#storyline").prepend("</br> You picked a mushroom!");
            my_inv["mushroom"]["qty"] += 1;
            inventory.displayInventory();
            let mushroomPosition = mushroom.position.indexOf(sprite.position);
            mushroom.position.splice(mushroomPosition, 1);
            //break;
          }
          else if (sprite.position == mailbox.position){
            $("#storyline").prepend("</br>" + mailbox.messages[mailbox.msgCount]);
            mailbox.hasMsg = false;
            //break;
          }
          else if (tree.position.indexOf(sprite.position) >= 0){
            $("#storyline").prepend("</br> Chop, Chop, Chop!");
            my_inv["wood"]["qty"] += 1;
            inventory.displayInventory();
            //break;
          }
          else if ((fruitTree.position.indexOf(sprite.position) > -1) && fruitTree.canPick == true){
            if (my_inv["peach"]["qty"] < 5){
              my_inv["peach"]["qty"] += 1;
              inventory.displayInventory();
              $("#storyline").prepend("</br> \uD83C\uDF51 You pick a peach.");
            }
            else{
              $("#storyline").prepend("</br> I think that's enough peaches for now.");
            }
          }
        break;

        case 78: //N
          if (sprite.position == mailbox.position){
            $("#storyline").prepend("</br> No mail for you.");
            //break;
          }
          else if (sprite.position == house.position){
            $("#storyline").prepend("</br> I'll sleep when I'm dead.");
        //    break;
          }
          else if (goat.byFarm == false){
            if (!($(sprite.position).hasClass("holy"))){
              goat.byFarm = true;
              goat.position = sprite.position;
              sprite.symbol = "\uD83D\uDC72";
            }
            else{
              $("#storyline").prepend("<br> \uD83D\uDDFB \uD83D\uDC10 You can't get off the goat while on the Holy Mountains!");
            }
          }

        break;

        case 80: //p
        if (my_inv["peach"]["qty"] > 0){
          stats.boostHP(10);
          my_inv["peach"]["qty"] -= 1;
          inventory.displayInventory();
        }
        break;

      case 66: //b
        if (sprite.position == store.position){
          if (store.isOpen == true){
            $("#storyline").prepend("</br> What would you like to buy?")
                           .prepend("</br>" + store.itemsForSale);
            purchase();
          }
        }
      break;

      case 83: //S
        if (sprite.position == store.position){
          if (store.isOpen == true){
            if (my_inv["mushroom"]["qty"] > 0){
              $("#storyline").prepend("</br> \uD83C\uDF44 You sold 1 mushroom.");
              my_inv["mushroom"]["qty"] -=1;
              my_inv["money"]["qty"] += 1;
              inventory.displayInventory();
            }
            else{
              $("#storyline").prepend("You don't have any mushrooms.")
            }
          }
          else{
            $("#storyline").prepend("The store is closed.");
          }
        //  break;
        }
      break;
    }
    });
}
var beast = {
  position: ["#t1417","#t1423","#t1424", "#t1425", "#t1323", "#t1324", "#t1325"],
  hp: 30
}
let alembic = {
  position: "#t3739",
  isTaken: false,
  exist: function(){
    if (alembic.isTaken == false){
      $(document).ready(function(){
        if($(alembic.position).hasClass("visitedTile")){
          $(alembic.position).text("\u2697");
        }
      });
    }
  }
}
let bug = {
  position: ["#t2415", "#t3310"],
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x < bug.position.length; x++){
        if ($(bug.position[x]).hasClass("visitedTile")){
          $(bug.position[x]).text("\uD83D\uDC1B");
        }
      }
    });
  },
  newDay: function(){
    let bugArrays =[["#t2415", "#t3310"],["#t2921", "#t2516"],["#t1910", "#t1911"]];
    let x = Math.floor(Math.random() * (3));
    $(document).ready(function(){
      for (let x = 0; x < bug.position.length; x++){
          $(bug.position[x]).empty();
      }
      bug.position = bugArrays[x];
    });
    bug.exist();
  }
}
var bag = {
  position: ["#t2920"],
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x<= bag.position.length; x++){
        if ($(bag.position[x]).hasClass("visitedTile")){
          $(bag.position[x]).text("\uD83D\uDC5B");
        }
      }
    });
  }
}
let seed = {
  position: ["#t3419","#t3517"],
  newDay: function(){
    seed.position = ["#t3419","#t3517"],
    seed.exist();
  },
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x <= seed.position.length; x++){
        if ($(seed.position[x]).hasClass("visitedTile")){
          $(seed.position[x]).text("\uD83C\uDF30");
        }
      }
    });
  }
}
var mushroom = {
  position: ["#t1710", "#t1713", "#t1811", "#t2010","#t2211"],
  newDay: function(){
    mushroom.position = ["#t1710", "#t1713", "#t1811", "#t2010","#t2211"];
    mushroom.exist();
  },
  exist: function(){
    $(document).ready(function(){
      for (let x = 0; x <= mushroom.position.length; x++){
        if ($(mushroom.position[x]).hasClass("visitedTile")){
          $(mushroom.position[x]).text("\uD83C\uDF44");
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
var goFishing = function(){
  let caughtOctopus = Math.floor(Math.random() * 10);
  if (my_inv["fishingPole"]["qty"] > 0 && my_inv["bug"]["qty"] > 0){//&& my_inv["bug"]["qty"] > 0){
    if (caughtOctopus == 9){
      my_inv["octopus"]["qty"] += 1;
      my_inv["bug"]["qty"] -= 1;
      $("#storyline").prepend("<br> You caught an Octopus");
    }
    else if (caughtOctopus <= 8 && caughtOctopus >= 5){
      my_inv["tuna"]["qty"] += 1;
      my_inv["bug"]["qty"] -= 1;
      $("#storyline").prepend("<br> You caught a Tuna");
    }
    else if (caughtOctopus >= 1){
      my_inv["tang"]["qty"] += 1;
      my_inv["bug"]["qty"] -= 1;
      $("#storyline").prepend("<br> You caught a Tang");
    }
  }
  else if (my_inv["alembic"]["qty"] >= 1){
    my_inv["water"]["qty"] += 1;
    $("#storyline").prepend("<br> You scoop some water up into the alembic");
  }
  inventory.displayInventory();
}
var attacking = function(){
  //beast.hp = 30;
  stats.life = stats.life - createHit();
  $("#storyline").prepend("</br> \u2764 Your HP: " + stats.life);
  $("#stats-data").text("\u2764"+ " " +stats.life);
  if ((beast.position.indexOf(sprite.position) <= -1)){ //no longer on same tile
    clearInterval(interval);
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
  symbol: "\uD83D\uDC72",
  initializeSprite: function(){
    $(document).ready(function(){
      $("#t1517").addClass("garden").text(sprite.symbol);
    });
  },
  newPosition: "",
  moveSprite: function(){
    $(document).keydown(function(e) {

      switch(e.which) {
          case 32: //space bar
          e.preventDefault();
          if (beast.position.indexOf(sprite.position) > -1 && my_inv["sword"]["qty"] == 0){
            $("#storyline").prepend("</br> Your attack is futile - if only you had a weapon of some kind.");
          }
          else if (beast.position.indexOf(sprite.position) > -1 && my_inv["sword"]["qty"] > 0){ //if on a beast tile
            determineHit(beast.hp)
            if (beast.hp > 0){
              $("#storyline").prepend("</br> \uD83D\uDC32 \u2764 Monster HP: " + beast.hp);
            }
            else if (beast.hp <= 0){ //beast dead
              let beastLocation = beast.position.indexOf(sprite.position);
              let bearLocation = bears.position.indexOf(sprite.position);
              if (bears.position.indexOf(sprite.position) > -1){ //bears
                bears.bearsKilled += 1
                bears.position.splice(bearLocation, 1);
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
              beast.position.splice(beastLocation, 1);
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
            if ($(sprite.position).hasClass("garden")){
              $(sprite.position).text(sprite.symbol);
            }
            else{
              $(sprite.position).addClass("visitedTile").text(sprite.symbol);
            }
            interact();
          }
          else if ($(sprite.newPosition).hasClass("isProhibited")) {
            $(sprite.newPosition).addClass("visitedTile");
            if (!$(sprite.newPosition).hasClass("fished")){
              if (water.position.indexOf(sprite.newPosition) > -1){
                goFishing();
                $(sprite.newPosition).addClass("fished");
              }
            }
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
            if ($(sprite.position).hasClass("garden")){
              $(sprite.position).text(sprite.symbol);
            }
            else{
              $(sprite.position).addClass("visitedTile").text(sprite.symbol);
            }
            interact();
          }
          else if ($(sprite.newPosition).hasClass("isProhibited")){
            $(sprite.newPosition).addClass("visitedTile");
            if (!$(sprite.newPosition).hasClass("fished")){
              if (water.position.indexOf(sprite.newPosition) > -1){
                goFishing();
                $(sprite.newPosition).addClass("fished");
              }
            }
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
            if ($(sprite.position).hasClass("garden")){
              $(sprite.position).text(sprite.symbol);
            }
            else{
              $(sprite.position).addClass("visitedTile").text(sprite.symbol);
            }
            interact();
          }
          else if ($(sprite.newPosition).hasClass("isProhibited")) {
            $(sprite.newPosition).addClass("visitedTile");
            if (!$(sprite.newPosition).hasClass("fished")){
              if (water.position.indexOf(sprite.newPosition) > -1){
                goFishing();
                $(sprite.newPosition).addClass("fished");
              }
            }
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
            if ($(sprite.position).hasClass("garden")){
              $(sprite.position).text(sprite.symbol);
            }
            else{
              $(sprite.position).addClass("visitedTile").text(sprite.symbol);
            }
            interact();
          }
          else if ($(sprite.newPosition).hasClass("isProhibited")) {
            $(sprite.newPosition).addClass("visitedTile");
            if (!$(sprite.newPosition).hasClass("fished")){
              if (water.position.indexOf(sprite.newPosition) > -1){
                goFishing();
                $(sprite.newPosition).addClass("fished");
              }
            }
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
  alembic:{
    qty: 0,
    symbol: "\u2697"
  },
  peach:{
    qty: 0,
    symbol: "\uD83C\uDF4A"
  },
  bug:{
    qty:0,
    symbol: "\uD83D\uDC1B"
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
  beads:{
    qty: 0,
    symbol: "\uD83D\uDCFF"
  },
  tuna: {
    qty: 0,
    symbol: "\uD83D\uDC1F"
  },
  tang:{
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
  pepper: {
    qty: 0,
    symbol: "\uD83C\uDF36"
  },
  holywater:{
    qty: 0,
    symbol: "\uD83C\uDF76"
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
      if (my_inv[prop]["qty"] > 0){
        $("#i" + x).html("<span style='disply:inline-block'>" + my_inv[prop]["symbol"] + "</span><span style='font-size: .6em; line-height: 0px; disply:inline-block'>" + my_inv[prop]["qty"]+ "</span>");
        x++;
      }
    }
    for (var x; x<=15; x++){
      $("#i" + x).text(" ");
    }
  }
}
var buildSideBar = function(){
  $("#gameInfo").append("<div id='inventory'></div>");
}
var buildLogo = function(){
  $("#inventory").append("<div id= 'logo'></div>");
  $("#logo").append("<h2>\u2694EmojiQuest\uD83D\uDCA9</h2>");
}
var buildStats = function(){
  $("#inventory").append("<h3>Stats</h3>").append("<div id= 'stats'></div>");
  $("#stats").append("<div class = 'stat' id = 'stats-data'></div>")
                                      .append("<div class = 'stat' id = 'stats-monsters'></div>")
                                      .append("<div class = 'stat' id = 'stats-bears'></div>")
  $("#stats-monsters").text("\uD83D\uDC32" + "  " + stats.monstersKilled);
  $("#stats-bears").text("\uD83D\uDC3B" + " " + bears.bearsKilled + "/6");
  $("#stats-data").text("\u2764"+ " " +stats.life);
}
var buildInventory= function(){
  $("#inventory").append("<h3>Inventory</h3>").append("<div id='inventory-grid'></div>");
  for (var x = 1; x < 16; x++){
    $("#inventory-grid").append("<div class='inventory-item' id = 'i"+ x + "'></div>");
  }
};
var buildStoryLine = function(){
  $("#gameCommunications").append("<h3>Story</h3>")
                          .append("<div id = 'story'></div>")
                          .append("<h3>Quests</h3>")
                          .append("<div id = 'quests'></div>")
  $("#story").append("<div id= 'storyline'></div>")
}
var buildGui = function(){
  buildBoard();
  buildSideBar();
  buildLogo();
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
