const express = require("express")
const cors = require("cors")
const path = require("path")
const listEndpoints = require("express-list-endpoints")
const moviesRouter = require("./services/movies")
const { notFoundHandler, badRequestHandler, genericErrorHandler} = require("./errorHandlers")
const { fs } = require("fs-extra")

const server = express()
const port = process.env.PORT || 2020



// MidlleWares:

server.use(express.json())
server.use(cors())

const loggerMiddleware = (req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`)
    next()
  }
  server.use(loggerMiddleware)




// Routes:
server.use("/movies", moviesRouter)



// Error HAndlers
server.use(notFoundHandler)
server.use(badRequestHandler)
server.use(genericErrorHandler)

console.log(listEndpoints(server))

server.listen(port, () => {
    console.log(`Hey guys! Find me on port: ${port}`)
})