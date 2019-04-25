let React = require('react');


class CreateQuizView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="createQuizView">
      <button id="closeCreateView" onClick={this.props.toggleCreateQuizView}> X </button>

      
      <button id="createViewSubmit"> Submit </button>
      </div>
    )
  }

}

module.exports = CreateQuizView;
