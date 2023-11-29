const express = require('express')
const app = express();
const router = express.Router()
const postController = require('../controller/postsController')

app.use('/api/posts', postController.createPosts)
app.use('/api/posts', postController.delete)

router.use("", app)
module.exports = router