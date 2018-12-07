import React from "react";
import axios from "axios";
import Nav from "./Nav"
import StockList from "./StockList"
import "../ComponentStyles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from "react-modal"

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            symbols: "",
            stocksData: [],
            largestData: [],
            modalIsOpen: false
        }
    }
    componentDidMount() {
        axios.get(`https://marketdata.websol.barchart.com/getQuote.json?apikey=${process.env.REACT_APP_STOCK_API}&symbols=AAPL%2CGOOG%2CNVDA%2CMCD%2CFB%2CNFLX%2CBA%2CLMT%2CAMZN%2CADBE%2CBABA%2CBAC%2CHD%2CHUM%2CNKE%2CSHOP%2CSPOT%2CTSLA%2CWYNN%2CWMT`)
            .then(res => {
                const stocksData = res.data.results
                this.setState({
                    stocksData
                })
            })
        axios.get(`https://vschool-cors.herokuapp.com?url=https://financialmodelingprep.com/api/majors-indexes`).then(res => {
            const largestData = JSON.parse(res.data.slice(5, -5))
            this.setState(prevState => {
                return {
                    largestData
                }
            })

        })
    }
    openModal = () => {
        console.log("I'm working")
        this.setState({
            modalIsOpen: true
        })
    }
    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        console.log(this.state.modalIsOpen)
        let dataArray = []
        for (let each in this.state.largestData) {
            dataArray.push(this.state.largestData[each])
        }
        const newDataArray = dataArray.slice(0, 4)
        return (
            <div>
                <Nav openModal={this.openModal} />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="modal">
                    <button onClick={this.closeModal}>X</button>
                    <div className="sign-up">
                        <h2>SIGN UP</h2>
                        <h2>LOG IN</h2>
                        <h2>MARKET</h2>
                    </div>
                </Modal>
                <div className="symbols-container">
                    <div className="stock-symbols">
                        {this.state.stocksData.map(each => <StockList
                            netChange={each.netChange}
                            percentChange={each.percentChange}
                            symbol={each.symbol}
                            lastPrice={each.lastPrice} />)}
                    </div>
                </div>
                <div className="market-data">
                    <div class="big-datas">
                        {newDataArray.length > 1 && newDataArray.map(each =>
                            <div className="big-stock-overviews">
                                <div className="ticker-names">
                                    <h1>{each.Name} -</h1>
                                    <h2>{each.Ticker}</h2>
                                </div>
                                <div className="ticker-prices">
                                    {each.Changes.toString().charAt(0) === "-" ? <h3><FontAwesomeIcon icon="sort-down" className="stock-down" /></h3> : <h3><FontAwesomeIcon icon="sort-up" className="stock-up" /></h3>}
                                    <h2>{each.Price}</h2>
                                    <h2>{each.Changes}</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
