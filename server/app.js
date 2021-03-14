const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3001


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const board = require('./router/board')
const user = require('./router/user')
const board_reply = require('./router/board_reply')
const photo = require('./router/photo')

app.use('/api/board', board)
app.use('/api/user', user)
app.use('/api/board_reply', board_reply)
app.use('/api/photo', photo)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})