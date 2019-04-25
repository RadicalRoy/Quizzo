const Quizzo = require('./quizModel');

const quizController = {};



quizController.createQuiz = (req, res, next) => {

  if(!req.body.owner || !req.body.name) return res.status(400).send("Bad form inputs");

  Quizzo.create(req.body, (err, doc) => {
    if (err) {
      return res.status(400).send("Something went wrong: " + err.toString());
    } else {
      res.locals.docName = doc.name;
      return next();
    }
  })

}

//get quiz by owner and name
quizController.getQuiz = (req, res, next) => {

  if(!req.headers.quizname || !req.headers.ownername) return res.status(400).send("Bad form inputs");

  Quizzo.findOne({owner : req.headers.ownername, name: req.headers.quizname}, (err, doc) => {
    if(err) {
      return res.status(400).send("Something went wrong: " + err.toString());
    } else {
      res.locals.quizzo = doc;
      return next();
    }
  })

}


quizController.getOwnerQuizzes = (req, res, next) => {

  if(!req.headers.ownername) return res.status(400).send("Bad form inputs");

  Quizzo.find({owner : req.headers.ownername}, (err, docs) => {
    if(err) {
      return res.status(400).send("Something went wrong: " + err.toString());
    } else {
      res.locals.quizzos = docs;
      return next();
    }
  })

}

quizController.getUserQuizzes = (req, res, next) => {

}





module.exports = quizController;
