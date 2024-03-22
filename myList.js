const express = require('express');
const app = express();
const fs = require('fs');

const layout = require('./components/layout.js');
//const cardType = require('./components/mylistCardType.js');

app.use(express.static('./'));

let html = '';
app.get('/', function (request, response) {

	fs.readdir('./', function (error, filelist) {
		console.log("filelist - ", filelist);
	});
	//fs.readdir('./data', function (error, filelist) {
		var title = 'Welcome';

		try{
			// const jsonFile = fs.readFileSync('./public/data/test.json', 'utf8');
			// const jsonData = JSON.parse(jsonFile);

			let body =  '';// cardType.view(jsonData);

			// fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
			html = layout.adminMain(title, body);
				
			// });
		} catch (err) {
			console.log("오류 - ", err);
			html = layout.adminMain(title, err);
		}		
		
		response.send(html);
	//});   
});



app.listen(3131, function () {
	console.log('3131 - Example app listening on port 3131!')

});