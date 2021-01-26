const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);//creo la variable y valido el  pueerto
app.set('json spaces', 2);

//middlewares combined = more details
app.use(morgan('dev'));

//formato de texto no de imagenes
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// API routes
app.use(require('./routs/index'));
app.use('/api/movies',require('./routs/movies'));
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
