const { Router } = require('express')
const path = require('path')
const { handleGetPosts,handleCreatetPost } = require('../controllers')

const router = Router()

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/../index.html'))
})

router.get('/posts', handleGetPosts)

router.post('/comentarios', handleCreatePost)