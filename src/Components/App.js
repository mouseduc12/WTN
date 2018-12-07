import React, { Component } from 'react';
import Header from "./Header"
import { Switch, Route } from "react-router-dom";
import News from "./News"
import Footer from "./Footer"
import StockInformation from "./StockInformation"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path = "/" component = {News}/>
          <Route exact path = "/stock/:id" component = {StockInformation} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
