import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  transformDate,
  transformToCelsius,
  transformDay,
} from "../utils/helpers";

const Weather = ({ forecast, city, country }) => {
  return (
    <Row
      as="section"
      className=" weather-card mt-4 mx-1 border border-dark border-2"
    >
      <Col as="article" md={7} className="sm-mb-3 left-weather-card p-3 ">
        <div>
          <p className="display-3 text-center m-0">
            {city}
            {country ? ", " + country : ""}
          </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img
            src={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}
            alt=""
            width="120px"
            height="120px"
          />
          <p className="h2">{forecast.current.weather[0].description}</p>
        </div>
        <div>
          <p className="display-2 font-weight-bold text-center">
            {transformToCelsius(forecast.current.temp)}
            <sup>°</sup>C
          </p>
        </div>
        <div className="display-5 text-center">
          {transformDay(forecast.current.dt)}
        </div>
        <div className="text-center mt-2">
          <p className="fs-4 font-weight-bolder">
            {transformDate(forecast.current.dt)}
          </p>
        </div>
      </Col>
      <Col md={5} className="mt-3 p-3">
        <div>
          <p className="text-center">{`Humidity: ${forecast.current.humidity}%`}</p>
        </div>
        <div>
          <p className="text-center">
            {`Feels like: ${transformToCelsius(forecast.current.feels_like)}`}
            <sup>°</sup>C
          </p>
        </div>
        <div>
          <p className="text-center">{`Pressure: ${forecast.current.pressure} mb`}</p>
        </div>
        <div>
          <p className="text-center">{`Visibility: ${forecast.current.visibility} meters`}</p>
        </div>
        <div>
          <p className="text-center">{`Wind speed: ${forecast.current.wind_speed} knots`}</p>
        </div>
        <div className="d-flex justify-content-center flex-wrap py-3">
          {forecast.daily.slice(1, 7).map((day) => (
            <div key={day.dt} className="d-flex flex-column align-items-center">
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt=""
              />
              <span>{transformDay(day.dt).substring(0, 3)}</span>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Weather;
