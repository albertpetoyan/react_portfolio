import React, { Component } from 'react';
import Form from './Form';


class Weather extends Component {
    
    render() {
        const {onCurrent,onName,temp,feels_like,city,country,weather,wind,icon} = this.props
        return (
            <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-6">
                        <img src="img/cloudy.png" className="img-fluid rounded-start" alt="..."/>
                        <div className="overlay">
                            {
                                temp ?
                                <p className="overlay__text">
                                {temp} C
                                </p> : 
                                null
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <div className="icon">
                                {
                                icon ?
                                    <img 
                                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                        className="img-fluid rounded-start" alt="..."
                                    /> : null
                                }
                            </div>
                            <Form onName={onName}/>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button 
                                    className="btn btn-primary" 
                                    type="button"
                                    onClick={onCurrent}
                                >
                                    Get Your Location Weather
                                </button>
                            </div>
                            <div className="list__block">
                                <p className="list">
                                    <span>Feel Like</span>
                                    <span>{feels_like} C</span>
                                </p>
                                <p className="list">
                                    <span>City</span>
                                    <span>{city}</span>
                                </p>
                                <p className="list">
                                    <span>Country</span>
                                    <span>{country}</span>
                                </p>
                                <p className="list">
                                    <span>Wind Speed</span>
                                    <span>{wind}</span>
                                </p>    
                                <p className="list">
                                    <span>Weather</span>
                                    <span>{weather}</span>
                                </p> 
                            </div>  
                        </div>
                    </div>
                  </div>
                </div>
        );
    }
}

export default Weather;
