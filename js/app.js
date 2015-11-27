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
   
    /*var point = new Parse.GeoPoint(
    {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    });

    kieran.set('position', point)

    kieran.save(null,
    {
        success: function(object)
        {
        // console.log(object)
        console.log('My latitude is: ' + position.coords.latitude);
        console.log('My Longitude is: ' + position.coords.longitude);
        },
        error: function(object,error)
        {
        console.error(error)
        }
    })*/
}

// 2

var APIKey = '3a258cbc6780350f0f0862c9708f21a5'

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

function handleData(json)
{
    console.log(json)

    var weather = json.data
    //loop through the images
    var total = weather.length
    var counter = 0
    while (counter < total)
    {
        console.log(counter)
        
        var weatherid = weather[counter]
        
        console.log(weatherid)
        
        var weatherURL = weatherid.weather.id.url
        
        console.log(weatherURL)
        counter = counter + 1
        
        
    }}}
    // 



// 3 

var currentWeather = 'Foggy' // hardcoded for now

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

})