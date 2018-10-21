import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';


class SignUpLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            signup: ""
        }
        this.switch = this.switch.bind(this);
        this.getInitialState = this.getInitialState.bind(this);

    }
    getInitialState() {
        return { signup: false, login: true }
    }

    switch(word) {
        var signup1, login1;
        if (word === "signup") { signup1 = true; login1 = false; }
        else { login1 = true; signup1 = false; }
        return this.setState({ login: login1, signup: signup1 })
    }
    render() {
        var self = this;
        return (
            <section id="three" class="wrapper">
                <div class="inner">
                    <div id="buttons">
                        <p id="signupButton" onClick={() =>self.switch("signup")} className={self.state.signup ? "yellow" : "blue"}>Sign In</p>
                        <p id="loginButton" onClick={()=>self.switch("login")} className={self.state.login ? "yellow" : "blue"}> Login</p>
                    </div>
                    {self.state.signup ? <SignUp /> : null}
                    {self.state.login ? <Login /> : null}
                </div>
            </section>

        )


    }
}


export default SignUpLogin;
