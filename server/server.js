const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//database
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// MongoDB connection to Atlas
mongoose.connect("mongodb+srv://royloquen:ilovetesting@cluster0-xuhat.mongodb.net/test?retryWrites=true", {useNewUrlParser: true});

//controllers
const userController = require('./user/userController');
const quizController = require('./quiz/quizController');


app.use(bodyParser.json());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post("/createUser", userController.createUser, (req, res) => {
  res.send(res.locals.doc);
});

app.post("/login", userController.getUser, (req, res) => {
  res.send();
});

app.post("/createQuiz", quizController.createQuiz, (req, res) => {
  res.send("Created quiz: " + res.locals.docName);
});

app.get("/getQuiz", quizController.getQuiz, (req, res) => {
  res.send(res.locals.quizzo);
})


app.listen(3000);
