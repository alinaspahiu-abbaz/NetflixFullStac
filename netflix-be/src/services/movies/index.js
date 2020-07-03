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

