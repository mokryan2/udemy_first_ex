import React, { Component } from "react";

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: " "
    };

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    };

    render() {
        if (this.state.hasError) {
            return <h1>Uh oh...something went wrong...</h1>
        }
        else {
            return this.props.children;
        }
    };

};

export default ErrorBoundary;

// This component is considered to be a "Higher Order Component". While this is super useful, you shouldn't be using these all willy-nilly.
// In the reality of actual deployment, you should only use this for code you know you can ABSOLUTELY NOT CONTROL.