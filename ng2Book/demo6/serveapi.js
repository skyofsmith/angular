const express = require('express')
const app = express()

app.get('/student', (req, res) => {
  res.set({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
  })
  res.json([{
      id: 0,
      name: 'Zz'
    },
    {
      id: 1,
      name: 'Sam'
    }
  ])
})

app.listen(4300, 'localhost')
