import React, { Fragment } from "react"
import "../ComponentStyles/CompanyNew.css"

const CompanyNew = (props) => {
    return (
        <Fragment>
            {props.urlToImage &&
                <div>
                    <a href={props.url} className="company-news">
                        <div style={{ backgroundImage: `url(${props.urlToImage})` }} className="new-for-company">
                        </div>
                        <div className="related-company-author">
                            <h2>{props.title}</h2>
                            <div className="company-news-author">
                                {props.source.name.length < 25 && <p>{props.source.name}</p>}
                                {props.author && <p>-</p>}
                                {props.author && props.author.length < 25 && <p>{props.author}</p>}
                            </div>
                        </div>
                    </a>
                    <hr />
                </div>
            }
        </Fragment>
    )
}

export default CompanyNew