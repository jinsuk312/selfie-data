const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(3000, () => {
	console.log('listening at PORT: 3000');
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

//routes
app.post('/api', (request, response) => {
	const data = request.body;
	const timestamp = Date.now();
	data.timestamp = timestamp;
	database.insert(data);
	response.json({
		status: 'success',
		latitude: data.lat,
		timestamp: timestamp,
		longitude: data.lon
	});
});
