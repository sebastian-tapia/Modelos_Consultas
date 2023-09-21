const db=require('../database/models')

module.exports= {
    list:(req,res)=>{
        db.MOVIE.findAll().
            then(movies=>{
                return res.render('moviesList',{movies:movies})
            })
            .catch(error=>console.log(error))
    },
    detail:(req,res)=>{
        db.MOVIE.findByPk(req.params.id).
            then(movie=>{
                return res.render('moviesDetail',{movie:movie})
            })
            .catch(error=>console.log(error))
    },
    new:(req,res)=>{
        db.MOVIE.findAll({
            order:[
                ['release_date','DESC']
            ]
        })
        .then(movies=>res.render('newestMovies',{
            movies:movies
        }))
        .catch(error=>console.log(error))
    },
    recomended:(req,res)=>{
        db.MOVIE.findAll({
            limit:5,
            order:[
                
                ['rating','DESC']
            ],
            
        }).
        then(movies=>{
            res.render('recommendedMovies',{
                movies:movies
            })
        })
        .catch(error=>console.log(error))
    }
}