export const transformDate = (UNIX_TIMESTAMP) => { //Transforms Unix timestamp to Local Date

    const unix_timestamp = UNIX_TIMESTAMP;
    const date = new Date(unix_timestamp * 1000).toLocaleDateString();

    const time = `${date}`;

    return time;

}

export const transformDay = (UNIX_TIMESTAMP) => { //Transforms Unix timestamp to a Week day
    const unix_timestamp = UNIX_TIMESTAMP;
    const date = new Date(unix_timestamp * 1000);
    const days = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = date.getDay();

    const dayOfTheWeek = days[day];
    return dayOfTheWeek;
}

export const transformToCelsius = (temp_F) => { //Transforms temp from Kelvin to Celsius
    const temp_c = Math.floor(temp_F - 273.15);
    return temp_c;
}