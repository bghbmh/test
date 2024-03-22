var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var layout = require('./components/layout.js');
var cardType = require('./components/mylistCardType.js');

function templateHTML(title, list, body, control) {
	return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">test</a></h1>
    ${list}
    ${control}
    ${body}
  </body>
  </html>
  `;
}
function templateList(filelist) {
	var list = '<ul>';
	var i = 0;
	while (i < filelist.length) {
		list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
		i = i + 1;
	}
	list = list + '</ul>';
	return list;
}

var html = '';
var app = http.createServer(function (request, response) {
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	var pathname = url.parse(_url, true).pathname;
	if (pathname === '/') {
		if (queryData.id === undefined) {

			let title = "list test";

			try {
				const jsonFile = fs.readFileSync('./data/myList.json', 'utf8');
				const jsonData = JSON.parse(jsonFile);



				let body = cardType.view(jsonData);
				body += `<a href="/sub">sub go?</a>`;
				body += `<a href="/create">create?</a>`;
				// fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
				html = layout.adminMain(title, body);

				// });
			} catch (err) {
				console.log("오류 - ", err);
				html = layout.main(title, err);
			}

			response.writeHead(200);
			response.end(html);

			// fs.readdir('./data', function (error, filelist) {

			// 	console.log("메인에서 - ", filelist)

			// 	var title = 'Welcome';
			// 	var description = 'Hello, Node.js';
			// 	var list = templateList(filelist);
			// 	var ctrl = `<a href="/create">create</a>`;
			// 	var template = templateHTML(title, list, `<h2>${title}</h2>${description}`, ctrl);
			// 	response.writeHead(200);
			// 	response.end(template);
			// });
		} else {
			// fs.readdir('./data', function (error, filelist) {

			// 	console.log("url에 뭔가 정보가 생겼나봄 - ", queryData.id)

			// 	fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
			// 		var title = queryData.id;
			// 		var list = templateList(filelist);
			// 		var ctrl = `<a href="/create">create</a>`
			// 		 + `<a href="/update?id=${title}">update</a>`
			// 		 + `<form action="delete_process" method="post">
			// 		 <input type="hidden" name="id" value="${title}">
			// 		 <input type="submit" value="delete">
			// 	   </form>`;
			// 		var template = templateHTML(title, list,
			// 			`<h2>${title}</h2>${description}`, ctrl);
			// 		response.writeHead(200);
			// 		response.end(template);
			// 	});
			// });
		}
	} else if (pathname === '/create') {

		let title = "list test";

		try {
			const jsonFile = fs.readFileSync('./data/myList.json', 'utf8');
			const jsonData = JSON.parse(jsonFile);

			let body = cardType.view(jsonData) + cardType.create();
			
			// fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
			html = layout.adminMain(title, body);

			// });
		} catch (err) {
			console.log("오류 - ", err);
			html = layout.adminMain(title, err);
		}

		response.writeHead(200);
		response.end(html);


	} else {
		response.writeHead(404);
		response.end('Not found');
	}
});
app.listen(3000);