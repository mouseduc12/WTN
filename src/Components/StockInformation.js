import React, { Fragment } from "react"
import axios from "axios"
import { withStockInfo } from "./ProvideStockInfos"
import CompanyNew from "./CompanyNew"
import "../ComponentStyles/StockInformation.css"
import FinancialStatement from "./FinancialStatement"
import Earning from "./Earning"
import Chart from "./Chart"

class StockInformation extends React.Component {
    constructor() {
        super();
        this.state = {
            company: {},
            keyStats: {},
            logo: {},
            news: [],
            chart: [],
            quote: {},
            earnings: [],
            financialQuarterly: [],
            financialAnually: [],
            checkFinance: false,
            checkInfo: true,
            checkQuarter: true
        }
    }
    componentDidMount() {
        axios.get(`https://api.iextrading.com/1.0/stock/${this.props.stockSymbol}/company`).then(res => {
            console.log(res.data)
            console.log(res)
            const company = res.data
            this.setState({
                company
            })
        })
        axios.get(`https://api.iextrading.com/1.0/stock/${this.props.stockSymbol}/stats`).then(res => {
            const keyStats = res.data
            this.setState({
                keyStats
            })
        })
        axios.get(`https://api.iextrading.com/1.0/stock/${this.props.stockSymbol}/logo`).then(res => {
            const logo = res.data
            this.setState({
                logo
            })
        })
        axios.get(`https://api.iextrading.com/1.0/stock/${this.props.stockSymbol}/batch?types=quote,news,chart&range=1m&last=10`).then(res => {
            const chart = res.data.chart
            const quote = res.data.quote
            this.setState({
                chart,
                quote
            })
        })
        axios.get(`https://newsapi.org/v2/everything?q=${this.props.stockSymbol}&from=${this.props.today}&to=${this.props.today}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEW_API}`).then(res => {
            const news = res.data.articles
            this.setState({
                news
            })
        })
        axios.get(`https://api.iextrading.com/1.0/stock/${this.props.stockSymbol}/earnings`).then(res => {
            const earnings = res.data.earnings
            this.setState({
                earnings
            })
        })
        axios.get(`https://api.iextrading.com/1.0/stock/${this.props.stockSymbol}/financials`).then(res => {
            const financialQuarterly = res.data.financials
            this.setState({
                financialQuarterly
            })
        })
        axios.get(`https://api.iextrading.com/1.0/stock/${this.props.stockSymbol}/financials?period=annual`).then(res => {
            const financialAnually = res.data.financials
            this.setState({
                financialAnually
            })
        })
    }
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                checkFinance: true,
                checkInfo:false
            }
        })
    }
    handleClickCompany = () => {
        this.setState(prevState => {
            return {
                checkFinance:false,
                checkInfo:true,
            }
        })
    }
    handleCheckAnnual = () => {
        this.setState({
            checkQuarter: false
        })
    }
    handleCheckQuarter = () => {
        this.setState({
            checkQuarter:true
        })
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    render() {
        console.log(this.state.chart)
        return (
            <div className="big-container">
                <div className="toogle-company">
                    <button onClick={this.handleClickCompany}>Company Infos</button>
                    <button onClick={this.handleClick}>Financial Statement</button>
                </div>
                {this.state.checkFinance === false ?
                    <Fragment>
                        <div className="company-container">
                            <div className="company-info">
                                <div style={{ backgroundImage: `url(${this.state.logo.url})` }} className="company-logo"></div>
                                <div className="company-quotes">
                                    <h2>Company: {this.state.company.companyName}</h2>
                                    <h3>Price: {this.state.quote.close}</h3>
                                    <h3>CEO: {this.state.company.CEO}</h3>
                                    <h3>Summary: {this.state.company.description}</h3>
                                    <h3>Industry: {this.state.company.industry}</h3>
                                    <h3>Sector: {this.state.company.sector}</h3>
                                </div>
                            </div>
                            <div className="company-stats">
                                <div className="stat-1">
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>EBITDA: </h3>
                                            <p>{this.state.keyStats.EBITDA && this.numberWithCommas(this.state.keyStats.EBITDA)}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Consensus EPS: </h3>
                                            <p>{this.state.keyStats.consensusEPS}</p>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Cash:</h3>
                                            <p>{this.state.keyStats.cash && this.numberWithCommas(this.state.keyStats.cash)}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Beta: </h3>
                                            <p>{this.state.keyStats.beta}</p>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Debt:</h3>
                                            <p>{this.state.keyStats.debt  && this.numberWithCommas(this.state.keyStats.debt)}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Institution Percent:</h3>
                                            <p>{this.state.institutionPercent ? this.state.institutionPercent : 0}%</p>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Lastest EPS: </h3>
                                            <p>{this.state.keyStats.latestEPS}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Dividend Yield: </h3>
                                            <p>{parseFloat(this.state.keyStats.dividendYield).toFixed(2)}%</p>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Dividend Rate: </h3>
                                            <p>{parseFloat(this.state.keyStats.dividendRate).toFixed(2)}%</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>ExDividend Date: </h3>
                                            {this.state.keyStats.exDividendDate && <p>{this.state.keyStats.exDividendDate.slice(0, 11)}</p>}
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>GrossProfit: </h3>
                                            <p>{this.state.keyStats.grossProfit  && this.numberWithCommas(this.state.keyStats.grossProfit)}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Market Cap: </h3>
                                            <p>{this.state.keyStats.marketcap  && this.numberWithCommas(this.state.keyStats.marketcap)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-2">
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Price/Book: </h3>
                                            <p>{this.state.keyStats.priceToBook}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Price/Sales:</h3>
                                            <p>{this.state.keyStats.priceToSales && parseFloat(this.state.keyStats.priceToSales.toFixed(2))}</p>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Profit/Margin: </h3>
                                            <p>{this.state.keyStats.profitMargin}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Return On Assets: </h3>
                                            <p>{this.state.keyStats.returnOnAssets}</p>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Return On Equity: </h3>
                                            <p>{this.state.keyStats.returnOnEquity}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Revenue: </h3>
                                            <p> {this.state.keyStats.revenue  && this.numberWithCommas(this.state.keyStats.revenue)}</p>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Shares Outstanding:</h3>
                                            <p>{this.state.keyStats.sharesOutstanding  && this.numberWithCommas(this.state.keyStats.sharesOutstanding)}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>52 week/high: </h3>
                                            <p> {this.state.keyStats.week52high}</p>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>52 week/low: </h3>
                                            <p> {this.state.keyStats.week52low}</p>
                                        </div>
                                        <div className="each-stat">
                                            <h3>Change Percent/1yr: </h3>
                                            {this.state.keyStats.year1ChangePercent && this.state.keyStats.year1ChangePercent.toString().charAt(0) === "-" ? <p className="stock-down">{parseFloat(this.state.keyStats.year1ChangePercent).toFixed(3)}</p> : <p className="stock-up">{parseFloat(this.state.keyStats.year1ChangePercent).toFixed(3)}%</p>}
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <div className="each-stat">
                                            <h3>Change Percent/2yr: </h3>
                                            {this.state.keyStats.year1ChangePercent && this.state.keyStats.year2ChangePercent.toString().charAt(0) === "-" ? <p className="stock-down">{parseFloat(this.state.keyStats.year2ChangePercent).toFixed(3)}</p> : <p className="stock-up">{parseFloat(this.state.keyStats.year2ChangePercent).toFixed(3)}%</p>}
                                        </div>
                                        <div className="each-stat">
                                            <h3>Change Percent/5yr: </h3>
                                            {this.state.keyStats.year1ChangePercent && this.state.keyStats.year5ChangePercent.toString().charAt(0) === "-" ? <p className="stock-down">{parseFloat(this.state.keyStats.year5ChangePercent).toFixed(3)}</p> : <p className="stock-up">{parseFloat(this.state.keyStats.year5ChangePercent).toFixed(3)}%</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="chart">
                                    <Chart chart = {this.state.chart}/>
                                </div>
                            </div>
                            <h2 style={{ textAlign: "center", color: "#2077B6", gridColumn: "1/-1", marginTop: 40 }}>Earnings:</h2>
                            <div className="earning">
                                {this.state.earnings.map(each => <Earning {...each} />)}
                            </div>
                        </div>
                        <div className="company-related-news">
                            {this.state.news.length > 1 && this.state.news.slice(0, 10).map((each, id) => <CompanyNew {...each} numberToCheck={id} />)}
                        </div>
                    </Fragment>
                    :
                    <Fragment>
                        <div className="check-each-quater">
                            <button onClick={this.handleCheckQuarter}>Quarterly</button>
                            <button onClick={this.handleCheckAnnual}>Annually</button>
                        </div>
                        <div className="financial-holds">
                            {this.state.checkQuarter ? this.state.financialQuarterly.map(each => <FinancialStatement {...each} numberWithCommas = {this.numberWithCommas}/>) 
                            : 
                            this.state.financialAnually.map(each => <FinancialStatement {...each} numberWithCommas = {this.numberWithCommas}/>)}
                        </div>
                    </Fragment>
                }
            </div>
        )
    }
}

export default withStockInfo(StockInformation);