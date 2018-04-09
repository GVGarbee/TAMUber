//Dummy code to produce student info
//Functionality isn't yet in TAMUber system so we're modeling what the data might look like
var link = document.getElementById('result');
link.style.visibility = 'hidden';
var text = '{"name" :  "Bob Jones", "UIN":"333"}';
var data = JSON.parse(text);
(document.getElementById('studentName')).innerHTML = data.name;
(document.getElementById('UIN')).innerHTML = data.UIN;

function validateUIN(){
	var inputUIN = (document.getElementById('inputUIN')).value;
	if (inputUIN == data.UIN){
		connectServer();
		link.style.visibility = 'visible';
		(document.getElementById('inputUIN')).style.visibility = 'hidden';

	}
	else{
		(document.getElementById('valid')).innerHTML = "Invalid UIN: " + inputUIN;
	}

	return;
}