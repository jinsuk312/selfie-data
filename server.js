// call dependency
const express = require('express');
// init express
const app = express();
app.listen(3000, () => {
	console.log('listening at PORT: 3000');
});
// display whats in public folder, the only file index.html
app.use(express.static('public'));
