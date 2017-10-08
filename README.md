# Sales Report Automation

This guide will help you setup and run automation for the quarterly sales reports.

## Required Downloads
*Steps 2-4: Open your terminal, and cd to the root directory _d3_\__SalesReport_
1. Download <a style="color:#0D6EE4" href="https://nodejs.org/en/">Node</a>. Either version 6 or 8 should work. I used version 8 for this project.

2. If you follow step 2, skip steps 3 & 4. Use the _package.json_ file to install all required modules. In your terminal type: _npm install array-to-csv_.

3. Install NPM <a style="color:#0D6EE4" href="https://www.npmjs.com/package/array-to-csv">array-to-csv</a>. In your terminal type: _npm install array-to-csv_.

4. Install NPM <a style="color:#0D6EE4" href="https://www.npmjs.com/package/jsonfile">jsonfile</a>. In your terminal type: _npm install jsonfile_.

## Storing Files and Naming Conventions
Two files are needed to run this report, they must be csv format, and stored in specific locations. A copy of both files are already stored in each location. These example files can be used to skip to the next section and try running the program.
1. Download the quarterly user content report from Lyearn and store it in the following directory: d3_SalesReport > data > csvContentReport > <filename>
###### * Note: This file must be named _User Content Report.csv_
&nbsp;
2. Download the most current global sales org chart master file. Navigate to the _HC_\__Reps_ tab, and save this active sheet as a csv file. Store the file in the following directory: d3_SalesReport > data > csvGlobalReport > <filename>
###### * Note: This file must be named _2017 Global Sales Org Chart_\__HC_\__Reps.csv_
&nbsp;

## Running the program
1. Open your terminal and cd to the _d3_\__SalesReport_ directory.
2. Type _node parseWkst_

## Retrieving Files
Two files will be created after running the _parseWkst_ program.
1. A csv file titled _userData2017.csv_ provides data that can be pasted into the _!Sales-Training-Weekly_ excel file. This data should be pasted into the _HC Reps_ tab. The _userData2017.csv_ can be found by navigating to the following directory:
  * d3_SalesReport > data > dataCSV
2. A json file titled _userData2017.json_ is a supplemental document. This file can be found by navigating to the following directory:
  * d3_SalesReport > data > dataJSON

## D3.js Data Analysis
The goal is to view the data via https server. Currently this data can be viewed via local drive.
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

###### * Note: An example file is being used to display the data. If you'd like to run a report and view that data, follow the steps preceding this section. Then navigate to _d3_\__SalesReport > barChart.js_, scroll down to line 15, copy the code that's commented out, and replace the code in line 16.
&nbsp;
