//Dummy code to produce student info
//Functionality isn't yet in TAMUber system so we're modeling what the data might look like

var text = '{"name" :  "Bob Jones", "UIN":"3334445678"}';
var data = JSON.parse(text);
(document.getElementById('studentName')).innerHTML = data.name;
(document.getElementById('UIN')).innerHTML = data.UIN;