import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScaleLoader } from 'react-spinners';

/**
* A cancel button component that automatically redirects a user back a page.
* @extends Component
*/
class CancelButton extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const buttonValue = this.props.value ? this.props.value : "Cancel";

        return (
            <div
                className="primary-button cancel-button"
                onClick={
                    this.props.redirect ?
                    this.props.redirect : this.props.onClick
                } >
                {buttonValue}
            </div>
        );
    }
}

/**
* A danger button component for making a permanent action obvious to the user.
* @extends Component
*/
class DangerButton extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const buttonValue = this.props.value ? this.props.value : "Danger";

        return (
            <div
                className="primary-button danger-button"
                {...this.props}>
                {buttonValue}
            </div>
        );
    }
}

/**
* A component that plays a loading animation indicating a procedure is occurring.
* @extends Component
*/
class LoadingButton extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="primary-button loading">
                <ScaleLoader height={12} margin={1} color="white" />
            </div>
        );
    }
}

/**
* A submit button component that will submit whatever form it is placed in
* @extends Component
*/
class SubmitButton extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const buttonValue = this.props.value ? this.props.value : "Submit"

        return (
            <input
                type="submit"
                className="primary-button"
                value={buttonValue}
                {...this.props} />
        );
    }
}

/**
* A static success "button" component indicating a successful submission.
* @extends Component
*/
class SuccessButton extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const buttonValue = this.props.value ? this.props.value : "Success";

        return (
            <div
                className="primary-button success-button"
                {...this.props}>
                {buttonValue}
            </div>
        );
    }
}

export {
    CancelButton,
    DangerButton,
    LoadingButton,
    SubmitButton,
    SuccessButton
};
