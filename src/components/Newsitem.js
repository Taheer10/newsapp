import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsUrl} = this.props;
    return(
    <div>
    <div className="card" style={{width: '18rem'}}>
        <img src={!imageurl?"https://www.cnet.com/a/img/resize/5b3ffceb6bd726d27c8ecce0c0bbe7c9ee75ade5/hub/2022/03/09/f4b25673-d2c9-4a0e-8f9f-40e45cfc8bdf/mazda-cx-60-phev-suv-122.jpg?auto=webp&fit=crop&height=675&width=1200":imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
          {description}...
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
    )
  }
}

export default Newsitem;
