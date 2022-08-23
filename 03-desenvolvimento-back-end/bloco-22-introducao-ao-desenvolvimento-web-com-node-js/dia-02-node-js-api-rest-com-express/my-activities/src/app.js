const express = require('express');
const activities = require('./data');

const app = express();

app.get('/myActivities', (req, res) => {
  res.status(200).json(activities);
});

app.get('/myActivities/:id', (req, res) => {
  const activity = activities.find((act) => act.id === Number(req.params.id));

  res.status(200).json(activity);
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filtered = activities;

  if (status) {
    filtered = activities.filter((act) => act.status === status);
  }

  res.status(200).json(filtered);
});

module.exports = app;