const Post = require('../models/post');

// Obtener todos los posts
const handleGetPosts = async (req, res) => {
    try {
        const response = await Post.obtenerTodos();  // Asegúrate de que la función está definida en el modelo
        res.status(200).json(response);
    } catch (error) {
        console.error("Error al obtener posts:", error);  // Muestra el error completo en la consola para depuración
        res.status(500).json({
            msg: "Server Error",
            error: error.message,
        });
    }
};

// Dar like a un post
const handleLikePosts = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Post.like(id);  // Asegúrate de que la función 'like' está definida
        if (!response) {
            return res.status(404).json({ msg: "Post not found" });
        }
        res.status(200).json({
            msg: "Liked!",
            data: response
        });
    } catch (error) {
        console.error("Error while liking post:", error);
        res.status(500).json({
            msg: "Server error while liking post",
            error: error.message
        });
    }
};

// Eliminar un post
const handleDeletion = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Post.eliminar(id);  // Asegúrate de que la función 'eliminar' está definida
        if (!response) {
            return res.status(404).json({ msg: "Post not found" });
        }
        res.status(200).json({
            msg: "Deleted Post",
            data: response
        });
    } catch (error) {
        console.error("Error while deleting post:", error);
        res.status(500).json({
            msg: 'Server error while deleting post',
            error: error.message
        });
    }
};

// Crear un nuevo post
const handleCreatePost = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes = 0 } = req.body;  // Default likes to 0
        const response = await Post.agregar(titulo, img, descripcion, likes);  // Asegúrate de que la función 'agregar' está definida
        res.status(201).json({
            msg: "Post creado con éxito 🤙",
            data: response,
        });
    } catch (error) {
        console.error("Error while creating post:", error);
        res.status(500).json({
            msg: "Server Error",
            error: error.message,
        });
    }
};

module.exports = {
    handleGetPosts,
    handleLikePosts,
    handleCreatePost,
    handleDeletion,
};

