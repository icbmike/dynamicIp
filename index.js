'use strict';

var colors = require('colors'),
	getIp = require('./getIp'),
	config = require('./config'),
	updateRoute53 = require('./updateRoute53');

var currentIpAddress;

(function doIt(){
	getIp(function(ipAddress){
		if(currentIpAddress !== ipAddress){
			updateRoute53(ipAddress, config, function(err, response){
				console.log(response);
				currentIpAddress = ipAddress;
			});
		}
	},
	function(error, response){
		console.log('Well Shit'.red, error, response);
	});

	setTimeout(doIt, config.checkIpInterval);
}());