const { Router } = require('express')

const router = Router()

// Este codigo no es escalable, esta todo junto
router.get('/', (req, res) => {
    // res.send('Hello World')

    res.json({
        // El OK no es necesario realmente, solo es un codigo de verificacion
        msg: 'get API'
    })

    // Uno puede enviar diferentes tipos de formatos 
    /* Ejem: .json > en este caso podemos enviar un objeto */
})

router.put('/', (req, res) => {
    res.status(404).json({
        msg: 'put API'
    })
})

router.post('/', (req, res) => {
    // res.json({
    //     msg: 'post API'
    // })

    // Mandar con el estatuas
    res.status(201).json({
        msg: 'post API'
    })
})

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    })
})

router.patch('/', (req, res) => {
    res.json({
        msg: 'patch API'
    })
})


module.exports = router