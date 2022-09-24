

import express from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/posts', (req, res) => {
  res.send('Hello World!')
})

export default {
    path: '/api',
    handler: app
  }