var request = require('request');


(function doIt(){
	request('http://icanhazip.com', function(error, response, body){
		if (!error && response.statusCode == 200) {
	    	console.log(body);
		}
	});

	setTimeout(doIt, 5000);
})();