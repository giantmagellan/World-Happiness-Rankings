// =============================
// MULTIPLE.JS TEST SCRIPT
// =============================
url = "http://127.0.0.1:5000/api/circular";

// =============================
// CONNECT TO SQLITE DATABASE
// =============================
d3.json(url, function(data) {
    // Sends data.features object to the createFeatures function
    createFeatures(data.features);
    console.log(data);
  });

// =============================
// MULTIPLE.JS VISUALIZATION
// =============================
var multiple = new Multiple({
    selector: '.item',
    background: 'linear-gradient(#373B44, #4286f4)' 
});

