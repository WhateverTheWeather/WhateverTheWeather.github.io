Parse.initialize("wDjVVlo0q9ZJzzFOsfkNKsFIf3xWqwLXwXv29T2h", "qfWAIOVo9qEGQG2R6K0k9OnbLDApmLktMyjZ6KY5")


/*

1. Get geolocation and store user position in a variable
2. Use user position to search for the weather
3. Using the user position and the weather type, ask Parse for places appropriate to the weather within XXkm from user position 
4. Display on a map

*/


/*var Person = Parse.Object.extend("Person")
      
var kieran = new Person()

kieran.set('name', 'kieran')
kieran.set('year', 1)*/

navigator.geolocation.watchPosition(gotPosition)

function gotPosition(position) 
{   
    getTheWeather(position)
   /*console.log( "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);*/
}

// 2

var APIKey = 'a120aa36dac8f8043805f63a51019310'

function getTheWeather(position)
{
    var URL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&APPID=' + APIKey
    console.log(URL)

    // do the jQuery AJAX call (see Instagram exercise)
    $.ajax(
    {
        dataType: "jsonp",
        url: URL,
        success: handleData
    })
}

function handleData(json)
{
    console.log(json)

    var weather = json.weather[0]
    var weatherid = weather.id
    console.log(weatherid)

    var currentWeather = '' // empty by default
   
    switch(weatherid){
        case 800:
        case 801:
        case 802:
        case 951:
            console.log ("Sunny");
            currentWeather = 'Sunny' 
            break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
            console.log ("Raining");
            currentWeather = 'Raining' 
            break;
        case 803:
        case 804:
        case 500:
        case 501:
            console.log ("Cloudy");
            currentWeather = 'Cloudy' 
            break;
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
        case 781:
        case 900:
        case 901:
        case 902:
        case 960:
        case 961:
        case 962:
            console.log ("Stormy");
            currentWeather = 'Stormy' 
            break;
        case 701:
            console.log ("Wet");
            currentWeather = 'Wet' 
            break;
        case 903:
            console.log ("Dry");
            currentWeather = 'Dry' 
            break;
        case 905:
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
        case 957:
        case 958:
        case 959:
            console.log ("Windy");
            currentWeather = 'Windy' 
            break;
        case 600:
        case 601:
        case 602:
        case 621:
        case 622:
            console.log ("Snow");
            currentWeather = 'Snow' 
            break;
        case 904:
            console.log ("Humid");
            currentWeather = 'Humid'
            break;
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
            console.log ("Foggy");
            currentWeather = 'Foggy' 
            break;
        case 906:
            console.log ("Hail");
            currentWeather = 'Hail' 
            break;
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
            console.log ("Sleet");
            currentWeather = 'Sleet' 
            break;
        default:
            console.log("Sorry, we could not find " + weatherid + ".");
    }
    
    var weatherIconURL = 'AnimatedGif/' + currentWeather.toLowerCase() + '.gif'
    $('#gif').attr('src', weatherIconURL);
    
    console.log('Going to fetch places for weather: ' + currentWeather)
    
    
    
    var Place = Parse.Object.extend('Places') // we're using the Places table from Parse

    var query = new Parse.Query(Place)
    query.equalTo(currentWeather, true)
    query.find(
    {
        success: function(results) 
        {  
            console.log("Successfully retrieved " + results.length + " places.")

            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) 
            {
                var place = results[i]
                var name = place.get('Name')
                var position = place.get('Position')
        
                var latLng = new google.maps.LatLng(position._latitude, position._longitude)
                bounds.extend(latLng)
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: name,
                    info: name // 
                    //icon : icons[iconCounter]
                })
                
                var infoWindow = new google.maps.InfoWindow()

                /*marker.addListener(marker,'click', function(map, marker)
                {
                  infoWindow.open(map, marker)
                })*/
                
                google.maps.event.addListener( marker, 'click', function() 
                {
                   infoWindow.setContent( this.info );
                   infoWindow.open( map, this );
                });
            }
        },
        error: function(error) {
            console.error("Error: " + error.code + " " + error.message)
        }
    })
    
}

var bounds,
    map

function initializeMap() 
{
    bounds = new google.maps.LatLngBounds();
    var mapOptions = 
    {
        mapTypeId: 'roadmap',
        center: {lat: 51.501489, lng: 0.004870},
        zoom: 13
    };
    
    // TODO styling the map https://developers.google.com/maps/documentation/javascript/styling
    
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map"), mapOptions)
}


//google.maps.event.addDomListener(window, 'load', initializeMap)
    
   /* var condition;
    
    if (weatherid == 800 ; 801 ; 802; 951) 
    {
        condition = "Sunny";
}   else if ( weatherid == 300 ; 301 ; 302 ; 310 ; 311 ; 312 ; 313 ; 314 ; 321 ; 502 ; 503 ; 504 ; 511 ; 520 ; 521 ; 522 ; 531) 
    {
        condition = "Raining";
}   else if (weatherid == 803 ; 804; 500; 501) 
    {
        condition = "Cloudy";
}   else 
    {
        condition = "Other";
    }

    console.log(condition)
    }}*/
    // 



// 3 

/*var currentWeather = 'Foggy' // hardcoded for now

var Place = Parse.Object.extend('places')

var query = new Parse.Query(Place)
query.equalTo(currentWeather, true)
query.find(
{
    success: function(results) 
    {
        console.log("Successfully retrieved " + results.length + " places.")

        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) 
        {
            var place = results[i]
            console.log(place.get('Name'))
        }

    },
    error: function(error) {
        console.error("Error: " + error.code + " " + error.message)
    }

})*/