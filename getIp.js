var request = require('request');

module.exports = function GetIP(callback, errorCallback){
	request('http://icanhazip.com', function(error, response, body){
		if (error || response.statusCode != 200) {
    		errorCallback(error, response);
		}else{
			callback(response.body.trim())
		}
	});
}