
let React = require('react');



class LoginPage extends React.Component {

  constructor (props) {
    super(props);
  }


  render () {
    return (
      <div id="loginBox">
        <h1> Login: </h1>
        <h2> UserName </h2>
        <input type="text" id="username" name="username" />
        <h2> Password </h2>
        <input type="text" id="password" name="password" />
        <button id="loginSubmit" onClick={this.props.loginUser}>Submit</button>
      </div>
    )
  }


}



module.exports = LoginPage;
