import React from "react";
import "../ComponentStyles/ForexExchange.css"

const ForexExchange = (props) => {
    return (
        <div className="forex-exchange">
            <div className="first-column-exchange">
                <h2>{props.Ticker}</h2>
                {props.name && props.name.length > 20 ? <h3>{props.name.slice(0, 20) + "..."}</h3> : <h3>{props.name}</h3>}
                {props.Name && props.Name.length > 20 ? <h3>{props.Name.slice(0, 20) + "..."}</h3> : <h3>{props.Name}</h3>}
            </div>
            <div className="second-column-exchange">
                <h3>{parseFloat(props.Price)}</h3>
                {props.Changes.toString().charAt(0) === "-" ? <h3 className="stock-down">{parseFloat(props.Changes)}%</h3> :  <h3 className="stock-up">{parseFloat(props.Changes)}%</h3>}
            </div>
        </div>
    )
}

export default ForexExchange
