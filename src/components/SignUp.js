import React, { Component } from 'react';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm: '',
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

        if (!fields["first_name"]) {
            formIsValid = false;
            console.log("first name has error")
            errors["first_name"] = "Cannot be empty";
        }

        if (typeof fields["first_name"] !== "undefined") {
            if (!fields["first_name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                console.log("first name has error")
                errors["first_name"] = "Only letters";
            }
        }
        if (!fields["last_name"]) {
            formIsValid = false;
            console.log("last name has error")
            errors["last_name"] = "Cannot be empty";
        }

        if (typeof fields["last_name"] !== "undefined") {
            if (!fields["last_name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;  console.log("last name has error")
                errors["last_name"] = "Only letters";
            }
        }
        //Email
        if (!fields["email"]) {
            formIsValid = false;
            console.log("email has error")
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                console.log("email invalid has error")
                errors["email"] = "Email is not valid";
            }
        }
        if (!fields["password"]) {
            formIsValid = false;
            console.log("password has error")
            errors["password"] = "Cannot be empty";
        }
        if (!fields["confirm"]) {
            formIsValid = false;
            console.log("confirm has error")
            errors["confirm"] = "Cannot be empty";
        }

        if (fields['password'] && fields['confirm']) {
            if (fields['password'] === fields['confirm']) {
                formIsValid = false;
                errors["confirm"] = " Passwords Should Match";
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
            
            <div className="inner">
            <form onSubmit={this.handleClick.bind(this)}>
                <div id="signup">
                    <div className="field  half first">
                        <label for="first_name">First Name
                        <input type="text" id="first_name" onChange={this.handleChange.bind(this, "first_name")} placeholder="First Name" />
                        </label></div>
                    <div className="field half">
                        <label for="last_name">Last Name
                        <input type="text" id="last_name" onChange={this.handleChange.bind(this, "last_name")} placeholder="Last Name" /></label></div>
                    <div className="field ">
                        <label for="email">Email
                        <input type="email" id="signup-email" onChange={this.handleChange.bind(this, "email")} placeholder="Email" /></label></div>
                    <div className="field">
                        <label for="password">Password
                        <input type="password" id="signup-password" onChange={this.handleChange.bind(this, "password")} placeholder="Password" /></label></div>
                    <div className="field ">
                        <label for="confirm">Confirm Password
                        <input type="password" id="confirm" onChange={this.handleChange.bind(this, "confirm")} placeholder="Confirm Password" /></label></div>
                    <div className="field">
                        <input value="Send Message" className="button alt" onClick={(event) => this.handleClick(event)} type="submit" />
                    </div>
                </div>
            </form>
            </div>
        )
    }
}


export default SignUp;
