let React = require('react');



class QuizView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const quiz = this.props.quizzes[this.props.quizViewIndex];
    const displayQ = [];

    for(let i = 0; i < quiz.questions.length; i++) {
      const choices = null;
      if(quiz.questions[i].type === "radio") {
        choices = [];
        for(let j in quiz.questions[i].choices) {
          choices.push(<div><input type="radio"/> {quiz.questions[i].choices[j]}</div>)
        }
      } else {
        choices = <input type="text" />;
      }
      displayQ.push(
        <div>
          <h3>{quiz.questions[i].text}</h3>
          {choices}
        </div>
      )
    }



    return (
      <div id="quizView">
      <h2> {quiz.owner + "'s Quiz"} </h2>
      <h2> {quiz.name} </h2>
      {displayQ}
      <button onClick={this.props.disableQuizView}>Exit View</button>
      </div>
    )
  }
}


module.exports = QuizView;
