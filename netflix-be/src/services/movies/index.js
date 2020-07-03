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
