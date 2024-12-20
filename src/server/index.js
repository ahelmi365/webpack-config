var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors"); // Import the cors package
const app = express();

app.use(express.static("dist"));
app.use(cors()); // Enable CORS for all routes
console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/test", function (req, res) {
  console.log( req )
  const formText = JSON.stringify(req.body.form)
  res.send({ ...mockAPIResponse, formText: req.body });
});
