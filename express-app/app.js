const express = require("express");
const PORT = 9019;
const hostname = "localhost";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my nodejs server");
});
app.get("/about", (req, res) => {
  res.send("this is my about page");
});
app.get("/contact", (req, res) => {
  res.send("this is my contact page");
});
app.get("/product", (req, res) => {
  res.send("this is my product page");
  res.statusMessage = "Purchase and enjoy";
});
app.get("/services", (req, res) => {
  res.send("this is my services page");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${hostname}: ${PORT}`);
});
