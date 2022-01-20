import axios from "axios";

const COORDINATES_URL = "https://api.openweathermap.org/geo/1.0/direct?";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const EXCLUDE = "&exclude=minutely,hourly,alerts";


const getCoordinates = async (city, country) => {
    try {
        const response = await axios.get(`${COORDINATES_URL}q=${city}${country ? `,${country}` : ""}&limit=1&appid=${process.env.REACT_APP_API_KEY}`);
        return response.data[0];
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchData = async ({ city, country }) => {
    try {
        const coords = await getCoordinates(city, country);
        const response = await axios.get(`${WEATHER_URL}lat=${coords.lat}&lon=${coords.lon}${EXCLUDE}&appid=${process.env.REACT_APP_API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}