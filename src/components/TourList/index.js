import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourData} from '../tourData';

export class TourList extends Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    tours: tourData
  };

  removeTour  = id =>{
    console.log(id);
    const {tours} = this.state;
    const sortedTours = tours.filter(tour=>tour.id !==id);
    //stopped at 1:40:54
    this.setState({
      tours:sortedTours
    });
  };
  render() {
    //console.log(this.state.tours);
    const {tours} = this.state;


    return (
      <section className="tourlist">
        {tours.map(tour =>{
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
          )
        })}
      </section>
    );
  }
}

export default TourList;
