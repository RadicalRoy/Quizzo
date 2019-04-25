let React = require('react');
let ReactDOM = require('react-dom');
//let ReactRouter = require('react-router');
require('./index.css');

let MainPage = require('./components/MainPage');
let LoginPage = require('./components/LoginPage');
// state
// lifecycle events
// UI

class App extends React.Component {
  constructor () {
    super();
    this.state = {url: 'http://localhost:8080',
                  isLoggedIn: false,
                  user: null,
                  quizzes: [],
                  quizResults: [],
                 };
    this.loginUser = this.loginUser.bind(this);
  }

  //check logged in status
  componentDidMount () {
    fetch(this.state.url + '/login', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({...this.state, isLoggedIn : json.loggedIn}))
    .catch(err => console.log("Error occurred in app"))
  }

  loginUser(event) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch(this.state.url + "/login", {
      method: "POST",
      headers: {
            "Content-Type": "application/json",
      },
      body: JSON.stringify({"username": username, "password": password})
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({...this.state, user: json.username, isLoggedIn: true});
    })
    .catch(err => console.log("Error occurred in app: loginUser"))
  }
  // if logged in show app
  // if not logged in show login page
  render() {
    let component = null
    if (this.state.isLoggedIn) {
      // Main Page component
      component = <MainPage user={this.state.user} quizzes={this.state.quizzes} quizResults={this.state.quizResults}/>
    } else {
      // Login Page Component
      component = <LoginPage loginUser={this.loginUser}/>
    }
    return (
      <div id="app">
        {component}
      </div>
    )
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('content')
)
