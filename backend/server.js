require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//listen for the request
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
})
