import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class New extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general',
        colorBar: 'black'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        colorBar: PropTypes.string
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {

        super(props);
        this.state = {

            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }

        if (this.props.category === "general") {
            document.title = "NewsMafia | Top headlines"
        }

        else {
            document.title = `${this.capitalizeFirstLetter(this.props.category)} | NewsMafia`;
        }

    }

    async updateNews() {

        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })

    };

    render() {
        return (
            <>

                {/*<button className="btn btn-primary my-3" onClick={this.props.onNameChange()}>Change country</button>*/}

                <div className="container my-3">
                    <div className="devarsh-header">
                        <h1 className="text-center devarsh">NewsMafia</h1>
                        <h3 style = {{fontSize: '25px'}}className="text-center devarsh">See the World Closer</h3>
                    </div>

                    <div >
                        <br />
                        <br />
                        <div className="devarsh-subheader" id="change" style={{ textTransform: 'capitalize', color: 'whitesmoke', backgroundColor: this.props.colorBar }}>
                            <hr />
                            <h2 className="text-center devarsh-text" >{this.props.category} headlines</h2>
                            <hr />
                        </div>
                    </div>

                    {this.state.loading && <Spinner />}
                    <br />
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">


                        <div className="row">
                            {this.state.articles.map((element) => {

                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>


            </>
        )
    }
}