const postModel = require("../database/models/models");

module.exports = (app) => {
    app.get('/posts', async (req, res) => {
        try{
            const posts = await postModel.find();
            res.status(200);
    
            res.json({
              status: 'success',
              message: 'post retrieved successfully',
              data: posts,
            });
        }
        catch (err) {
            res.status(404);
            res.json({
                status: 'error',
                message: err.message,
            });
        }
    });
    
    app.post('/posts', async (req, res) => {
    
        const post = new postModel(
            {
                title: req.body.title
            }
        )
        try {
            const savePost = await post.save();
            res.status(201);
            res.json({
                message: 'post created!',
                data: savePost,
            });
        } catch (err) {
            res.status(404);
            res.json({
            status: 'error',
            message: err.message,
        });
        }
    });

    app.delete('/posts/:id', async (req, res) => {
        try {
            await postModel.deleteOne({ _id: req.params.id });
            res.status(200);
            res.json({
              status: 'sucess',
              message: `Course with id = ${req.params.id} has been deleted`,
            });
        } catch (err) {
        res.status(404);
        res.json({
            status: 'error',
            message: err.message,
        });
        }
    })
}