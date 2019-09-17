const controller = require('../controllers/controller.js');

module.exports = function(app) {
    app.get('/cakes', (req, res) => {
        controller.index(req, res);
    });

    app.post('/cakes', (req, res) => {
        console.log("hi again");
        controller.add_cake(req, res);
    });

    app.get('/cakes/:id', (req, res) => {
        controller.index(req, res);
    });

    app.put('/cakes/:id/', (req, res) => {
        controller.add_rating(req, res);
    });
}