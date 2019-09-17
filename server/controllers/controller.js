const Cake = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_cake: function(req, res) {
        console.log(req.body)
        Cake.create(req.body)
            .then(data => 
                res.json(data)
            )
            .catch(err => {
                res.json(err);
            })
    },

    get_cake: function(req, res) {
        Cake.findOne({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    add_rating : function(req, res) {
        Cake.findOneAndUpdate({'_id' : req.params.id}, {$push: {reviews: req.body}})
            .then(data =>
                res.json(data)
            )
            .catch(err => {
                console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                    res.json(err);
                }
            })
    }
}