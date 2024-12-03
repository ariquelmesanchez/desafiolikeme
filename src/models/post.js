const { DB } = require('../config/db')

const addPost = async ( titulo, url, descripcion) => {

    try {
        const SQLQuery = "insert into posts values (DEFAULT, $1, $2, $3, DEFAULT)"
        const SQLValues = [titulo, url, descripcion]
        const result = await DB.query(SQLQuery, SQLValues)
        console.log(result)
    }   catch (error) {
        throw error
    }

};

const getAll = async () => {
    try {
        const SQLQuery = "select * from posts"
        const [ rows ] = await DB.query(SQLQuery)
        return rows
    } catch (error) {
        throw error
    }
}



module.exports ={
    addPost,
    getAll
}