import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App"
import "./ComponentStyles/styles.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter } from "react-router-dom";
import ProvideStockInfos from "./Components/ProvideStockInfos"
library.add(fab)
library.add(faBars)
library.add(faSearch)
library.add(faSortDown)
library.add(faSortUp)

ReactDOM.render(
    <BrowserRouter>
        <ProvideStockInfos>
            <App />
        </ProvideStockInfos>
    </BrowserRouter>, document.getElementById('root'));

