
var Service = require('node-windows').Service;
 
// Create a new service object 
var svc = new Service({
  name:'TillBoxWeb',
  description: 'TillBoxWeb BackEnd server.',
  script: 'C:\\GitRepo\\NodeJS\\NybSysTillBoxWeb\app.js babel-node'
});
 console.log("server running");
// Listen for the "install" event, which indicates the 
// process is available as a service. 
svc.on('install',function(){
	console.log("server running");
  svc.start();
});
 
svc.install();