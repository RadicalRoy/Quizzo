let React = require('react');
let ReactDOM = require('react-dom');
//let ReactRouter = require('react-router');
require('./index.css');

let MainPage = require('./components/MainPage');
let LoginPage = require('./components/LoginPage');
let QuizView = require('./components/QuizView');
let CreateQuizView = require('./components/CreateQuizView')
// state
// lifecycle events
// UI

class App extends React.Component {
  constructor () {
    super();
    this.state = {
                  url: 'http://localhost:8080',
                  isLoggedIn: false,
                  user: null,
                  quizzes: [],
                  quizResults: [],
                  quizViewIndex: null,
                  quizViewShow: false,
                  createQuizShow: false,
                 };
    this.loginUser = this.loginUser.bind(this);
    this.setQuizzes = this.setQuizzes.bind(this);
    this.showQuizView = this.showQuizView.bind(this);
    this.disableQuizView = this.disableQuizView.bind(this);
    this.toggleCreateQuizView = this.toggleCreateQuizView.bind(this);
  }

  //check logged in status
  componentDidMount () {
    fetch(this.state.url + '/login', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({...this.state, isLoggedIn : json.loggedIn, user:json.user}))
    .catch(err => console.log("Error occurred in app"))
  }

  toggleCreateQuizView () {
    this.setState({...this.state, createQuizShow: !this.state.createQuizShow})
  }

  // Set Quizzes from POST response
  setQuizzes(quizzes) {
    this.setState({...this.state, quizzes});
  }

  showQuizView (index) {
    this.setState({...this.state, quizViewIndex:index, quizViewShow: true})
  }

  disableQuizView() {
    this.setState({...this.state, quizViewIndex:null, quizViewShow: false})
  }

  // Login the User
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
      component = <MainPage
                  url={this.state.url}
                  user={this.state.user}
                  quizzes={this.state.quizzes}
                  quizResults={this.state.quizResults}
                  setQuizzes={this.setQuizzes}
                  showQuizView={this.showQuizView}
                  disableQuizView={this.disableQuizView}
                  toggleCreateQuizView={this.toggleCreateQuizView}
                  />
    } else {
      // Login Page Component
      component = <LoginPage loginUser={this.loginUser}/>
    }
    return (
      <div id="app">
        {this.state.quizViewShow && <QuizView disableQuizView={this.disableQuizView} quizViewIndex={this.state.quizViewIndex} quizzes={this.state.quizzes}/>}
        
        {this.state.createQuizShow && <CreateQuizView toggleCreateQuizView={this.toggleCreateQuizView}/>}
        {component}

      </div>
    )
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('content')
)
