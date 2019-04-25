

let React = require('react');

let MyQuizzes = require('./MyQuizzes');



class MainPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    //get quizzes & set quizzes
    fetch(this.props.url + "/getOwnerQuizzes", {
      headers: {ownername: this.props.user},
      method: "GET",
    })
    .then(response => response.json())
    .then(this.props.setQuizzes)
    .catch(err => "Error occurred in MainPage fetching quizzes: " + err.toString());

  }

  render() {
    return (
      <div id="mainPage">
        <MyQuizzes
        user={this.props.user}
        quizzes={this.props.quizzes}
        showQuizView={this.props.showQuizView}
        />
        <button id="addQuiz" onClick={this.props.toggleCreateQuizView}> Create Quizzo </button>
      </div>
    )
  }

}

module.exports = MainPage;
