import React from "react";
import "../ComponentStyles/NewCategory.css"

class NewCategory extends React.Component {
    render() {
        return (
            <div>
                {this.props.find === 0 ?
                    <div className="categories">
                        <h2>{this.props.category}:</h2>
                        <a href={this.props.link} target="_blank">
                            <div style={{ backgroundImage: `url(${this.props.image})` }} className="category-img"></div>
                            <p>{this.props.title}</p>
                            <div className="display-source-author">
                                <p>{this.props.source}</p>
                                {this.props.author &&
                                    this.props.author.length < 25 &&
                                    <div className="check-author">
                                        <p className="dashed"> - </p>
                                        <p>{this.props.author}</p>
                                    </div>
                                }

                            </div>
                        </a>
                        <hr />
                    </div>
                    :
                    <div className="categories">
                        <a href={this.props.link} target="_blank">
                            <p>{this.props.title}</p>
                            <div className="display-source-author">
                                <p>{this.props.source}</p>
                                {this.props.author &&
                                    this.props.author.length < 25 &&
                                    <div className="check-author">
                                        <p className = "dashed"> - </p>
                                        <p>{this.props.author}</p>
                                    </div>
                                }
                            </div>
                        </a>
                        <hr />
                    </div>
                }
            </div>
        )

    }
}

export default NewCategory