const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

const userServiceProxy = httpProxy('https://user.ekshop.codespecies.com')

// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
})

// Proxy request

app.get('/', (req, res, next) => {
    res.send("welcome")
})
app.all('/user/:userId', (req, res, next) => {
  userServiceProxy(req, res, next)
})


const PORT = process.env.PORT || 8765

app.listen(PORT, () =>
  console.log(`Server running in port --> ${PORT}`)
);