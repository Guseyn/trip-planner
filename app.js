const express = require('express')
const app = express()

app.use(express.static('static'))

app.listen(4200, () => {
	console.log('app is started: http://localhost:4200')
})
