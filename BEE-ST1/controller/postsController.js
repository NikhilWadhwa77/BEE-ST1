const postModel = require('../models/postModel')

exports.createPosts = async (req, res) => {
    console.log(req.body)
    try {
        const post = new postModel(req.body)
        await post.save()
        res.send({ msg: "post created" })
    } catch (err) {
        console.log(err)
        res.send({ err: "failed to create" })
    }
}

exports.delete = async (req, res) => {
    try {
        const title = req.body.title
        console.log(title)

        const post = await postModel.findOneAndDelete({ title: title })

        console.log(post)

        if (post) {
            res.status(200).send({ msg: "Deleted", post })
        } else {
            res.status(400).send({ err: "NO post found" })
        }

    } catch (err) {
        console.log(err)
        res.status(400).send({ err: "failed to delete" })
    }
}