let React = require('react');



class MyQuizzes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

  }

  render() {
    let quizLines = [];
    console.log("rendering quizzes");
    console.log(this.props.quizzes);
    for(let i = 0; i < this.props.quizzes.length; i++) {
      const quiz = this.props.quizzes[i];
      quizLines.push(
        <p
          onClick={(event) => {
            this.props.showQuizView(event.target.id.split('-')[1])
          }}
          key={"quiz-" + i}
          id={"quiz-" + i}
          >{quiz.name}</p>
      );
    }


    return (
      <div id="myQuizzes">
        <h1>{this.props.user + "'s"} Quizzos</h1>
        {quizLines}
      </div>
    )
  }




}




module.exports = MyQuizzes;
