import React from "react";
import "../ComponentStyles/StockList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StockList = (props) => {
    const generateFont = () => {
        let splitIt = props.percentChange.toString().split("")
        if (splitIt[0] === "-") {
            return <span  className="stock-down"><FontAwesomeIcon icon="sort-down" /></span>
        } else {
            return <span className="stock-up"><FontAwesomeIcon icon="sort-up"  /></span>
        }
    }
    const plusOrNot = () => {
        let checkMinus = props.percentChange.toString().split("")
        if (checkMinus[0] === "-") {
            return ""
        } else {
            return "+"
        }
    }
    return (
        <div className="symbol">
            <div className = "full-size">
                {generateFont()}
                <h3>{props.symbol}</h3>
                <h3>{props.lastPrice}</h3>
                <h3>{plusOrNot()}{props.netChange.toFixed(2)}</h3>
                <h3>({plusOrNot()}{props.percentChange})</h3>
            </div>
        </div>
    )
}

export default StockList;