const express = require('express')

const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
    res.json({mssg : 'My workout'})
})

//get single workout
router.get('/:id', (req, res) => {
    res.json({mssg : 'my single workout'})
})

//post a new workout
router.post('/', (req, res) => {
    res.json({mssg : 'My new workout'})
})

//delete workout
router.delete('/:id', (req, res) => {
    res.json({mssg : 'delete a workout'})
})

//update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg : 'update workout'})
})

module.exports = router