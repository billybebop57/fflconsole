function isInt(value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

function loadleague() {
    var league_id = $("#leagueid").val()
    console.log(league_id);
    if(isInt(league_id)) {
	var req = new XMLHttpRequest();  
	req.open('GET', 'http://games.espn.go.com/ffl/standings?leagueId=347328&seasonId=2014', false);   
	req.send(null);  
	if(req.status == 200)  
	    console.log(req.responseText);
    }
}

