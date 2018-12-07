import React from "react"
import "../ComponentStyles/Earning.css"

const Earning = (props) => {
    return (
        <div className="each-earning">
            <div className="each-earning-first">
                <div className ="quarter">
                    <h2>{props.fiscalPeriod}</h2>
                </div>
                <div className ="report-date">
                    <h2>{props.EPSReportDate}</h2>
                </div>
            </div>
            <div className="each-earning-block">
                <h2>Actual EPS:</h2>
                <h3>{props.actualEPS}</h3>
            </div>
            <div className="each-earning-block">
                <h2>Consensus EPS:</h2>
                <h3>{props.consensusEPS}</h3>
            </div>
            <div className="each-earning-block">
                <h2>Estimated EPS:</h2>
                <h3>{props.estimatedEPS}</h3>
            </div>
            <div className="each-earning-block">
                <h2>EPS Surprise Dollar:</h2>
                <h3>{props.EPSSurpriseDollar}</h3>
            </div>
            <div className="each-earning-block">
                <h2>Fiscal EndDate:</h2>
                <h3>{props.fiscalEndDate}</h3>
            </div>
            <div className="each-earning-block">
                <h2>Over a year:</h2>
                <h3>{props.yearAgo}</h3>
            </div>
            <div className="each-earning-block">
                <h2>Percent Changes/Year:</h2>
                {props.yearAgoChangePercent && props.yearAgoChangePercent.toString().charAt(0) === "-" ? <h3 className="stock-down">{parseFloat(props.yearAgoChangePercent).toFixed(2)}</h3> : <h3 className="stock-up">{parseFloat(props.yearAgoChangePercent).toFixed(2)}%</h3>}
            </div>
            <div className="each-earning-block">
                <h2>Estimated Changes Percent:</h2>
                {props.estimatedChangePercent && props.estimatedChangePercent.toString().charAt(0) === "-" ? <h3 className="stock-down">{parseFloat(props.estimatedChangePercent).toFixed(2)}</h3> : <h3 className="stock-up">{parseFloat(props.estimatedChangePercent).toFixed(2)}%</h3>}
            </div>
        </div>
    )
}

export default Earning;