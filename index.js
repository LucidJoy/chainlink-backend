const express = require("express");
const app = express();
const PORT = 3000;

app.get("/graph-rnn-1", (req, res) => {
  res.send("55.6");
});
app.get("/graph-rnn-2", (req, res) => {
  res.send("50.2");
});
app.get("/graph-rnn-3", (req, res) => {
  res.send("40.78");
});
app.get("/graph-rnn-4", (req, res) => {
  res.send("21.91");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
