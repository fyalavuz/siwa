const os = require('os-utils');
const express = require('express');
const app = express();


app.listen('9000', function() {
	console.log('siwa app started');
});

//platform
var platform = os.platform();

//cpu
var cpuCount = os.cpuCount();

//memory
var totalMemory = os.totalmem();

app.get('/', function(req, res) {
	res.json({
		platform: platform,
		uptime: {
			system: os.sysUptime(),
			process: os.processUptime()
		},
		cpu: {
			count: cpuCount,
		},
		memory: {
			total: totalMemory,
			free: {
				value: os.freemem(),
				percentage: os.freememPercentage()
			},
		},
		loadAverage: {
			1: os.loadavg(1),
			5: os.loadavg(5),
			15:os.loadavg(15)
		},
	});
});
