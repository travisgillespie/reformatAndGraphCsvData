# Sales Report Automation

This guide will help you setup and run automation for this app. I used Node.js and D3.js to automate quarterly sales reports. Node was used to parse, compare, and build data from various _csv_ files. D3 was used to display the report. This program can be downloaded and modified to fit your business needs.

[![Graph png](./assets/d3.schemeRdYlGn[10].png?raw=true "D3 Graphs")](http://www.travisgillespie.com/assets/sprinklrApps/d3/d3_SalesReport/indexD3.html)

## Required Downloads
*Steps 2-4: Open your terminal, and cd to the root directory _d3_\__SalesReport_
1. Download <a style="color:#0D6EE4" href="https://nodejs.org/en/">Node</a>. Either version 6 or 8 should work. I used version 8 for this project.

2. If you follow step 2, skip steps 3 & 4. Use the _package.json_ file to install all required modules. In your terminal type: _npm install array-to-csv_.

3. Install NPM <a style="color:#0D6EE4" href="https://www.npmjs.com/package/array-to-csv">array-to-csv</a>. In your terminal type: _npm install array-to-csv_.

4. Install NPM <a style="color:#0D6EE4" href="https://www.npmjs.com/package/jsonfile">jsonfile</a>. In your terminal type: _npm install jsonfile_.

&nbsp;
# Node.js Steps
## Storing Files and Naming Conventions
Node can be used to cross-reference multiple files. This program uses csv files. The files should be stored in specific locations to keep your project organized. Node was used to read the csv files and store them as multidimensional arrays. This is how I cross-referenced the data. The code you write in _parseWkst.js_ will depend on the layout of your csv files.

1. Store a csv file in the project directory: _e.g._ d3_SalesReport > data > csvContentReport > _fileName1.csv_
###### * Note: The path to this file should be defined in _parseWkst.js_ on line 6.
&nbsp;
2. Store the csv file to be cross-referenced in the project directory: _e.g._ d3_SalesReport > data > csvGlobalReport > _fileName2.csv_
###### * Note: The path to this file should be defined in _parseWkst.js_ on line 7.
&nbsp;

## Running the program
1. Open your terminal and cd to the _d3_\__SalesReport_ directory.
2. Type _node parseWkst_

## Retrieving Files
Two files will be created after running the _parseWkst_ program.
2. A json file which will be used in _playground.js_ to build the D3 graph.
###### * Note: The directory path and name can be defined in _parseWkst.js_ on line 42.
&nbsp;  
1. A csv file which will be used to display the data using D3.
###### * Note: The directory path and name can be defined in _parseWkst.js_ on line 53.

&nbsp;
./objRegions.js
./data/dataCSV/exampleData.csv
# D3.js Steps
## Data Analysis
The goal is to use this template as a stepping stone to build and view your own data via https server. Currently an example can can be viewed
from my <a style="color:#0D6EE4" href="http://www.travisgillespie.com/assets/sprinklrApps/d3/d3_SalesReport/indexD3.html">portfolio</a> or via your local drive by following these steps:
1. Open your terminal and cd to the _d3_\__SalesReport_ directory.
2. Type one of the following:
  * python -m SimpleHTTPServer
  * python -m SimpleHTTPServer &lt;port number>
    * e.g. python -m SimpleHTTPServer 8080
3. Wait for the terminal to respond. It should respond that it's serving http on a specific port.
  * e.g. _Serving HTTP on 0.0.0.0 port 8000 ..._
4. Navigate to a browser and type the following in the address bar:
  * localhost:&lt;port number>/index.html
    * e.g. localhost:8000/index.html

###### * Note: Two example files are being used to display the data. If you'd like to run your own report and view that data, follow the steps preceding this section. Then:
1. Navigate to _d3_\__SalesReport > index.html_, scroll down to line 18, replace the path and filename to match your json file path.


2. Navigate to _d3_\__SalesReport > barChart.js_, scroll down to line 15, replace the path and filename to match your csv file path.
&nbsp;
