const path = require("path")
const {readDB, writeDB} = require('./utilities')
const { write } = require("fs")

const moviesPath = path.join(__dirname, "../data/movies.json")


module.exports = {
    getMovies: async() => readDB(moviesPath),
    writeMovies: async(data) => writeDB(moviesPath, data),
}