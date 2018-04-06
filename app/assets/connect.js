    
    var rosServer = new ROSLIB.Ros({
     url : 'ws://166.155.203.130:9090'
    });
 
     rosServer.on('connection', function() {
       console.log('Connected to websocket server.');
     });
   
     rosServer.on('error', function(error) {
       console.log('Error connecting to websocket server: ', error);
     });
   
     rosServer.on('close', function() {
       console.log('Connection to websocket server closed.');
     });
   
   //topics to subscribe to:
        //our position-  /vectornav/fix, ros sensor_msg GPS - navsatfix
        //array of waypoints -  /waypoints_lla, ros visualization_msg - Marker
   
   //Listener for waypoints
     var waypoint_listener = new ROSLIB.Topic({
       ros : rosServer,
       name : '/waypoints_lla',
       messageType : 'visualization_msgs/Marker'
     });
   
   //Organize, save, and push waypoint array to another function 
     waypoint_listener.subscribe(function(message) {
       console.log('Received message on ' + waypoint_listener.name + ': ' + message.points[1].x);
       var waypointsArray = [];
       for (var i = 0; i < message.points.length; i++){
                var P = message.points[i];
                waypointsArray.push({x:P.x, y:P.y});
        }
       waypoint_listener.unsubscribe();
        // Display the array:
        for (var i = 0; i < waypointsArray.length; i++){
                console.log("Point- X: " + waypointsArray[i].x + " \t Y: " + waypointsArray[i].y + "\n");
        }

        //TODO: push waypointsArray to another function for display

     });