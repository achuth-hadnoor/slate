import React from 'react'
import { Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import Authed from './Authed'
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Unauthed from './Unauthed';
import About from '../pages/about';


class AppRouter extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Unauthed path="/about" component={About} />
                    <Unauthed path="/auth" component={Auth} />
                    <Authed path="/" exact component={Home} />
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(AppRouter);