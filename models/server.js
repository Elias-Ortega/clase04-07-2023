import express from 'express';

export default class Server {

    constructor() {
        this.app = express();
        this.puerto = process.env.PORT;
        //Middlewares
        this.middlewares();
        //Rutas de mi Webservice
        this.routes();
    }

    //Middlewares son metodos para dar configuraciones extras al servidor
    middlewares(){
        this.app.set('view engine', 'hbs');
    }

//Rutas de mi webservice
    routes() {
        this.app.get('/', (req, res) => {
            res.render('index');
        });
    }

    listen() {
        this.app.listen( this.puerto, () => {
            console.log('Webservide corriendo en puerto: ', this.puerto);
        });
    }

}

