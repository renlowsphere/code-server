console.log("|##############|\n|##############|\n|#####Server###|\n|##############|\nCoded by Ren Lowsphere <3\n");
const prompt = require("prompt");
const props = [{
  name: 'filename'
}];
prompt.start();
console.log("Example: /sdcard/ren.html");
prompt.get(props, function(err,result){
if (err) { return onErr(err); }
const exec = require("child_process").exec;
var http = require("http");  
var fs = require('fs');
fs.readFile(result.filename, function (err, data){
http.createServer(function (request, response) {  
   // Content Type: text/plain  
   response.writeHead(200, {'Content-Type': 'text/html'});  
   response.write(data.toString());  
}).listen(8081);  
console.log('Server running at http://127.0.0.1:8081/');
const exec = require("child_process").exec;
exec('termux-open-url http://127.0.0.1:8081', (err, stdout, stderr) => {
  console.log('Auto Open..\n');
});
});
});
