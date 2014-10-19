var colors = require('colors'),
	getIp = require('./getIp'),
	config = require('./config');


(function doIt(){
	getIp(function(ipAddress){
		console.log(ipAddress);
	},
	function(error, response){
		console.log('Well Shit'.red, error, response);
	});

	setTimeout(doIt, config.checkIpInterval);
})();