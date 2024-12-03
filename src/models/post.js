const { DB } = require('../config/db');

// Función para obtener todos los posts
const obtenerTodos = async () => {
    try {
        const result = await DB.query('SELECT * FROM posts');
        return result.rows;  // Asegúrate de que estás devolviendo los resultados correctos
    } catch (error) {
        throw new Error('Error al obtener los posts: ' + error.message);
    }
};

// Función para agregar un nuevo post
const agregar = async (titulo, img, descripcion, likes = 0) => {
    try {
        const SQLQuery = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
        const SQLValues = [titulo, img, descripcion, likes];
        const result = await DB.query(SQLQuery, SQLValues);
        return result.rows[0];  // Retorna el post agregado
    } catch (error) {
        throw error;
    }
};

// Función para like en un post
const like = async (id) => {
    try {
        const SQLQuery = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
        const result = await DB.query(SQLQuery, [id]);
        return result.rows[0];  // Devuelve el post actualizado con el nuevo like
    } catch (error) {
        throw error;
    }
};

// Función para eliminar un post
const eliminar = async (id) => {
    try {
        const SQLQuery = "DELETE FROM posts WHERE id = $1 RETURNING *";
        const result = await DB.query(SQLQuery, [id]);
        return result.rows[0];  // Devuelve el post eliminado
    } catch (error) {
        throw error;
    }
};

// Exportando todas las funciones
module.exports = {
    obtenerTodos,
    agregar,
    like,
    eliminar
};
