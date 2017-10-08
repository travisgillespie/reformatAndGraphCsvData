const moduleFS = require('./moduleFS.js');
const jsonfile = require('jsonfile');
const toCSV = require('array-to-csv');

//path to files that will be cross-referenced
const fileContentReport = //<fileName1.csv>
const fileGlobalSalesReport = //<fileName2.csv>

//create an array from read csv file
function fileContentsArray(fileContents){
  var array = [];
  var lines = fileContents.split('\n');
  for (var i = 0; i < lines.length; i++) {
      array.push(lines[i].toString().split(','));
  }
  return array
}

function objectBuild(arrayContent, arrayGlobal){
  //pull data from either array to create an object, then return the object
  //return obj
}

function arrayBuild(obj){
  //build a multidimensional array from object then return the array
  //return returnArray;
}

//read 2 files
const readContentReport = moduleFS.readFileSync(fileContentReport);
const readGlobalSalesReport = moduleFS.readFileSync(fileGlobalSalesReport);

//create 2 arrays
const arrayContentReport = fileContentsArray(readContentReport);
const arrayGlobalSalesReport = fileContentsArray(readGlobalSalesReport);

//compare both arrays, weed out unwanted data, and build object of user data
const object = objectBuild(arrayContentReport, arrayGlobalSalesReport)

//create json file from object
var objFile = //<filename3.json>
jsonfile.writeFile(objFile, object, {spaces: 2}, function(err) {
  if (err) throw err;
  console.log('JSON file has been saved')

})

//create array from object
var csvArray = arrayBuild(object)

//create csv from array
moduleFS.writeFile( /*<filename4.csv>*/ ,toCSV(csvArray))
