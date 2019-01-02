var moment = require('moment-timezone');
import { styled, css } from "uebersicht"

const cities = [
  ["Adelaide", "Australia/Adelaide"],
  ["New Delhi", "Asia/Calcutta"],
  ["Doha", "Asia/Qatar"],
  ["Jerusalem", "Asia/Jerusalem"],
  ["Cape Town", "Africa/Johannesburg"],
  ["Boston", "America/New_York"],
  ["Bogota", "America/Bogota"],
  ["Salt Lake City | Denver", "America/Denver"],
  ["San Diego", "America/Los_Angeles"]
]

export const command = (dispatch) =>
  dispatch({ type: 'FETCH_SUCCEEDED', data: true });

export const updateState = (event, previousState) => {
  if (event.error) {
    return { ...previousState, warning: `We got an error: ${event.error}` };
  }
  return { cities: cities };
}
export const refreshFrequency = 60000;

export const className = {
  bottom: "20px",
  right: "20px",
  color: '#fff',
  fontFamily: "SF Pro Display"
}

const CityBox = styled("div")(props => ({
  background: "rgba(0,0,0, 0.35)",
  borderRadius: "5px",
  width:"150px",
  padding: "10px",
  margin: "0 0 10px"
}))

const CityName = css`
  font-size:18px;
  margin:0;
`
const CityTime = css`
  font-size:16px;
  margin:0;
`

const City = ({City, TimeZone}) => {
  var Time = moment().tz(TimeZone).format('LT');
  return <CityBox><h1 className={CityName}>{City}</h1><p className={CityTime}>{Time}</p></CityBox>
}



export const initialState = { cities: cities }

export const render = ({output, error}) => {
  return error ? (
    <div>Something went wrong: <strong>{String(error)}</strong></div>
  ) : (
    <div>
      {cities.map((cityObject) => (

          <City TimeZone={cityObject[1]} City={cityObject[0]} key={cityObject[0]}/>
        ))}
    </div>
  );
}

