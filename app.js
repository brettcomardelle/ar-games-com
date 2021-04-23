const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("*", (req, res) => {
  res.sendFile("index.html")//path.join(__dirname + '/index.html'));
});
// app.use('/', express.static('app', {index: "index.html"}));

app.listen(port, () => {
  console.log("App is listening")
});