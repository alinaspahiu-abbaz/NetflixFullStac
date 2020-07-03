// 1. GET all:
moviesRouter.get("/", async(req, res, next) => {
     try{
          const movies = await getMovies()
          res.send(movies)
          console.log(movies)
        } 

    catch(error) 
        {
           console.log(error)
           const err = new Error("Generic Error Happened!")
           next(err)
        }
   })
// 2. GET only one:
moviesRouter.get("/:imdbID", async(req, res, next) => {
    try{
        const movies = await getMovies()
        const movie= movies.find(prod => prod.imdbID === req.params.imdbID)

     if(movies){
         res.send(movie)
     } else {
         const err = new Error()
         err.httpStatusCode = 404
         next(err)
     }
    } catch(error){
        console.log(error)
        const err = new Error("Generic error Happend!")
        next(err)
    }
})

// 3. POST:
moviesRouter.post("/", 
    [
        check("Title").exists().withMessage("Must have a Title!"),
        check("Type").exists().withMessage("You have to write the type of movie!"),
        check("Year").isLength({min:4, max:4}).withMessage("Write a valid year!"),
        sanitizeBody("Year").toInt()
        
        
    ],
    async(req, res, next) => {

        const validationErrors = validationResult(req)

        if(!validationErrors.isEmpty()) {
            const error = new Error()
            error.httpStatusCode = 400
            error.message = validationErrors
            next(error)
        } else {
            try{
                const newMovies= {
                    ...req.body,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    id: uniqid()
                }
            const movies = await getMovies()
            movies.push(newMovies)
            await writeMovies(movies)
            res.send(newMovies)
            }
            catch(error){
                console.log(error)
                const err = new Error("Generic Error!")
                next(err)
            }
        }
   
})

// 4. PUT
moviesRouter.put("/:imdbID", async(req, res, next) => {
    try{
        const movies = await getMovies()

        const movieFound = movies.find(movie =>movie.imdbID === req.params.imdbID)

        if(moviesRouter) {
            const position = movies.indexOf(movieFound)
            const body = req.body
            delete body.createdAt
            delete body.imdbID
            delete body.updatedAt


            const updateMovie = {...movieFound,...req.body}
            movies[position] = updateMovie
            await writeMovies(movies)
            res.send(updateMovie)
        } else {
            const err = new Error ()
            err.httpStatusCode = 404
            next(err)

        }
    } catch (error){
        console.log(error)
        const err = new Error("Generic error!")
        next(err)
    }
})

// 5. DELETE:
moviesRouter.delete("/:imdbID", async(req, res, next) => {
    try{
        const movies = await getMovies()
        const movieFound = movies.find(movie => movie.imdbID === req.params.imdbID)

        if(!movieFound){
            const error = new Error ("Movie not Found!")
            error.httpStatusCode = 404
            console.log(error)
            next(error)
        } else {
            const filteredMovies = movies.filter(movie => movie.imdbID !== req.params.imdbID)
            await writeMovies(filteredMovies)
            res.send("Deleted!")
        }
    } catch(error) {
        console.log(error)
        next(err)
    }
})
