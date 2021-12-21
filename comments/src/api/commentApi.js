const commentModel= require("../database/models/models")

module.exports = (app) => {
    app.get('/posts/:id/comments', async (req, res) => {
        try{
            const comments = await commentModel.find({postId: req.params.id});
            res.status(200);
    
            res.json({
              status: 'success',
              message: 'comments with specific id retrieved successfully',
              data: comments,
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
    
    app.post('/posts/:id/comments', async ( req, res ) => {
        const comment = new commentModel(
            {
                content: req.body.content,
                postId: req.params.id
            }
        )
    
        try {
            const saveComment = await comment.save();
            res.status(201);
            res.json({
                message: 'post created!',
                data: saveComment,
            });
        } catch (err) {
            res.status(404);
            res.json({
            status: 'error',
            message: err.message,
        });
        }       
    });

    app.delete('/posts/comments/:comment_id', async (req, res) => {
        try {
            await commentModel.deleteOne({ _id: req.params.comment_id });
            res.status(200);
            res.json({
              status: 'sucess',
              message: `Course with id = ${req.params.comment_id} has been deleted`,
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