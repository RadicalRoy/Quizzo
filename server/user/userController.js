const User = require('./userModel.js');


const userController = {}


userController.createUser = (req, res, next) => {
  //console.log(req.body);
  if(!req.body.username || !req.body.password) return res.status(400).send("Bad form inputs");

  User.create({'username': req.body.username, 'password': req.body.password}, (err, doc) => {
    if(err) {
      return res.status(400).send("Something went wrong: " + err.toString());
    }  else {
      res.locals.doc = doc;
      return next();
    }
  });

}


userController.getUser = (req, res, next) => {
  if(!req.body.username || !req.body.password) return res.status(400).send("Bad form inputs");

  User.findOne({'username': req.body.username, 'password': req.body.password}, (err, doc) => {
    if(err) {
      return res.status(400).send("Something went wrong: " + err.toString());
    } else {
      res.cookie('quizzo-user', doc.username);
      return next();
    }
  });
}



module.exports = userController;
