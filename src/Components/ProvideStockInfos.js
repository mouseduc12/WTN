import React from "react";
import { withRouter } from "react-router-dom"


const { Consumer, Provider } = React.createContext();

class ProvideStockInfos extends React.Component{
    constructor(){
        super();
        this.state = {
            stockSymbol: "",
        }
    }
    handleChange = (e) =>{
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push(`/stock/${this.state.stockSymbol}`)
    }

    render(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; 
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '/' + dd + '/' + yyyy;
        return(
            <Provider value = {{
                stockSymbol: this.state.stockSymbol,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                today: today
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withStockInfo = C => props => (
    <Consumer>
        {
            value => <C {...props} {...value} />
        }
    </Consumer>
)

export default withRouter(ProvideStockInfos)