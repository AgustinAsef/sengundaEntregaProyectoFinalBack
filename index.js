//esto es servidor
import express, { json } from "express"
import productsRoutesFirebase from './routes/firebase/productRouterFirebase.js' 
import cartRoutesFirebase from './routes/firebase/cartRouterFirebase.js' 
import productsRoutesMongo from './routes/mongo/productsRouterMongo'
import cartRoutesMongo from './routes/mongo/cartRouterMongo.js'

const app = express()

//ruta raiz
app.use(express.json())
app.use(express.urlencoded({extended: true}))

switch (mongo) {
    case mongo:
        app.use('/productos', productsRoutesMongo)
        app.use('/cart', cartRoutesMongo)
    case firebase:
        app.use('/productos', productsRoutesFirebase)
        app.use('/cart', cartRoutesFirebase)    
    default:
        return alert('elige una base de datos para conentarte')
}

const PORT = process.env.PORT || 8090

app.listen(PORT, ()=>{
    console.log('esta vivoooo!!')
}) 

app.on("error", error => console.log("error al crear el servidor"))

