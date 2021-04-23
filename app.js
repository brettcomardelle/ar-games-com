const express = require("express");
const app = express();
const path = require('path')
const port = process.env.PORT;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));
app.get("*", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log("App is listening")
});