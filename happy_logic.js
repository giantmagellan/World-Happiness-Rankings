
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
  zoom: 1.75,
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
  radius: 20,
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
  radius: 20,
  color: '#DA9C20'
}).addTo(myMap);

// This is where we need to access the json
netherlands.bindPopup("<h3>Netherlands</h3></b>Score: 7.49</br>Rank: 5</br>GDP: 1.4");

var switzerland = L.circleMarker([47.038, 8.222855], {
  draggable: true,
  title: "Switzerland",
  radius: 20,
  color: '#CA8323'
}).addTo(myMap);

// This is where we need to access the json
switzerland.bindPopup("<h3>Switzerland</h3></b>Score: 7.48</br>Rank: 6</br>GDP: 1.45");

var sweden = L.circleMarker([46.8038, 8.222855], {
  draggable: true,
  title: "Sweden",
  radius: 20,
  color: '#B86B25'
}).addTo(myMap);

// This is where we need to access the json
sweden.bindPopup("<h3>Sweden</h3></b>Score: 7.34</br>Rank: 7</br>GDP: 1.39");

var newZealand = L.circleMarker([-44.056293, 170.35416], {
  draggable: true,
  title: "New Zealand",
  radius: 20,
  color: '#A25626'
}).addTo(myMap);

// This is where we need to access the json
newZealand.bindPopup("<h3>New Zealand</h3></b>Score: 7.31</br>Rank: 8</br>GDP: 1.30");

var canada = L.circleMarker([58.027164, -105.38086], {
  draggable: true,
  title: "Canada",
  radius: 20,
  color: '#8B4225'
}).addTo(myMap);

// This is where we need to access the json
canada.bindPopup("<h3>Canada</h3></b>Score: 7.28</br>Rank: 9</br>GDP: 1.37");

var austria = L.circleMarker([47.58844, 14.140211], {
  draggable: true,
  title: "Austria",
  radius: 20,
  color: '#723122'
}).addTo(myMap);

// This is where we need to access the json
austria.bindPopup("<h3>Austria</h3></b>Score: 7.25</br>Rank: 10</br>GDP: 1.37");

var norway = L.circleMarker([60.472023, 8.4689465], {
  draggable: true,
  title: "Norway",
  radius: 20,
  color: '#EED322'
}).addTo(myMap);

// This is where we need to access the json
norway.bindPopup("<h3>Norway</h3></b>Score: 7.554</br>Rank: 3</br>GDP: 1.48");

//Other countries to show concentrated areas of happiness
//Plan on using the json file to auto populate but having issues

url = "/assets/data/happy_rankings.json"
d3.json(url, function(response) {
  var markers = L.markerClusterGroup();
  for (var i = 0; i < response.length; i++) {
    var location = response[i].location;
    if (location) {
      markers.addLayer(L.circleMarker([location.latitude[1], location.longitude[0]])
        .bindPopup(response[i].country));

    }
  }
  myMap.addLayer(markers);
});


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

var uae = L.circleMarker([23.424076, 53.847818],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var malta = L.circleMarker([35.937496, 14.375416],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var mmexico = L.circleMarker([23.634501, -102.552784],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var france = L.circleMarker([46.227638,	2.213749
],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var taiwan = L.circleMarker([23.69781,	120.960515],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var chile = L.circleMarker([-35.675147,	-71.542969],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var guatemala = L.circleMarker([15.783471,	-90.230759],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var saudi = L.circleMarker([23.885942,	45.079162],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var qatar = L.circleMarker([25.354826,	51.183884],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var spain = L.circleMarker([40.463667,	-3.74922],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var panama = L.circleMarker([8.537981,	-80.782127],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var brazil = L.circleMarker([-14.235004,	-51.92528],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var urug = L.circleMarker([-32.522779,	-55.765835],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var singapore = L.circleMarker([1.352083,	103.819836],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var elsalvador = L.circleMarker([13.794185,	-88.89653],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var italy = L.circleMarker([41.87194,	12.56738],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var bahrain = L.circleMarker([25.930414,	50.637772],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var slovakia = L.circleMarker([48.669026,	19.699024],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var trinidad = L.circleMarker([10.691803,	-61.222503],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var poland = L.circleMarker([51.919438,	19.145136],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var uzbek = L.circleMarker([41.377491,	64.58526],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var lithuania = L.circleMarker([55.169438,	23.881275],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var colombia = L.circleMarker([4.570868,	-74.297333],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var slovenia = L.circleMarker([46.151241,	14.995463],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var nicaragua = L.circleMarker([12.865416,	-85.207229],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var kosovo = L.circleMarker([42.602636,	20.902977],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var argentina = L.circleMarker([-38.416097,	-63.616672],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var romania = L.circleMarker([45.943161,	24.96676],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var cyprus = L.circleMarker([35.126413,	33.429859],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var ecuador = L.circleMarker([-1.831239,	-78.183406],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var kuwait = L.circleMarker([29.31166,	47.481766],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var thailand = L.circleMarker([15.870032,	100.992541],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var lativa = L.circleMarker([56.879635,	24.603189],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var lativa = L.circleMarker([35.907757,	127.766922],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var southkorea = L.circleMarker([58.595272,	25.013607],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var estonia = L.circleMarker([58.595272,	25.013607],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var jamaica = L.circleMarker([18.109581,	-77.297508],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var mauritius = L.circleMarker([-20.348404,	57.552152],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var japan = L.circleMarker([36.204824,	138.252924],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var honduras = L.circleMarker([15.199999,	-86.241905],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var kazakh = L.circleMarker([48.019573,	66.923684],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var bolivia = L.circleMarker([-16.290154,	-63.588653],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var bolivia = L.circleMarker([47.162494,	19.503304],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var paraguay = L.circleMarker([-23.442503,	-58.443832],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var northcyprus = L.circleMarker([35.126413,	33.429859],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var peru = L.circleMarker([-9.189967,	-75.015152],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var portugal = L.circleMarker([39.399872,	-8.224454],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var pakistan = L.circleMarker([30.375321,	69.345116],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var russia = L.circleMarker([61.52401,	105.318756],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var phillipines = L.circleMarker([12.879721,	121.774017],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var serbia = L.circleMarker([44.016521,	21.005859],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var moldova = L.circleMarker([47.411631,	28.369885],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var libya = L.circleMarker([26.3351,	17.228331],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var montenegro = L.circleMarker([42.708678,	19.37439],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var tajik = L.circleMarker([38.861034,	71.276093],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var croatia = L.circleMarker([45.1,	15.2],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var hongkong = L.circleMarker([22.396428,	114.109497],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var dominicanR = L.circleMarker([18.735693,	-70.162651],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var bosnia = L.circleMarker([43.915886,	17.679076],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var turkey = L.circleMarker([38.963745,	35.243322],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var malaysia = L.circleMarker([4.210484,	101.975766],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var belarus = L.circleMarker([53.709807,	27.953389],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var greece = L.circleMarker([39.074208,	21.824312],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var mongolia = L.circleMarker([46.862496,	103.846656],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var normacedonia = L.circleMarker([41.608635,	21.745275],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var nigeria = L.circleMarker([9.081999,	8.675277],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var kyrgyz = L.circleMarker([41.20438,	74.766098],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var turkmenis = L.circleMarker([38.969719,	59.556278],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);

var algeria = L.circleMarker([28.033886,	1.659626],  {
  draggable: true,
  radius: 5,
  color: '#FF00FF'
}).addTo(myMap);