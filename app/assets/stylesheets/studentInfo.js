//Dummy code to produce student info
//Functionality isn't yet in TAMUber system so we're modeling what the data might look like
var link = document.getElementById('result');
link.style.visibility = 'hidden';
var text = '{"name" :  "Bob Jones", "UIN":"333", "routeStart":"HRBB", "routeDest":"MSC"}';
var data = JSON.parse(text);
(document.getElementById('studentName')).innerHTML = data.name;
(document.getElementById('UIN')).innerHTML = "UIN: " + data.UIN;
(document.getElementById('route-start')).innerHTML = "From: " + data.routeStart;
(document.getElementById('route-end')).innerHTML = "To: " + data.routeDest;

function validateUIN(){
	var inputUIN = (document.getElementById('inputUIN')).value;
	if (inputUIN == data.UIN){
		//connectServer();
		link.style.visibility = 'visible';
		(document.getElementById('inputUIN')).style.visibility = 'hidden';

	}
	else{
		(document.getElementById('valid')).innerHTML = "Invalid UIN: " + inputUIN;
	}

	return;
}