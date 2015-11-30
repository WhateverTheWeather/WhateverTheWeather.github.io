	function initialize() {
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    var map = new google.maps.Map(document.getElementById("hotel_map"), mapOptions);
        
    // Multiple Markers
    var markers = [
        ['Cutty Sark', 51.482858, -0.009624],
         ['Costa', 51.501314, 0.005359],
          ['Café Rouge', 51.501589, 0.005269],
           ['Thames Clipper', 51.498355, 0.013156],
            ['Emirates air Line', 51.499816, 0.008395],
             ['Weatherspoons', 51.481051, -0.010179],
              ['National Maritime Museum', 51.480862, -0.005300],
               ['TGI Fridays', 51.502389, 0.003367],
                ['Zizzi', 51.502389, 0.003367],
                 ['All Bar One', 51.502389, 0.003367],
                  ['Brooklyn Bowl', 51.502389, 0.003367],
                   ['Busaba Eathai', 51.502389, 0.003367],
                    ['Bryon Proper Hamburgers', 51.502389, 0.003367],
                     ['Cheyenne Steak and Grill', 51.502389, 0.003367],
                      ['Five Guys', 51.502389, 0.003367],
                       ['Frankie and Bennys', 51.483606, -0.009229],
                        ['Frankie and Bennys O2', 51.502389, 0.003367],
                         ['Garfunkles', 51.502389, 0.003367],
                          ['Gaucho', 51.502389, 0.003367],
                           ['Gourmet Burger Kitchen', 51.502389, 0.003367],
                            ['Harvester', 51.502389, 0.003367],
                             ['Jimmys World Bar and Grill', 51.502389, 0.003367],
                              ['Las Iguanas', 51.502389, 0.003367],
                               ['NY-LON', 51.502389, 0.003367],
                                ['Nandos', 51.502389, 0.003367],
                                 ['Pizza Express', 51.502389, 0.003367],
        ['Greenwich Park', 51.477763, 0.001579]
    ];
                        
    // Setup the different icons and shadows
    var iconURLPrefix = 'images/';
    
    var icons = [
      iconURLPrefix + 'google-map-marker.png',
           iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
            iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'google-map-marker.png',


    ]
    var icons_length = icons.length;
                        
            
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    var iconCounter = 0;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon : icons[iconCounter]
        });
        
        iconCounter++;
        
       

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}


google.maps.event.addDomListener(window, 'load', initialize); 

