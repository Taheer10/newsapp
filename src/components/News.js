import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=55011ec0f7ad45368a7355dcdf555ef6&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalResults : parsedData.totalResults});
  }
   
  OnPreviousClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=55011ec0f7ad45368a7355dcdf555ef6&page= ${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
      this.setState({
        page : this.state.page-1,
        articles: parsedData.articles 
        
      })
    
  }

  OnNextClick = async()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=55011ec0f7ad45368a7355dcdf555ef6&page= ${this.state.page + 1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json();
  
    this.setState({
      page : this.state.page+1,
      articles: parsedData.articles 
      
    })
  }

  }


 

  render() {
    return (
      <div className="container my-3 ">
        <h1>Jhapa News- Top Headlines</h1>

        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : " "}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
        
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.OnPreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark mx-2" onClick={this.OnNextClick}>Next &rarr;</button>


        </div>
      </div>
    );
  }
}

export default News;
