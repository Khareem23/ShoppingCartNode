var Product = require("../models/product");
var mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb://project:project12345@ds125881.mlab.com:25881/videoshopdb"
// );
mongoose.connect("mongodb://localhost:27017/shoppingdb");
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", function() {
  console.log(
    "Mongoose default connection open to " + "mongodb://127.0.0.1:27017/sms-dev"
  );
});

// If the connection throws an error
mongoose.connection.on("error", function(err) {
  console.log("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function() {
  console.log("Mongoose default connection disconnected");
});
// An Object
// var product = new Product({
//   ImagePath:
//     "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png",
//   title: "Gothic Video Game",
//   description: "Awesome Game !!!",
//   price: 10
// });

// AN Array of Objects
var products = [
  new Product({
    ImagePath:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game !!!",
    price: 20
  }),
  new Product({
    ImagePath:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game !!!",
    price: 30
  }),
  new Product({
    ImagePath:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game !!!",
    price: 10
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
