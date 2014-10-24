var _ = require('lodash'),
	Route53 = require('nice-route53');


module.exports = function updateRoute53(ipAddress, config, successCallback){
	var r53 = new Route53({
	    accessKeyId     : config.AWS_ACCESS_KEY_ID,
	    secretAccessKey : config.AWS_SECRET_ACCESS_KEY,
	});

	var args = {
	    zoneId : config.zoneId,
	    name   : config.domainName,
	    type   : 'A',
	    ttl    : 300,
	    values : [
	        ipAddress
	    ],
	};

	r53.setRecord(args, successCallback)
};