const app = require('../models/application');

module.exports = {
    createApplication: function (req, res) { 
        console.log("Req.body", req.body);
        // app.Application
        app
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error));
     }
}