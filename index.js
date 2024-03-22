var express = require('express');
var app = express();
var fs = require('fs');

var layout = require('./components/layout.js');
var cardType1 = require('./components/cardType1.js');
const cardType2 = require('./components/cardType2.js');

app.use(express.static('public'));

//var template = require('./lib/template.js');

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))

var html = '';
app.get('/', function (request, response) {
	//fs.readdir('./data', function (error, filelist) {
		var title = 'Welcome';

		try{
			const jsonFile = fs.readFileSync('./public/data/test.json', 'utf8');
			const jsonData = JSON.parse(jsonFile);

			

			let body = cardType2.view(jsonData);
			body += `<a href="/sub">sub go?</a>`;
			body += `<a href="/create">create?</a>`;
			// fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
			html = layout.main(title, body);
				
			// });
		} catch (err) {
			console.log("오류 - ", err);
			html = layout.main(title, err);
		}		
		
		response.send(html);
	//});
});

app.get('/sub', function (req, res) {
	html = layout.sub("test_SUB_title", 'subpage test');
	res.send(html);
	//return res.send(html);
});


app.get('/create', function (req, res) {
	html = layout.sub("test_SUB_title", cardType1.create());
	res.send(html);
	//return res.send(html);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')

});
