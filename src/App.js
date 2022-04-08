import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15;
  apikey = process.env.REACT_APP_NEWS_API;

   state={
     progress : 0
   }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
          <Switch>
            <Route exact path="business">
             
              <News setProgress={this.setProgress}
              apikey={this.apikey}
                key="business"
                pageSize={this.pageSize}
                country="ca"
                category="business"
              />
            </Route>
            <Route exact path="/">
              {" "}
              <News setProgress={this.setProgress}
              apikey={this.apikey}
                key="general"
                pageSize={this.pageSize}
                country="ca"
                category="general"
              />{" "}
            </Route>
            <Route exact path="entertainment">
              {" "}
              <News setProgress={this.setProgress}
              apikey={this.apikey}
                key="entertainment"
                pageSize={this.pageSize}
                country="ca"
                category="entertainment"
              />{" "}
            </Route>
            {/* <Route exact path="general">
              {" "}
              <News setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="ca"
                category="general"
              />{" "}
            </Route> */}
            <Route exact path="health">
              {" "}
              <News setProgress={this.setProgress} 
           apikey={this.apikey}
                key="health"
                pageSize={this.pageSize}
                country="ca"
                category="health"
              />{" "}
            </Route>
            <Route exact path="science">
              {" "}
              <News setProgress={this.setProgress}
              apikey={this.apikey}
                key="science"
                pageSize={this.pageSize}
                country="ca"
                category="science"
              />{" "}
            </Route>
            <Route exact path="technology">
              {" "}
              <News setProgress={this.setProgress}
             apikey={this.apikey}
                key="technology"
                pageSize={this.pageSize}
                country="ca"
                category="technology"
              />{" "}
            </Route>
            <Route exact path="sports">
              {" "}
              <News setProgress={this.setProgress}
              apikey={this.props.apikey}
                key="sports"
                pageSize={this.pageSize}
                country="ca"
                category="sports"
              />{" "}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
