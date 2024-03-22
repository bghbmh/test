// Import
/*
const express = require('express');
const route = require('./routes/route');
const app = express();
const path = require('path');

// Static Files
app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));
app.use('/img', express.static(path.join(__dirname, '../public/img')));

app.use('/', route);

// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Listen on port 3000
const port = 3000;
app.listen(port, function () {
	console.log('Bubble node app running on port ' + port);
});
*/





const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


var layout = require('./public/layout/layout.js');
var cardType1 = require('./public/components/cardType1.js');


const express = require('express');
const app = express();
app.use(express.static(__dirname + '/html'));
//app.use(express.static(path.join(__dirname, 'html')));


http.createServer(function (request, response) {
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	var pathname = url.parse(_url, true).pathname;
	var title = queryData.id;

	console.log("url_zz - ", _url, _url.indexOf(".css"));


	if( _url.indexOf(".css") > -1 ){
		fs.readFile(__dirname + '/html'+_url, (err, data) => {
			if (err) {
				console.log("??? - ",err, __dirname, data);
			}

			console.log("!!! - ",err, data);
			
		});
	}

	//checkStaticFile(_url);
	

	let html="";

	if (pathname === '/') {
		console.log("root - ", pathname);

		html = layout.main("test_title", "ttttTEST");

		// try{
		// 	const jsonFile = fs.readFileSync('./data/test.json', 'utf8');
		// 	const dd = JSON.parse(jsonFile);

		// 	let a = cardType1.view(JSON.parse(jsonFile));
		// 	a += `<a href="/sub">sub go?</a>`;
		// 	a += `<a href="/create">create?</a>`;
		// 	// fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
		// 	html = layout.main("test_title", a);
				
		// 	// });
		// } catch (err) {
		// 	console.log("오류 - ", err);
		// 	html = layout.main("test_title", cardType1.view());
		// }

		response.writeHead(200);
		response.end(html);
		
		
	} else if(pathname === '/sub'){
		html = layout.sub("test_SUB_title", 'subpage test');
		response.writeHead(200);
		response.end(html);
	} else if(pathname === '/create'){
		html = layout.sub("test_SUB_title", cardType1.create());
		response.writeHead(200);
		response.end(html);
	} else if(pathname === '/mydb'){
		html = layout.sub("test_my list", cardType1.view());
		response.writeHead(200);
		response.end(html);
	}else {
		response.writeHead(404);
		response.end('Not found');
	}



}).listen(3000);


function checkStaticFile(linkfile){

	if( linkfile.indexOf(".css") ){
		fs.readFile(linkfile, (err, data) => {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/plain' });
				res.write('404 Not Found');
				return res.end();
			}
			res.writeHead(200, { 'Content-Type': 'text/css' });
			res.write(data);
			return res.end();
		});
	}
		
}