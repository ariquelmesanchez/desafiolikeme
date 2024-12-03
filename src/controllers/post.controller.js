const Post = require('../models/post')


const handleLikePosts = async (req, res) => {
    try {
        const { id } = req.params
        const response = await.Post.like(id)
        res.status(200).json({
            msg: "Liked!",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            msg: "server error :(",
            error: error.message

        })
    }
}


const handleDeletion = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Post.eliminar(id)
        res.status(200).json({
            msg: "Deleted Post",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server error',
            error: error.message
        })
    }
}

const handleGetPosts = (req,res) => {
    const posts = JSON.parse(readFileSync('post.json', 'utf-8'))

    res.status(200).json(posts)
}

const handleCreatePost = async (req, res) => {
    try {
      const { titulo, url, descripcion, likes } = req.body;
      const response = await Post.agregar(titulo, url, descripcion, likes);
  
      res.status(201).json({
        msg: "Post creado con éxito 🤙",
        data: response,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Server Error",
        error: error.message,
      });
    }
  
}