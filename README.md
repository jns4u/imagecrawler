# imagecrawler
extended version of CLI based imagecrawler https://github.com/jns4u/pyworks/blob/master/imagecrawl.py

This project is simple image crawler and compossed of two parts client application which is programmed to run on http://localhost:5000 and API server http://localhost:5001

Dependencies:
Install NodeJS v6.11.0 LTS
npm install serve
install PhantomJS version 2.1.1( You can use npm installer $npm install phantomjs )

Development environment( Ubuntu 16.04 LTS )
Run following commands to start with application

$cd imagecrawler 

$cd app && serve && cd .. && cd api
this will run client application

$phantomjs imgcrwlerapi.js
this will start api server
