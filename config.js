//This file loads config
var fs = require('fs'),
	_ = require('lodash'),
	configFileName = 'config.json';

var defaults = {
	checkIpInterval : 1800000 //30 Minutes
};

var configFromFile = {};

if(fs.existsSync(configFileName)){
	configFromFile = JSON.Parse(fs.readFileSync(configFileName, {encoding: 'utf8'}));
}

module.exports = _.defaults(configFromFile, defaults);