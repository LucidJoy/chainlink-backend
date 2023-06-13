const express = require("express");
const app = express();
const PORT = 3000;

app.get("/graph-rnn-1", (req, res) => {
  const response = {
    message: 55.6,
  };

  res.json(response);
});

app.get("/graph-rnn-2", (req, res) => {
  const response = {
    message: 50.24,
  };

  res.json(response);
});

app.get("/graph-rnn-3", (req, res) => {
  const response = {
    message: 40.78,
  };

  res.json(response);
});

app.get("/graph-rnn-4", (req, res) => {
  const response = {
    message: 43.67,
  };

  res.json(response);
});

app.get("/graph-rnn-5", (req, res) => {
  const response = {
    message: 52.98,
  };

  res.json(response);
});

app.get("/graph-rnn-6", (req, res) => {
  const response = {
    message: 53.52,
  };

  res.json(response);
});

app.get("/graph-rnn-7", (req, res) => {
  const response = {
    message: 56.04,
  };

  res.json(response);
});

app.get("/graph-rnn-8", (req, res) => {
  const response = {
    message: 58.76,
  };

  res.json(response);
});

app.get("/graph-rnn-9", (req, res) => {
  const response = {
    message: 55.13,
  };

  res.json(response);
});

app.get("/graph-rnn-10", (req, res) => {
  const response = {
    message: 53.87,
  };

  res.json(response);
});

app.get("/graph-rnn-11", (req, res) => {
  const response = {
    message: 54.17,
  };

  res.json(response);
});

app.get("/graph-rnn-12", (req, res) => {
  const response = {
    message: 52.63,
  };

  res.json(response);
});

app.get("/graph-rnn-13", (req, res) => {
  const response = {
    message: 56.67,
  };

  res.json(response);
});

app.get("/graph-rnn-14", (req, res) => {
  const response = {
    message: 55.04,
  };

  res.json(response);
});

app.get("/graph-rnn-15", (req, res) => {
  const response = {
    message: 54.97,
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
