const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_cakes', {useNewUrlParser: true});

const ReviewSchema = new mongoose.Schema({
    rating: {type: Number, required: [true, "Reviews must have a rating!"]},
    comment: {type: String, required: [true, "Comments cannot be blank!"], minLength: 1}
   }, {timestamps: true})

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: [true, "Cakes must have a baker!"], minLength: 1},
    imageUrl: {type: String, required: [true, "Cakes must have an image!"], minLength: 1},
    reviews: [ReviewSchema]
   }, {timestamps: true})

const Cake = mongoose.model("Cake", CakeSchema);

module.exports = Cake;
