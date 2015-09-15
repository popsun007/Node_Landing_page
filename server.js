var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response)
{
	console.log("Request URL: " , request.url);
	if(request.url === "/")
	{
		fileUrl = "index.html";
	}
	else if(request.url === "/ninjas")
	{
		fileUrl = "ninjas.html";
	}
	else if(request.url === "/dojos/new")
	{
		fileUrl = "dojo.html";
	}
	if(fileUrl)
	{
		fs.readFile(fileUrl, 'utf8', function(errors, contents)
		{
			response.writeHead(200, {'Content-type' : 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else
	{
		response.writeHead(404);
		response.end("Page not found");
	}
});
server.listen(8888);
console.log("Running server in local host at port 8888");
