const express = require('express');
const app = express();
app.listen(3000, () => {
	console.log('listening at PORT: 3000');
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

//routes
app.post('/api', (request, response) => {
	console.log(request.body);
	const data = request.body;
	response.json({
		status: 'success',
		latitude: data.lat,
		longitude: data.lon
	});
});
