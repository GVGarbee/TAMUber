function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(30.6180,-96.3344),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
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
    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status){
        if(status == 'OK'){
            directionsDisplay.setDirections(result);
        }
    });
    
}
