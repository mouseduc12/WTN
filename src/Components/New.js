import React, { Fragment } from "react";
import "../ComponentStyles/New.css"

const New = (props) => {
    const generateFirstImage = () => {
        if (props.find === 0) {
            return "first-headline"
        } else {
            return "another-headlines"
        }
    }
    return (
        <Fragment>
            {props.image &&
                <div className={generateFirstImage()}>
                    <a href={props.link} target="_blank">
                        <div className="inside-headlines">
                            <div style={{ backgroundImage: `url(${props.image})` }} className="headline-content-images">
                            </div>
                            <div className="title-author">
                                <h3>{props.title}</h3>
                                <div className="source-author">
                                    <p>{props.source}</p>
                                    {props.author &&
                                        props.author.length < 25 &&
                                        <div className = "author-tags">
                                            <p> - </p>
                                            <p>{props.author}</p>
                                        </div>

                                    }
                                </div>
                            </div>
                        </div>
                    </a>
                    <hr />
                </div>
            }
        </Fragment>
    )
}

export default New;