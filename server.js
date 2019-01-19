var http = require('http');
var url = require('url');
var fs = require('fs')

http.createServer(function(req,res){
    // switch(req.url){
    //     case '/':
    //     res.end("Hello we are on the home page");
    //     break;
    // }
var q = url.parse(req.url,true);
var filename = "."+ q.pathname;
fs.readFile(filename,function(err,data){
    if(err){
        res.writeHead('404',{'content-Type':'text/html'});
        return res.end("404 not found");
    }
    res.writeHead('200',{'content-Type':"text/html"});
    res.end(data);
});
console.log(req.url);
}).listen(3000,()=> {
    console.log(`server started on port 3000`);
});