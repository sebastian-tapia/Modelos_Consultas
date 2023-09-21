const db=require('../database/models')
//a
module.exports={
    list:(req,res)=>{
        db.GENRE.findAll().
            then(genres=>{
                return res.render('genresList',{genres:genres})
            })
            .catch(error=>console.log(error))
    },
    detail:(req,res)=>{
        db.GENRE.findByPk(req.params.id).
            then(genre=>{
                return res.render('genresDetail',{
                    genre:genre
                })
            })
            .catch(error=>console.log(error))
    }
}