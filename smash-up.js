var racesBase = ["Pirates", "Ninja", "Zombies", "Robots", "Dinosaures", "Sorciers", "Petit Peuple", "Aliens"];
var serieBRaces = ["Voyageurs du temps", "Singes cyborgs", "Métamorphes", "Super espions"];
var monstreRaces = ["Vampires", "Fourmis géantes", "Loups-garous", "Savants fous"];
var minionRaces = ["Chats", "Fées", "Poneys", "Princesses"];
var races = racesBase;

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
		races = races.concat(serieBRaces);
	}
	if($("input[name=monstre]").is(":checked")) {
		races = races.concat(monstreRaces);
	}
	if($("input[name=minion]").is(":checked")) {
		races = races.concat(minionRaces);
	}
};

function giveResults(numberOfPlayers) {
	for(i = 1; i <= numberOfPlayers; ++i) {
		playerNames[i] = document.getElementById("player" + i).value;
		var playerRaces = get2RandomRaces();
		var string = "<span class=\"playerName\">" + playerNames[i] 
			+ "</span> jouera <span class=\"playedRace\">" + playerRaces[0] 
			+ "</span> et <span class=\"playedRace\">" + playerRaces[1] + "</span>";
		$("#results").append(string + "</br>");
		$("#results").show();
	}
};

function get2RandomRaces() {
	var choices = [];
	var firstRace = Math.floor(Math.random() * races.length);
	choices[0] = races.splice(firstRace, 1);

	var secondRace;
	do {
		secondRace = Math.floor(Math.random() * races.length);
	} while(secondRace == firstRace);
	choices[1] = races.splice(secondRace, 1);

	return choices;
};