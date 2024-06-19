const express = require('express')
const app = express()

//I feel I could just do "let counter = 0". I'm I hardcoding?
const myCounters = [
    {
        counter: 0
    }
]

app.get('/counter', (request, response) => {
    response.json(myCounters)
})

app.post('/counter/increment', (request, response) => {
    myCounters[0].counter += 1
    response.status(201).json(myCounters)
})

app.post('/counter/decrement', (request, response) => {
    myCounters[0].counter -= 1
    response.status(201).json(myCounters)
})

app.post('/counter/double', (request, response) => {
    myCounters[0].counter ++ 
    response.status(201).json(myCounters)

})

app.delete('/counter/reset', (request, response) => {
    myCounters[0].counter = 0
    response.json(myCounters)
})

module.exports = app