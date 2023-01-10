import { Router } from "express";
import ConteinerProductMongo from "../../container/mongo/ContainerProductsMongo";

const productsRoutesMongo = new Router()
const products = new ConteinerProductMongo()

productsRoutesMongo.get('/', async (req, res)=>{//obtiene todos los carritos
    products.getAll().then(products => {        
        res.json(products)
    })
})

productsRoutesMongo.get('/:id', (req, res)=>{//obtiene el carrito por su id y los productos guardados en el 
    let {id} = req.params
    products.getById(id).then(products => {            
        res.json(products)
    })
})

productsRoutesMongo.post('/', (req, res)=>{//crea un carrito y devuelve su id
    let newObj = req.body
    products.save(newObj).then(products => {
        res.json(newproducts.id)
    })
    
})

productsRoutesMongo.delete('/:id', (req, res)=>{//elimina un carrito por su id
    let {id} = req.params
    id= parseInt(id)
    products.deleteproducts(id).then(()=>{
        res.json("se elimino el producto")
    })
})

export default productsRoutesMongo