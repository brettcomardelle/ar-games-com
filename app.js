const express = require("express");
const app = express();
const path = require('path')
const port = process.env.PORT;

app.get("*", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log("App is listening")
});