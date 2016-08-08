var factionsBase = ["Pirates", "Ninja", "Zombies", "Robots", "Dinosaures", "Sorciers", "Petit Peuple", "Aliens"];
var serieBFactions = ["Voyageurs du temps", "Singes cyborgs", "Métamorphes", "Super espions"];
var monstreFactions = ["Vampires", "Fourmis géantes", "Loups-garous", "Savants fous"];
var minionFactions = ["Chats", "Fées", "Poneys", "Princesses"];
var factions = factionsBase;

$("#playerfield1").hide();
$("#playerfield2").hide();
$("#playerfield3").hide();
$("#playerfield4").hide();
$("#resultButton").hide();
$("#extensions").hide();
$("#results").hide();

var playerNumber = document.getElementById("playerNumberInput");
var playerNames = [];

player2.addEventListener("keydown", function(e) {
	if(e.keyCode == 13) {
		isExtensionSelected();
		giveResults(playerNumber.value);
	}
});

$("#resultButton").click(function() {
	isExtensionSelected();
	giveResults(playerNumber.value);
});

function askNames(option) {
	var nb = option.value;
	if(nb != "default") {
		$("#playerNumber").hide();
		for(i = 1; i <= nb; ++i) {
			$("#playerfield"+i).show();
		}
		$("#extensions").show();
		$("#resultButton").show();
	}
};

function isExtensionSelected() {
	if($("input[name=serieB]").is(":checked")) {
		factions = factions.concat(serieBFactions);
	}
	if($("input[name=monstre]").is(":checked")) {
		factions = factions.concat(monstreFactions);
	}
	if($("input[name=minion]").is(":checked")) {
		factions = factions.concat(minionFactions);
	}
};

function giveResults(numberOfPlayers) {
	for(i = 1; i <= numberOfPlayers; ++i) {
		playerNames[i] = document.getElementById("player" + i).value;
		var playerFactions = get2RandomFactions();
		var string = "<span class=\"playerName\">" + playerNames[i] 
			+ "</span> jouera <span class=\"playedFaction\">" + playerFactions[0] 
			+ "</span> et <span class=\"playedFaction\">" + playerFactions[1] + "</span>";
		$("#results").append(string + "</br>");
		$("#results").show();
	}
};

function get2RandomFactions() {
	var choices = [];
	var firstFaction = Math.floor(Math.random() * factions.length);
	choices[0] = factions.splice(firstFaction, 1);

	var secondFaction;
	do {
		secondFaction = Math.floor(Math.random() * factions.length);
	} while(secondFaction == firstFaction);
	choices[1] = factions.splice(secondFaction, 1);

	return choices;
};