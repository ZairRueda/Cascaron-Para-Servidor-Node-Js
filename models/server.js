const express = require('express')
const cors = require('cors')

class Server{

    constructor()
    {
        this.app = express()
        this.port = process.env.PORT

        // Añadimos Middlewares : Funciones con las que a;adimos otras funcionalidades a nuestro server
        this.middlewares()
        // Rutas de mi aplicacion
        this.routes()
    }

    middlewares() {
        // Identifiacamos los middlewares por el .use
        this.app.use(cors())

        // Directorio plublico
        // .use > asi identificamos que estamos usando un middelware
        this.app.use(express.static('public'))
    }

    // Rutas del sistema
    routes(){
        // Este codigo no es escalable, esta todo junto
        this.app.get('/api', (req, res) => {
            // res.send('Hello World')

            res.json({
                // El OK no es necesario realmente, solo es un codigo de verificacion
                msg: 'get API'
            })

            // Uno puede enviar diferentes tipos de formatos 
            /* Ejem: .json > en este caso podemos enviar un objeto */
        })

        this.app.put('/api', (req, res) => {
            res.status(404).json({
                msg: 'put API'
            })
        })

        this.app.post('/api', (req, res) => {
            // res.json({
            //     msg: 'post API'
            // })

            // Mandar con el estatuas
            res.status(201).json({
                msg: 'post API'
            })
        })

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API'
            })
        })

        this.app.patch('/api', (req, res) => {
            res.json({
                msg: 'patch API'
            })
        })
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor Corriendo en puerto', this.port);
        })
    }
}

module.exports = Server