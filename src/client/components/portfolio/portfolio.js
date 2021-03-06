import React, { Component } from "react";

import Project from "./project";

/**
* Component list of project components.
* @extends Component
*/
class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    /** Fetch latest list of projects before mounting. */
    componentWillMount() {
        this.props.fetchProjects();
    }

    render() {
        const appearDelay = 150;
        const projects = this.props.indexOnly ?
            this.props.projects.filter(project => project.forIndex).slice(0, 3)
            : this.props.projects;
        const projectElements = projects.map(
            (item, index) => (
                <Project
                    key={item.title}
                    delay={index * appearDelay}
                    focus={this.focusOnItem}
                    {...item} />
            )
        );

        return (
            <ul className="portfolio">
                <div className="container">
                    {projectElements}
                </div>
            </ul>
        );
    }
}

export default Portfolio;
