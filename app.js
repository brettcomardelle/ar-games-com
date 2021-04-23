const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile('index.html', { root: __dirname + "/relative_path_of_file" } );
});
// app.use('/', express.static('app', {index: "index.html"}));

app.listen(port, () => {
  console.log("App is listening")
});