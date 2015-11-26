Parse.initialize("wDjVVlo0q9ZJzzFOsfkNKsFIf3xWqwLXwXv29T2h", "qfWAIOVo9qEGQG2R6K0k9OnbLDApmLktMyjZ6KY5");

var Person = Parse.Object.extend("Person");
      
var kieran = new Person()

kieran.set('name', 'kieran')
kieran.set('year', 1)

navigator.geolocation.watchPosition(showPosition)

function showPosition(position) 
{
   /*console.log( "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);*/
   
var point = new Parse.GeoPoint(
{
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
});
    
kieran.set('position', point)
    
    kieran.save(null,
    {
        success: function(object)
        {
        /*console.log(object)*/
        console.log('My latitude is: ' + position.coords.latitude);
        console.log('My Longitude is: ' + position.coords.longitude);
        },
        error: function(object,error)
        {
        console.error(error)
        }
    })
}