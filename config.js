//This file loads config
var fs = require('fs'),
	merge = require('./merge'),
	configfileName = 'config.json';

var defaults = {
	checkIpInterval : 5000
};


var configFromFile = {};

if(fs.existsSync(configFileName)){
	configFromFile = JSON.Parse(fs.readFileSync(configFileName, {encoding: 'utf8'});
}

var mergedConfig = merge(defaults, configFromFile);

module.exports = mergedConfig;