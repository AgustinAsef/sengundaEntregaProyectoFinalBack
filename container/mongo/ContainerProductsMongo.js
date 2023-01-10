import mongoose from "mongoose";
import config from "../../config/config.js";

await mongoose.connect(config.mongoose.url, config.mongoose.options)
class ConteinerProductsMongo{

    userModel = mongoose.model('usuarios', UserSchema) 

    async getAll(){
        try {
            let allProducts = await userModel.find({})
            return allProducts    
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return errorMsg
        }
    }

    async getById(id){
        try {
            let product = await userModel.find({_id:id})
            return product
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return errorMsg
        }
    }

    async save (obj){
        try {
            let newOne = await userModel.insert({obj})
            return newOne
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return (errorMsg)
        }
    }

    async update (id, objModifi){
        let remplaceObj = await userModel.updateOne({_id:id}, {$set:{objModifi}})
        return remplaceObj
    }

    async deleteById (id){
        let deleteById = await userModel.deleteOne({_id:id})
        return deleteById
    }

    async deletAll (){
        let deletAll = await userModel.drop()
        return ('se ha eliminado la coleccion correctamente')
    }
}

export default ConteinerProductsMongo
/* const userModel = mongoose.model('usuarios', UserSchema)

    try {

        // Conexion con la DB
        await mongoose.connect(config.mongoose.url, config.mongoose.options)
        console.log('Base de datos conectada!!')
        
        const users = await userModel.insertMany([
            { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874', edad:'15', contraseña: `LucasBlanco15` },
            { nombre: 'María', apellido: 'García', dni: '29575148', edad:'16', contraseña: `MaríaGarcía16` },
            { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790', edad:'14', contraseña: `TomasSierra14` },
            { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670', edad:'17', contraseña: `CarlosFernández17`}
        ])

        const user = await userModel.find({nombre: "Lucas"})
        console.log(user);

        const rename = await userModel.updateOne({nombre:"Lucas"}, {$set:{nombre:"Gian Lucas"}})
        console.log(rename)
    } catch (error) {
        console.log(error)
    } */