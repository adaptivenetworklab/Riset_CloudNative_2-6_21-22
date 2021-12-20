const cors  = require('cors');
const bodyParser = require('body-parser');

const post = require('./api/postApi');

module.exports = async (app) => {

    app.use(bodyParser.json());
    app.use(cors())
    
    post(app);
    
}