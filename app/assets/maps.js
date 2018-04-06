
var stepDisplay;
var map;
var markerArray = [];
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(30.6180,-96.3344),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    stepDisplay = new google.maps.InfoWindow();
    var pos;
    var directionsService;
    var directionsDisplay;
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
        });
    }else{
        pos = new google.maps.LatLng(30.6180,-96.3344)
    }
    var end = new google.maps.LatLng(30.623797, -96.337470);
    var start =  new google.maps.LatLng(30.6180,-96.3344);
    directionsDisplay.setMap(map);
    //directionsDisplay.setPanel(document.getElementById('turn_by_turn'));
    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status){
        if(status == 'OK'){
            directionsDisplay.setDirections(result);
            showSteps(result);
        }
    });
    
}


function showSteps(directionResult){
  // For each step, place a marker, and add the text to the marker's
  // info window. Also attach the marker to an array so we
  // can keep track of it and remove it when calculating new
  // routes.
  var myRoute = directionResult.routes[0].legs[0];

  for (var i = 0; i < myRoute.steps.length; i++) {
      var marker = new google.maps.Marker({
        position: myRoute.steps[i].start_point,
        map: map
      });
      attachInstructionText(marker, myRoute.steps[i].instructions, myRoute.steps[i].distance);
      markerArray[i] = marker;
  }
}

function attachInstructionText(marker, text, distance) {
  google.maps.event.addListener(marker, 'click', function() {
    (document.getElementById('text')).innerHTML = text;
    (document.getElementById('distance')).innerHTML = distance.text;

  });
}