const { Router } = require('express');
const router = Router();
//datos de "db"
const movies = require('../sample.json');
console.log(movies);//consola

router.get('/',(req, res)=>{
    res.send(movies);//localhost
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('received');
})


module.exports = router;