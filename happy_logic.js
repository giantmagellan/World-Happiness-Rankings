
// Waiting for flask to be ready 

// url = "/world/map"

// d3.json(url, function(data) {

//     createFeatures(data.features);

//   });

// var colorList = {Denmark: 'red', Norway: 'maroon', t3: 'blue', t: 'green'};

// colorize = function(colorList) {
//     var container = document.getElementById('container');
  
//     for (var key in colorList) {
//         var boxContainer = document.createElement("DIV");
//         var box = document.createElement("DIV");
//         var label = document.createElement("SPAN");

//         label.innerHTML = key;
//         box.className = "box";
//         box.style.backgroundColor = colorList[key];

//         boxContainer.appendChild(box);
//         boxContainer.appendChild(label);

//         container.appendChild(boxContainer);

//    }
// }



// Creating custom marker with a smiley face for happiest country



var iconOptions = {
    iconUrl: 'smile.png',
    iconSize: [32, 32]
    
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
  opacity: 10.0,
  minZoom: 1.5,
  maxZoom: 5,
  draggable: true
  
  
});



// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
}).addTo(myMap);

// Top 10 Countries


    
var finland = L.marker([61.924110, 25.748152], markerOptions, {
  draggable: true,
  title: "Finland"
}).addTo(myMap);

// This is where we need to access the json
finland.bindPopup("<h3>Finland</h3></b>Score: 7.79</br>Rank: 1</br>GDP: 1.34" );

var denmark = L.circleMarker([56.263920, 9.501785], {
  draggable: true,
  title: "Denmark",
  radius: 30,
  color: '#F2F12D'
}).addTo(myMap);

// This is where we need to access the json
denmark.bindPopup("<h3>Denmark</h3></b>Score: 7.6</br>Rank: 2</br>GDP: 1.383");

var iceland = L.circleMarker([64.963051, -19.020836], {
  draggable: true,
  title: "Iceland",
  radius: 20,
  color: '#E6B71E'
}).addTo(myMap);

// This is where we need to access the json
iceland.bindPopup("<h3>Iceland</h3></b>Score: 7.49</br>Rank: 4</br>GDP: 1.38");

var netherlands = L.circleMarker([52.132633, 5.291266], {
  draggable: true,
  title: "Netherlands",
  radius: 15,
  color: '#DA9C20'
}).addTo(myMap);

// This is where we need to access the json
netherlands.bindPopup("<h3>Netherlands</h3></b>Score: 7.49</br>Rank: 5</br>GDP: 1.4");

var switzerland = L.circleMarker([47.038, 8.222855], {
  draggable: true,
  title: "Switzerland",
  radius: 12,
  color: '#CA8323'
}).addTo(myMap);

// This is where we need to access the json
switzerland.bindPopup("<h3>Switzerland</h3></b>Score: 7.48</br>Rank: 6</br>GDP: 1.45");

var sweden = L.circleMarker([46.8038, 8.222855], {
  draggable: true,
  title: "Sweden",
  radius: 10,
  color: '#B86B25'
}).addTo(myMap);

// This is where we need to access the json
sweden.bindPopup("<h3>Sweden</h3></b>Score: 7.34</br>Rank: 7</br>GDP: 1.39");

var newZealand = L.circleMarker([-44.056293, 170.35416], {
  draggable: true,
  title: "New Zealand",
  radius: 8,
  color: '#A25626'
}).addTo(myMap);

// This is where we need to access the json
newZealand.bindPopup("<h3>New Zealand</h3></b>Score: 7.31</br>Rank: 8</br>GDP: 1.30");

var canada = L.circleMarker([58.027164, -105.38086], {
  draggable: true,
  title: "Canada",
  radius: 6,
  color: '#8B4225'
}).addTo(myMap);

// This is where we need to access the json
canada.bindPopup("<h3>Canada</h3></b>Score: 7.28</br>Rank: 9</br>GDP: 1.37");

var austria = L.circleMarker([47.58844, 14.140211], {
  draggable: true,
  title: "Austria",
  radius: 4,
  color: '#723122'
}).addTo(myMap);

// This is where we need to access the json
austria.bindPopup("<h3>Austria</h3></b>Score: 7.25</br>Rank: 10</br>GDP: 1.37");

var norway = L.circleMarker([60.472023, 8.4689465], {
  draggable: true,
  title: "Norway",
  radius: 25,
  color: '#EED322'
}).addTo(myMap);

// This is where we need to access the json
norway.bindPopup("<h3>Norway</h3></b>Score: 7.554</br>Rank: 3</br>GDP: 1.48");

//Other countries to show concentrated areas of happiness
//Plan on using the json file to auto populate but having issues

url = "/assets/data/coords.json"
d3.json(url, function(response) {
  var markers = L.markerClusterGroup();
  for (var i = 0; i < response.length; i++) {
    var location = response[i].location;
    if (location) {
      markers.addLayer(L.marker([location.latitude[1], location.longitude[0]])
        .bindPopup(response[i].name));

    }
  }
});




// markers = "/assets/data/coords.js"
// for ( var i=0; i < markers.length; ++i ) 
// {
//    L.marker( [markers[i].latitude, markers[i].longitude] )
//       .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
//       .addTo( map );
// }
var australia = L.circleMarker([-25.2744, 133.7751], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var israel = L.circleMarker([31.046051
  , 34.851612], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var luxemberg = L.circleMarker([49.815273, 6.129583], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var uk = L.circleMarker([55.378, 3.4360], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var ire = L.circleMarker([53.41291, -8.24389], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var ire = L.circleMarker([53.41291, -8.24389], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var ger = L.circleMarker([51.165691, 10.451526], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var belgium = L.circleMarker([50.503887, 4.469936], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var us = L.circleMarker([37.09024, -95.712891], {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var czech = L.circleMarker([49.817492, 15.472962],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);