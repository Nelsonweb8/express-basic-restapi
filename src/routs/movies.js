const { Router } = require('express');
const router = Router();
const _= require('underscore');
//datos de "db"
const movies = require('../sample.json');
console.log(movies);//consola

router.get('/',(req, res)=>{
    res.send(movies);//localhost
});

router.post('/', (req, res) => {
    const {title, director, year, rating} = req.body;
    if (title && director && year && rating) {
        const id = movies.length+1;
        const newMovie = {...req.body, id};
        //console.log(newMovie);
        movies.push(newMovie);
        //res.json('saved');
        res.json(movies);//envio al cliente las peliculas acutalizadas
    } else {
        //res.send('wrong Request');
        //res.json( {error: "There was an error."});
        res.status(500).json({error: "There was an error."});
    }
});

//ELIMINAR POR PARAMETRO ID
router.delete('/:id', (req, res) => {
    //console.log(req.params);
    const {id} = req.params;
    //recorro movies, splice=remover
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    });
    //res.send('delete');
    res.send(movies);
});


module.exports = router;