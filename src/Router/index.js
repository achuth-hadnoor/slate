import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Authed from './Authed'
import Home from '../pages/Home';
import { connect } from 'react-redux';
import Auth from '../pages/Auth';


class AppRouter extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    {/* <Authed path="/" exact component={Home} redirect /> */}
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" component={Auth} />
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(AppRouter);