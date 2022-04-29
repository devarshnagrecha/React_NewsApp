import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Clock from './components/Clock';

export default class App extends Component {

  pageSize = 15;
  country = "in";
  apiKey = "27421effc3054b1bbb7d2ca86e8c147a";


  state = {
    progress: 0,
    country: "in"
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }


  render() {
    return (
      <>
        <div className="bg">
          <Router>
            <NavBar/>
            <Clock/>
            <LoadingBar
              height={5}
              color='#f11946'
              progress={this.state.progress}
            />
            <div className="container">
              <Routes>
                <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.country} category="business" colorBar="#00640080" />}>
                </Route>
                <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" colorBar="#ff123280" />}>
                </Route>
                <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.country} category="general" colorBar="#0b0b0b80" />}>
                </Route>
                <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.country} category="health" colorBar="#0000ff80" />}>
                </Route>
                <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={this.country} category="science" colorBar="#7f00ff80" />}>
                </Route>
                <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.country} category="sports" colorBar="#ff69b4cc" />}>
                </Route>
                <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category="technology" colorBar="#ff780080" />}>
                </Route>
              </Routes>
            </div>
          </Router>
        </div>
      </>
    )
  }
}

