
var stepDisplay;
var map;
var markerArray = [];
var directionsService;
var directionsDisplay;
function myMap() {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        center: new google.maps.LatLng(30.6180,-96.3344),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    stepDisplay = new google.maps.InfoWindow();
}


function showSteps(directionResult){
  // For each step, place a marker, and add the text to the marker's
  // info window. Also attach the marker to an array so we
  // can keep track of it and remove it when calculating new
  // routes.
  
  //A leg is a stretch of a route, which is made of steps with directions.
  //They're generated in the call to Google Maps API, and are passed into this function in the bundle directionresult,
  //which is a collection of possible routes.
  
  var myRoute = directionResult.routes[0];
  console.log("Length: " + myRoute.legs.length);
  for (var j = 0; j < myRoute.legs.length; j++){
    for (var i = 0; i < myRoute.legs[j].steps.length; i++) {
        var marker = new google.maps.Marker({
          position: myRoute.legs[j].steps[i].start_point,
          map: map
        });
        attachInstructionText(marker, myRoute.legs[j].steps[i].instructions, myRoute.legs[j].steps[i].distance);
        markerArray.push(marker);
    }
  }

  console.log(markerArray.length);
}

function attachInstructionText(marker, text, distance) {
  google.maps.event.addListener(marker, 'click', function() {
    (document.getElementById('text')).innerHTML = text;
    (document.getElementById('distance')).innerHTML = distance.text;

  });
}


function mapDisplay(waypointsArray){
    //If waypointsArray is >20  steps, need to grab 20 waypoints across an even 
    //distribution in the array and create google waypoint object for each

    console.log(waypointsArray.length);

    var iterator = Math.ceil(waypointsArray.length / 20);
    var googleWayPts = [];
    for (var i = 0; i < waypointsArray.length; i += iterator){
      googleWayPts.push({
        location: new google.maps.LatLng(waypointsArray[i].x, waypointsArray[i].y),
        stopover: true
      });
      }


      // Display the route 
    directionsService.route({
      origin : googleWayPts[0].location,
      destination: googleWayPts[googleWayPts.length - 1].location,
      waypoints: googleWayPts,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    }, function(response, status){
        if (status=='OK') {
            directionsDisplay.setDirections(response);
            showSteps(response);
        }
        else{
          window.alert("Directions failed due to " + status + "\n");
          console.log("directionsService failed");
        }



    });

    map.setCenter(googleWayPts[0].location);

}