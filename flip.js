function flip() {
	console.log('yay');
	$('.playedFaction').toggleClass('flipped');
	setTimeout(function() {
       $('.card').toggleClass('flipped');
  	}, 2000);
};