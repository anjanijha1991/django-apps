
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fields: {},
            errors: {}
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }




    handleClick(event) {
        alert("Login successfull!! Welcome ");
        event.preventDefault();
        if (this.handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.")
        }
    }
    handleChange(field, event) {
        let fields = this.state.fields;
        fields[field] = event.target.value;
        this.setState({ fields });
    }
    render() {
        return (
            <form onSubmit={this.handleClick.bind(this)}>
                <div id="login">
                    <div className="field">
                        <label for="email">Email
                            <input type="email" onChange={this.handleChange.bind(this, "email")} id="email" placeholder="Email" />
                        </label>
                    </div>
                    <div className="field">
                        <label for="password">Password
                            <input type="password" id="password" onChange={this.handleChange.bind(this, "password")} placeholder="Password" />
                        </label>
                    </div>
                    <div className="field">
                        <input value="Send Message" className="button alt" onClick={(event) => this.handleClick(event)} type="submit" />
                    </div>
                </div>
            </form>

        );
    }
}

export default Login;