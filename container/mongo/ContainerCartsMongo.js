import mongoose from "mongoose";
import config from "../../config/config.js";

await mongoose.connect(config.mongoose.url, config.mongoose.options)
class ConteinerProductsMongo{

    userModel = mongoose.model('carritos', UserSchema) 

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
        try {
            let remplaceObj = await userModel.updateOne({_id:id}, {$set:{objModifi}})
            return remplaceObj            
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return (errorMsg)
        }

    }

    async deleteById (id){
        try {
            let deleteById = await userModel.deleteOne({_id:id})
            return deleteById            
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return (errorMsg)
        }

    }

    async deletAll (){
        try {
            let deletAll = await userModel.drop()
            return ('se ha eliminado la coleccion correctamente')    
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return (errorMsg)
        }
    }
}

export default ConteinerProductsMongo