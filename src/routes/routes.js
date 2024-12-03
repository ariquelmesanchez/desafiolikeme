const { Router } = require('express')
const { 
    handleGetPosts,
    handleCreatePost,
    handleLikePosts,
    handleDeletion
  } = require('../controllers/post.controller')

const router = Router()

router.get("/posts", handleGetPosts);
router.post("/posts", handleCreatePost);
router.put("/posts/like/:id", handleLikePosts);
router.delete("/posts/:id", handleDeletion);
router.get("/", (req, res) => {
  res.send("¡El servidor está funcionando correctamente!");
});
module.exports = router;