"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  carsJSON.forEach(function(car){
    var template = "<div class=row><div class=col-md-4 car><h2>"+"hey"+"</h2><p><strong>Model:</strong>" + "Tahoe" + "</p><p><strong>Year:</strong>" + "2012" + "</p></div></div>"

    return template;
  });
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
  $("#cars").append(formatCars(carsJSON))
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  debugger;
  $.getJSON(baseUrl + "3/3", function(result) {
    addCarsToDOM(result)
  })
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
}
