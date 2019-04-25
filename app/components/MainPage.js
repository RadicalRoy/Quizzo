

let React = require('react');

let MyQuizzes = require('./MyQuizzes');



class MainPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div id="mainPage">
        <MyQuizzes />
      </div>
    )
  }

}

module.exports = MainPage;
