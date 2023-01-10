import { Router } from "express";
import ConteinerCartMongo from "../../container/mongo/ContainerCartsMongo.js";

const cartRoutesMongo = new Router()
const cart = new ConteinerCartMongo()

cartRoutesMongo.get('/', async (req, res)=>{//obtiene todos los carritos
    cart.getAll().then(cart => {        
        res.json(cart)
    })
})

cartRoutesMongo.get('/:id', (req, res)=>{//obtiene el carrito por su id y los productos guardados en el 
    let {id} = req.params
    cart.getById(id).then(cart => {            
        res.json(cart)
    })
})

cartRoutesMongo.post('/:usuario', (req, res)=>{//crea un carrito y devuelve su id
    let {usuario} = req.params
    let today = new Date();
    let fecha = today.getDate() + '-' + ( today.getMonth() + 1 ) + '-' +  today.getFullYear()
    var randomId = Math.floor(Math.random()*10000000)
    let id = randomId

    let newCart ={
        id: id,
        usuario: usuario,
        creationFech: fecha,
        cart: []
    }

    cart.save(newCart).then(cart => {
        res.json(newCart.id)
    })
    
})

cartRoutesMongo.delete('/:id', (req, res)=>{//elimina un carrito por su id
    let {id} = req.params
    id= parseInt(id)
    cart.deleteCart(id).then(()=>{
        res.json("se elimino el carrito")
    })
})

export default cartRoutesMongo