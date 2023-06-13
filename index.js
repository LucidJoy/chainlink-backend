const express = require("express");
const app = express();
const PORT = 3000;

app.get("/graph-rnn-1", (req, res) => {
  res.send("55.60");
});

app.get("/graph-rnn-2", (req, res) => {
  res.send("50.24");
});

app.get("/graph-rnn-3", (req, res) => {
  res.send("40.78");
});

app.get("/graph-rnn-4", (req, res) => {
  res.send("43.67");
});

app.get("/graph-rnn-5", (req, res) => {
  res.send("52.98");
});

app.get("/graph-rnn-6", (req, res) => {
  res.send("53.52");
});

app.get("/graph-rnn-7", (req, res) => {
  res.send("56.04");
});

app.get("/graph-rnn-8", (req, res) => {
  res.send("58.76");
});

app.get("/graph-rnn-9", (req, res) => {
  res.send("55.13");
});

app.get("/graph-rnn-10", (req, res) => {
  res.send("53.87");
});

app.get("/graph-rnn-11", (req, res) => {
  res.send("54.17");
});

app.get("/graph-rnn-12", (req, res) => {
  res.send("52.63");
});

app.get("/graph-rnn-13", (req, res) => {
  res.send("56.67");
});

app.get("/graph-rnn-14", (req, res) => {
  res.send("55.04");
});

app.get("/graph-rnn-15", (req, res) => {
  res.send("54.97");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
