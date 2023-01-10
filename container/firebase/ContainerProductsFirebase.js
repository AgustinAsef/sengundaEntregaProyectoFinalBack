import admin from 'firebase-admin'
import config from '../../config/config.js'
admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
    databaseURL: 'https://coderbackend.firebaseio.com'
})

console.log('base de datos conectada');

class ConteinerProductsFirebase{
    db = admin.firestore()
    query = db.collection('usuarios')

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

export default ConteinerProductsFirebase
/*async function CRUD(){
    const db = admin.firestore()
    const query = db.collection('usuarios')

     try {
        let id = 1
        let doc = query.doc(`${id}`)
        await doc.create({nombre: 'Lucas', apellido: 'Blanco', dni: '30355874', edad:'15', contraseña: `LucasBlanco15` })

        id++
        doc = query.doc(`${id}`)
        await doc.create({ nombre: 'María', apellido: 'García', dni: '29575148', edad:'16', contraseña: `MaríaGarcía16` })


        id++
        doc = query.doc(`${id}`)
        await doc.create({ nombre: 'Tomas', apellido: 'Sierra', dni: '38654790', edad:'14', contraseña: `TomasSierra14` })
    } catch (error) {
        console.log(error)
    }

    //traer los documentos
    try {
        let querySnapshot = await query.get()
        let docs = querySnapshot.docs

        let response = docs.map((doc)=>({
            id:doc.id,
            nombre: doc.data().nombre,
            edad: doc.data().edad,
            dni: doc.data().dni
        }))

        console.log(response)
    } catch (error) {
        console.log(error)
    }
 
    //buscar por id
    try {
        let id = 2
        
        let doc = query.doc(`${id}`)
        
        let item = await doc.get()

        const response = item.data()

        console.log(response);
    } catch (error) {
        console.log(error);
    }

    //actualizar
    try {
        let id = 2
        
        let doc = query.doc(`${id}`)
        
        let item = await doc.update({apellido: "Garcia Sanchez"})
        console.log(item);
    } catch (error) {
        console.log(error);
    }

    //borrar
    try {
        let id = 2
        
        let doc = query.doc(`${id}`)
        
        let item = await doc.delete()
        console.log(item);
    } catch (error) {
        console.log(error);
    } 
}

CRUD()*/