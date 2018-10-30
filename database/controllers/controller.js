const app = require('../models/application');

module.exports = {
    createApplication: function(req, res) { 
        console.log("Req.body", req.body);
        // app.Application
        app
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error));
     },
     findAllApplications: function(req, res) {
        console.log("findAllApplications req.params", req.params);

        app
            .find({userId: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

     }
}