let React = require('react');
let ReactDOM = require('react-dom');
let ReactRouter = require('react-router');
require('./index.css');
// state
// lifecycle events
// UI

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
