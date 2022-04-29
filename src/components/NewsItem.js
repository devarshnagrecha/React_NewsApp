import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', paddingTop: '10px', paddingRight: '5px'}}>
                        <span className="badge rounded-pill bg-danger" >
                            {source.name}
                        </span>
                    </div>
                    <img className="card-img-top" src={imageUrl ? imageUrl : "../images/noimg2.jpg"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <br />
                        <p className="card-text">{description}</p>
                        <hr />
                        <p className="card-text para"><small className="para">By {author ? author : "UNKNOWN"} on {new Date(date).toGMTString()}</small></p>
                        <hr />
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
