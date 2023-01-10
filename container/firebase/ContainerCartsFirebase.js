import admin from 'firebase-admin'
import config from '../../config/config.js'
admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
    databaseURL: 'https://coderbackend.firebaseio.com'
})

console.log('base de datos conectada');

class ConteinerCartFirebase{
    db = admin.firestore()
    query = db.collection('carritos')

    async getAll(){
        try {
            let querySnapshot = await query.get()
            let docs = querySnapshot.docs
    
            let response = docs.map((doc)=>({
                id:doc.id,
                nombre: doc.data().nombre,
                edad: doc.data().edad,
                dni: doc.data().dni
            }))
            return response
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return errorMsg
        }
    }

    async getById(id){
        try {            
            let doc = query.doc(`${id}`)           
            let item = await doc.get()
            const response = item.data()
    
            return response
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return errorMsg
        }
    }

    async save (obj){
        try {
            let doc = query.doc(`${id}`)
            let newItem = await doc.create({obj})
            return (`${newItem} se ha creado correctamente`)
        } catch (error) {
                let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
                return (errorMsg)
        }
    }

    async update (id, objModifi){
        try {
        let doc = query.doc(`${id}`)
        let item = await doc.update({objModifi})

        return (`${item} se ha actualizado correctamente`)
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return (errorMsg)
        }
    }

    async deleteById (id){
        try {
            let doc = query.doc(`${id}`)
            let item = await doc.delete()
            
            return (`${item} se borro correctamente`)
        } catch (error) {
            let errorMsg = 'se ha producido un error, vuelve a intentarlo mas tarde'
            return (errorMsg)
        }
    }

}

export default ConteinerCartFirebase