const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static('static'))

app.listen(PORT, () => {
  console.log(`app is started on port ${PORT}`)
})
