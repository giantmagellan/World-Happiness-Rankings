// =============================
// MULTIPLE.JS TEST SCRIPT
// =============================

// =============================
// CONNECT TO SQLITE DATABASE
// =============================
d3.json(url, function(data) {
    // Sends data.features object to the createFeatures function
    createFeatures(data.features);
  });

// =============================
// MULTIPLE.JS VISUALIZATION
// =============================
var multiple = new Multiple({
    selector: '.item',
    background: 'linear-gradient(#373B44, #4286f4)' 
});

