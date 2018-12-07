import React from "react";
import "../ComponentStyles/FinancialStatement.css"

const FinancialStatement = (props) => {
    return (
        <div className="financial-statements">
            <div className ="report-date">
                <h2>{props.reportDate}</h2>
            </div>
            <div className="money">
                <h2>Gross Profit: </h2>
                <h3>{props.grossProfit && props.numberWithCommas(props.grossProfit)}</h3>
            </div>
            <div className="money">
                <h2>Shareholder Equity </h2>
                <h3>{props.shareholderEquity && props.numberWithCommas(props.shareholderEquity)}</h3>
            </div>
            <div className="money">
                <h2>Cost of Revenue: </h2>
                <h3>{props.costOfRevenue && props.numberWithCommas(props.costOfRevenue)}</h3>
            </div>
            <div className="money">
                <h2>Operating Revenue </h2>
                <h3>{props.operatingRevenue && props.numberWithCommas(props.operatingRevenue)}</h3>
            </div>
            <div className="money">
                <h2>Total Revenue: </h2>
                <h3>{props.totalRevenue && props.numberWithCommas(props.totalRevenue)}</h3>
            </div>
            <div className="money">
                <h2>Operating Income: </h2>
                <h3>{props.operatingIncome && props.numberWithCommas(props.operatingIncome)}</h3>
            </div>
            <div className="money">
                <h2>Net Income: </h2>
                <h3>{props.netIncome && props.numberWithCommas(props.netIncome)}</h3>
            </div>
            <div className="money">
                <h2>Total Debt: </h2>
                <h3>{props.totalDebt && props.numberWithCommas(props.totalDebt)}</h3>
            </div>
            <div className="money">
                <h2>Research and Development: </h2>
                <h3>{props.researchAndDevelopment && props.numberWithCommas(props.researchAndDevelopment)}</h3>
            </div>
            <div className="money">
                <h2>Operating Expense: </h2>
                <h3>{props.operatingExpense && props.numberWithCommas(props.operatingExpense)}</h3>
            </div>
            <div className="money">
                <h2>Current Assets: </h2>
                <h3>{props.currentAssets && props.numberWithCommas(props.currentAssets)}</h3>
            </div>
            <div className="money">
                <h2>Total Assets: </h2>
                <h3>{props.totalAssets && props.numberWithCommas(props.totalAssets)}</h3>
            </div>
            <div className="money">
                <h2>Total Liabilities: </h2>
                <h3>{props.totalLiabilities && props.numberWithCommas(props.totalLiabilities)}</h3>
            </div>
            <div className="money">
                <h2>Current Cash: </h2>
                <h3>{props.currentCash && props.numberWithCommas(props.currentCash)}</h3>
            </div>
            <div className="money">
                <h2>Current Debt: </h2>
                <h3>{props.currentDebt && props.numberWithCommas(props.currentDebt)}</h3>
            </div>
            <div className="money">
                <h2>Total Cash: </h2>
                <h3>{props.totalCash && props.numberWithCommas(props.totalCash)}</h3>
            </div>
            <div className="money">
                <h2>Cash Change: </h2>
                <h3>{props.cashChange && props.numberWithCommas(props.cashChange)}</h3>
            </div>
            <div className="money">
                <h2>Cash Flow: </h2>
                <h3>{props.cashFlow && props.numberWithCommas(props.cashFlow)}</h3>
            </div>
        </div>
    )
}

export default FinancialStatement