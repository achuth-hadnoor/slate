import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUserAction, registerUserAction } from '../Store/Actions/authActions'
import { Redirect } from 'react-router-dom'
export class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            islogging: false,
            email: '',
            password: '',
        }
    }

    onChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    submitData = (e) => {
        e.preventDefault();
        const { login } = this.props;
        let email = e.target.email.value;
        let password = e.target.password.value;

        const data = {
            email, password
        };
        // login(data);
        console.log(this.props);
        this.props.login(data)
    }

    render() {
        let { email, password } = this.state;
        let isSuccess, message;
        return (
            <div>
                {!isSuccess ? <div>{message}</div> : <Redirect to='/' />}
                <form onSubmit={this.submitData}>
                    <input type="email" name="email" valie={email} onChange={this.onChange} required />
                    <input type="password" name="password" value={password} onChange={this.onChange} required />
                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(registerUserAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
