import React from "react"
import "../ComponentStyles/Nav.css"
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withStockInfo } from "./ProvideStockInfos"
import { Link } from "react-router-dom"


const Nav = (props) => {
    return (
        <div className="nav-bars">
            <div className="more">
                <p onClick={props.openModal}><FontAwesomeIcon icon="bars"/></p>
                <div className="brand">
                    <Link to = "/"><h2>WTN</h2></Link>
                </div>
            </div>
            <form className="search" onSubmit = {props.handleSubmit}>
                <input placeholder="Stock Symbols" name = "stockSymbol" value = {props.stockSymbol} onChange = {props.handleChange}/>
                <button><FontAwesomeIcon icon="search"/></button>
            </form>
        </div>
    )
}

export default withRouter(withStockInfo(Nav))
// onClick = {() => this.props.match.history.push()}