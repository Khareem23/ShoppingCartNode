var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  discription: { type: String, required: true },
  price: { type: Number, required: true }
});

// Creating a Model of the Schema (Blueprint/structure of the model)
module.exports = mongoose.model("Product", schema);
