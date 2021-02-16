import React, {Component} from "react";

class WeatherInfoPanel extends Component {

    render() {
        return (
            <section className="weather-info">
                <h3 className="city-name">City Name</h3>

                <section className="overcast">
                    <img src="" className="overcast-img" alt=""/>
                    <span className="overcast-description">Weather Description</span>
                </section>

                <hr/>

                <section className="current-weather">
                    <span className="humidity">Humidity: X%</span>
                    <span className="curr-temp">Temp: X°F</span>
                    <span className="feels-like">Feels like: X°F</span>
                </section>

                <hr/>

                <section className="temps">
                    <span className="min-temp">Low: X°F</span>
                    <span className="max-temp">High: X°F</span>
                </section>
            </section>
        );
    }
}


export default WeatherInfoPanel;