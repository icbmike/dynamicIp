'use strict';

var colors = require('colors'),
	getIp = require('./getIp'),
	config = require('./config'),
	updateRoute53 = require('./updateRoute53');

var currentIpAddress;

(function doIt(){
	getIp(function(ipAddress){
		if(currentIpAddress !== ipAddress){

			console.log('IP Address Changed: '.blue, ipAddress);

			updateRoute53(ipAddress, config, function(err, response){
				if(err){
					console.log('Well Shit, Failed to Update Route53'.red, err, response);
				}
				else{
					console.log('Updated Route 53: '.blue, response);
					currentIpAddress = ipAddress;
				}
			});
		}
	},
	function(error, response){
		console.log('Well Shit, Failed to get IP Address'.red, error, response);
	});

	setTimeout(doIt, config.checkIpInterval);
}());