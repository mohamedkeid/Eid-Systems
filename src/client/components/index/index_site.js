import React, { Component } from "react"
import { Link } from "react-router-dom"
import Body from "../ui/body"
import IndexBillboard from "./index_billboard"
import PortfolioContainer from "../../containers/portfolio_container"

/**
* Component used by react router to render the "Index" page
* @extends Component
*/
class IndexSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("Index")
    }

    render() {
        return (
            <div className="index-site">
                <IndexBillboard data={this.props.index} />
                <Body title='SOME OF MY LATEST WORK'>
                    <PortfolioContainer indexOnly={true}/>
                    <Link to="/portfolio" className="see-more">
                        See More
                    </Link>
                </Body>
            </div>
        )
    }
}

export default IndexSite
