import React, { component } from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1> OOOOPS. That is not good </h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;