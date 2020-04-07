// Creating custom marker with a smiley face for happiness


var iconOptions = {
    iconUrl: 'smile.png',
    iconSize: [25, 25]
    
 }
 
 // Creating a custom icon
 var customIcon = L.icon(iconOptions);

 var markerOptions = {
    
    clickable: true,
    draggable: true,
    icon: customIcon
    
 }

// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [42.76698, 2.493823],
  zoom: 2.5,
  opacity: 10.0
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Top 10 Countries

var finland = L.marker([61.924110, 25.748152], markerOptions, {
  draggable: true,
  title: "Finland"
}).addTo(myMap);

// This is where we need to access the json
finland.bindPopup("<b>Hello There!</b><br>Hi" );

var denmark = L.marker([56.263920, 9.501785], {
  draggable: true,
  title: "Denmark"
}).addTo(myMap);

// This is where we need to access the json
denmark.bindPopup("Hello There!");

var iceland = L.marker([64.963051, -19.020836], {
  draggable: true,
  title: "Iceland"
}).addTo(myMap);

// This is where we need to access the json
iceland.bindPopup("Hello There!");

var netherlands = L.marker([52.132633, 5.291266], {
  draggable: true,
  title: "Netherlands"
}).addTo(myMap);

// This is where we need to access the json
netherlands.bindPopup("Hello There!");

var switzerland = L.marker([47.038, 8.222855], {
  draggable: true,
  title: "Switzerland"
}).addTo(myMap);

// This is where we need to access the json
switzerland.bindPopup("Hello There!");

var sweden = L.marker([46.8038, 8.222855], {
  draggable: true,
  title: "Sweden"
}).addTo(myMap);

// This is where we need to access the json
sweden.bindPopup("Hello There!");

var newZealand = L.marker([-44.056293, 170.35416], {
  draggable: true,
  title: "New Zealand"
}).addTo(myMap);

// This is where we need to access the json
newZealand.bindPopup("Hello There!");

var canada = L.marker([58.027164, -105.38086], {
  draggable: true,
  title: "Canada"
}).addTo(myMap);

// This is where we need to access the json
canada.bindPopup("Hello There!");

var austria = L.marker([47.58844, 14.140211], {
  draggable: true,
  title: "Austria"
}).addTo(myMap);

// This is where we need to access the json
austria.bindPopup("Hello There!");

var norway = L.marker([60.472023, 8.4689465], {
  draggable: true,
  title: "Norway"
}).addTo(myMap);

// This is where we need to access the json
norway.bindPopup("Hello There!");