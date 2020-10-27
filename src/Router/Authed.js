import { Redirect, Route, withRouter } from 'react-router-dom'; 

import React from 'react';
import { connect } from 'react-redux';
import {Loader} from '../components';

class AuthedRoute extends React.Component {
	render() {
		const { component, ...rest } = this.props;
		const Component = component;

		return (
			<Route
				{...rest}
				render={(props) => { 
					if (!localStorage['authedUser']) { 
						if (this.props.redirect) {
							return <Redirect to="/auth" />;
						} else {
							return <div />;
						}
					} else if (!this.props.user.uid) {
						if (this.props.showLoader) {
							return <Loader />;
						} else {
							return <div />;
						}
					} else {
						return <Component {...props} />;
					}
				}}
			/>
		);
	}
}
 
const mapStateToProps = (state) => ({
	user: state.user,
});

export default withRouter(connect(mapStateToProps)(AuthedRoute));