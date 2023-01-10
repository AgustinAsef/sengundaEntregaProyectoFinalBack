import { Router } from "express";
import ConteinerProductFirebase from "../../container/firebase/ContainerProductsFirebase";

const productsRoutesFirebase = new Router()
const products = new ConteinerProductFirebase()

productsRoutesFirebase.get('/', async (req, res)=>{//obtiene todos los carritos
    products.getAll().then(products => {        
        res.json(products)
    })
})

productsRoutesFirebase.get('/:id', (req, res)=>{//obtiene el carrito por su id y los productos guardados en el 
    let {id} = req.params
    products.getById(id).then(products => {            
        res.json(products)
    })
})

productsRoutesFirebase.post('/', (req, res)=>{//crea un carrito y devuelve su id
    let newObj = req.body
    products.save(newObj).then(products => {
        res.json(newproducts.id)
    })
    
})

productsRoutesFirebase.delete('/:id', (req, res)=>{//elimina un carrito por su id
    let {id} = req.params
    id= parseInt(id)
    products.deleteproducts(id).then(()=>{
        res.json("se elimino el producto")
    })
})

export default productsRoutesFirebase