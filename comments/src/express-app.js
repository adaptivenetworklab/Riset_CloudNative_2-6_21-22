const cors  = require('cors');
const bodyParser = require('body-parser');

const comment = require('./api/commentApi');

module.exports = async (app) => {

    app.use(bodyParser.json());
    app.use(cors())
    
    comment(app);
    
}