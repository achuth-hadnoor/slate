import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUserAction } from '../Store/Actions/authActions'
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

    submitData = () => { 
        this.props.login()
    }

    render() { 
        let isSuccess, message;
        return (
            <div>
                {!isSuccess ? <div>{message}</div> : <Redirect to='/' />} 
                <button onClick={this.submitData}>Sign in with google</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    
    return ({
    user: state.user
})}

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(loginUserAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
