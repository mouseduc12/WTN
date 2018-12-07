import React from "react"
import axios from "axios"
import New from "./New"
import "../ComponentStyles/News.css"
import NewCategory from "./NewCategory"
import ForexExchange from "./ForexExchange"

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            news: [],
            health: [],
            science: [],
            technology: [],
            sports: [],
            entertainment: [],
            general: [],
            activeStocks: {},
            forexExchange: {},
            cryptoCurrency: {},
            sectorPerformance: {}
        }
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEW_API}`).then(res => {
            console.log(res);
            const news = res.data.articles
            this.setState({
                news
            })
        })
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${process.env.REACT_APP_NEW_API}`).then(res => {
            console.log(res.data.articles)
            const general = res.data.articles.slice(0, 5)
            this.setState({
                general
            })
        })
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.REACT_APP_NEW_API}`).then(res => {
            const entertainment = res.data.articles.slice(0, 5)
            this.setState({
                entertainment
            })
        })
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${process.env.REACT_APP_NEW_API}`).then(res => {
            const health = res.data.articles.slice(0, 5);
            this.setState({
                health
            })
        })
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.REACT_APP_NEW_API}`).then(res => {
            const sports = res.data.articles.slice(0, 5);
            this.setState({
                sports
            })
        })
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${process.env.REACT_APP_NEW_API}`).then(res => {
            const science = res.data.articles.slice(0, 5);
            this.setState({
                science
            })
        })
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.REACT_APP_NEW_API}`).then(res => {
            const technology = res.data.articles.slice(0, 5);
            this.setState({
                technology
            })
        })
        axios.get(`https://vschool-cors.herokuapp.com?url=https://financialmodelingprep.com/api/stock/actives`).then(res => {
            const activeStocks = JSON.parse(res.data.slice(5, -5))
            this.setState({
                activeStocks
            })
        })
        axios.get(`https://vschool-cors.herokuapp.com?url=https://financialmodelingprep.com/api/forex`).then(res => {
            const forexExchange = JSON.parse(res.data.slice(5, -5))
            this.setState({
                forexExchange
            })
        })
        axios.get(`https://vschool-cors.herokuapp.com?url=https://financialmodelingprep.com/api/cryptocurrency`).then(res => {
            const cryptoCurrency = JSON.parse(res.data.slice(5, -5))
            this.setState({
                cryptoCurrency
            })
        })
        axios.get(`https://vschool-cors.herokuapp.com?url=https://financialmodelingprep.com/api/sectors-performance`).then(res => {
            const sectorPerformance = JSON.parse(res.data.slice(5, -5))
            this.setState({
                sectorPerformance
            })
        })
    }

    render() {
        const newActiveStocks = []
        for (let each in this.state.activeStocks) {
            newActiveStocks.push(this.state.activeStocks[each])
        }
        const newForexExchange = []
        for (let each in this.state.forexExchange) {
            newForexExchange.push(this.state.forexExchange[each])
        }
        const newCryptoCurrency = []
        for (let each in this.state.cryptoCurrency) {
            newCryptoCurrency.push(this.state.cryptoCurrency[each])
        }
        const twentiesCryptoCurrency = newCryptoCurrency.slice(0, 20)
        const newSectorPerformance = []

        for (let each in this.state.sectorPerformance) {
            newSectorPerformance.push(this.state.sectorPerformance[each])
        }
        return (
            <div className="business-container">
                <div className="advertising-image">
                </div>
                <div className="business-news">
                    <div>
                        {this.state.news.map((each, id) => <New
                            key={each.source.name + id}
                            id={each.source.name + id}
                            find={id}
                            title={each.title}
                            image={each.urlToImage}
                            link={each.url}
                            source={each.source.name}
                            author={each.author} />
                        )}
                    </div>
                    <div className="stock-sections">
                        <div className="active-stocks">
                            <h2 className="stock-perfomance">ACTIVE STOCKS:</h2>
                            {newActiveStocks.length > 1 && newActiveStocks.map(each => {
                                return (
                                    <div class="individual-stock">
                                        <div className="first-column-stocks">
                                            <h2>{each.Ticker}</h2>
                                            <h3>{each.companyName.length < 25 ? each.companyName : each.companyName.slice(0, 23) + "..."}</h3>
                                        </div>
                                        <div className="second-column-stocks">
                                            <h3>{each.Price}</h3>
                                            {each.ChangesPerc.charAt(0) === "-" ?
                                                <h3 className="stock-down">{parseFloat((each.ChangesPerc) * 100).toFixed(2)}%</h3>
                                                : <h3 className="stock-up">{parseFloat((each.ChangesPerc) * 100).toFixed(2)}%</h3>}
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="like-us">
                                <div className="take-advice">
                                </div>
                                <div className="take-advice-sign-up">
                                    <h3>Follow Us to get live update!</h3>
                                    <input type="email" placeholder="email@" required></input>
                                </div>
                            </div>

                            <div className="forex-exchange-container">
                                <h2 className="exchange-performance">FOREX EXCHANGES:</h2>
                                {newForexExchange.map(each => <ForexExchange {...each} />)}
                            </div>

                            <div className="forex-exchange-container">
                                <h2 className="exchange-performance">CRYPTOCURRENCIES:</h2>
                                {twentiesCryptoCurrency.map(each => <ForexExchange {...each} />)}
                            </div>

                            <div className="sectors">
                                <h2 className="sectors-h2">SECTORS:</h2>
                                {newSectorPerformance.map(each => {
                                    return (
                                        <div className="sectors-performance">
                                            <h2>{each.Name}</h2>
                                            {each.Change.charAt(0) === "-" ? <h3 className="stock-down">{each.Change}</h3> : <h3 className="stock-up">{each.Change}</h3>}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="banner">
                                <div className="banner-img">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="category-news">
                    <div className="general">
                        {this.state.general.map((each, id) => <NewCategory
                            category="GENERAL"
                            key={each.source.id + id}
                            id={each.source.name + id}
                            find={id}
                            title={each.title}
                            image={each.urlToImage}
                            link={each.url}
                            source={each.source.name}
                            author={each.author}
                        />)}
                    </div>
                    <div className="health">
                        {this.state.health.map((each, id) => <NewCategory
                            category="HEALTH"
                            key={each.source.id + id}
                            id={each.source.name + id}
                            title={each.title}
                            find={id}
                            image={each.urlToImage}
                            link={each.url}
                            source={each.source.name}
                            author={each.author}
                        />)}
                    </div>
                    <div className="science">
                        {this.state.science.map((each, id) => <NewCategory
                            category="SCIENCE"
                            key={each.source.id + id}
                            id={each.source.name + id}
                            find={id}
                            title={each.title}
                            image={each.urlToImage}
                            link={each.url}
                            source={each.source.name}
                            author={each.author}
                        />)}
                    </div>
                    <div className="sports">
                        {this.state.sports.map((each, id) => <NewCategory
                            category="SPORTS"
                            key={each.source.id + id}
                            id={each.source.name + id}
                            title={each.title}
                            image={each.urlToImage}
                            find={id}
                            link={each.url}
                            source={each.source.name}
                            author={each.author}
                        />)}
                    </div>
                    <div className="technology">
                        {this.state.technology.map((each, id) => <NewCategory
                            category="TECHNOLOGY"
                            key={each.source.id + id}
                            id={each.source.name + id}
                            title={each.title}
                            image={each.urlToImage}
                            find={id}
                            link={each.url}
                            source={each.source.name}
                            author={each.author}
                        />)}
                    </div>
                    <div className="entertainment">
                        {this.state.entertainment.map((each, id) => <NewCategory
                            category="ENTERTAINMENT"
                            key={each.source.id + id}
                            id={each.source.name + id}
                            title={each.title}
                            find={id}
                            image={each.urlToImage}
                            link={each.url}
                            source={each.source.name}
                            author={each.author}
                        />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default News

