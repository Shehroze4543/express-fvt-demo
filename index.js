//Load Express
const express = require("express");

// const { default: Profile } = require("./views/Profile");

// Create our express app
const app = express();
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const fvtMovies = [
  "The Shawshank Redemption",
  "The Dark Knight",
  "The Wolf of Wall Street",
  "Schindler's List",
  "Goodfellas",
  "Life Is Beautiful",
  " The Pianist",
  "The Departed",
  "Django Unchained",
  "The Dark Knight Rises",
  "Heat",
];
// Define a "root" route directly on app
app.get("/", function (req, res) {
  res.send(`<h1>My Home Page</h1>`);
});

app.get("/:indexOfMoviessArray", (req, res) => {
  if (fvtMovies[req.params.indexOfMoviessArray]) {
    res.send(
      fvtMovies[req.params.indexOfMoviessArray] +
        " is one of my favorite movies of all time"
    );
  } else {
    res.send(
      "cannot find anything at this index: " + req.params.indexOfMoviessArray
    );
  }
});
app.listen(3009, function () {
  console.log("App listening on 3k");
});
