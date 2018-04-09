//Dummy code to produce student info
//Functionality isn't yet in TAMUber system so we're modeling what the data might look like

var link1 = document.getElementById('result');
link1.style.visibility = 'hidden';
var link2 = document.getElementById('form');
var text = '{"name" :  "Bob Jones", "UIN":"3334445678"}';
var data = JSON.parse(text);
document.getElementById("submit").addEventListener("click", verify);
function verify(){
    var uin = document.getElementById('inputUIN').value;
    if (uin == data.UIN){
        (document.getElementById('studentName')).innerHTML = data.name;
        (document.getElementById('UIN')).innerHTML = data.UIN;
        link1.style.visibility = 'visible';
        link2.style.visibility = 'hidden';
    }
    else{
        (document.getElementById('valid')).innerHTML = 'Invalid UIN';
    }
}