import React, {Component} from "react";
import WeatherInfoPanel from "./WeatherInfoPanel";
import WeatherHistoryPanel from "./WeatherHistoryPanel";

class WeatherPanels extends Component {
    render() {
        return (
            <section className="weather-panels">
                <WeatherInfoPanel/>
                <WeatherHistoryPanel/>
            </section>
        );
    }
}

export default WeatherPanels;