const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Question = new Schema({
  text: {type: String, required: true},
  type: {type: String, required: true},
  choices: {type: Schema.Types.Mixed},
  imgUrl: {type: String},
  order: Number
})

const QuizzoSchema = new Schema({
  owner: {type: String, required: true},
  name: {type: String, required: true},
  questions: {type: [Question], required: true}
})

module.exports = mongoose.model('Quizzo', QuizzoSchema);
