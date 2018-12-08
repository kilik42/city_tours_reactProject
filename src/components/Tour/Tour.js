import React, { Component} from 'react';
import './Tour.scss';

export class Tour  extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const {city, img, name, info}= this.props.tour;
    return (
      <article className="tour">
       <div className="img-container">
          <img  src={img} alt=""/>
          <span className="close-btn">
           <i className="fas fa-window-close"/>
          </span>
       </div>
       <div className="tour-info">
       <h3> {city}</h3>
       <h4>{name}</h4>
       <h5> info{""}
        <i className="fas fa-caret-square-down"/>
       </h5>

       <p>{info}</p>
       </div>

       </article>
    );
  }
}



export default Tour ;
