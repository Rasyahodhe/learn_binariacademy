const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3000);
