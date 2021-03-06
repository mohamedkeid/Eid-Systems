import React, { Component } from "react";
import { Field } from "redux-form";
import { Notification } from 'react-notification';

import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons";
import renderTextField from "../../ui/render_text_field";

/**
* Form component for updating information in the "home" or "index" page
* @extends Component
*/
class IndexForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        // Bind this to functions
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTextField = renderTextField.bind(this);
        this.toggleNotification = this.toggleNotification.bind(this);
    }

    /** Dispatch redux action to update page status and possibly init form. */
    componentDidMount() {
        this.props.updateAdminPage("Index");

        const index = this.props.index;
        if (index) {
            this.props.initialize(index);
        } else {
            this.props.showSite("index");
        }
    }

    handleSubmit(data) {
        if (typeof(data.left.keywords) === "string") {
            data.left.keywords = data.left.keywords.split(",");
        }

        if (typeof(data.right.keywords) === "string") {
            data.right.keywords = data.right.keywords.split(",");
        }

        this.props.updateSite("index", {data})
            .then(() => {
                this.toggleNotification();
            })
            .catch(response => {
                console.log(response);
            });
    }

    toggleNotification() {
        this.setState({
          notificationIsActive: !this.state.notificationIsActive
        });
    }

    render() {
        const savedButton = <SuccessButton value="Saved!" />
        const saveButton = <SubmitButton value="Save" />

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="head">
                    Edit Index Page
                </div>
                <div className="inputs">
                    <Field
                        name="left[title]"
                        title="Left Title"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="left[keywords]"
                        title="Left Keywords (delimited by ',')"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="right[title]"
                        title="Right Title"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="right[keywords]"
                        title="Right Keywords (delimited by ',')"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    {this.state.hasSaved ? savedButton : saveButton}
                </div>
                <Notification
                    dismissAfter={5000}
                    isActive={this.state.notificationIsActive}
                    message="The index page was successfully saved.."
                    action="Dismiss"
                    title="Success!"
                    onDismiss={this.toggleNotification.bind(this)}
                    onClick={() =>  this.setState({
                        notificationIsActive: false
                    })}
                />
            </form>
        );
    }
}

export default IndexForm;
