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

// # this is the shell command that gets executed every time this widget refreshes
// command: 'TZ="Australia/Adelaide" date -j +"%H:%M"'
 
// # the refresh frequency in milliseconds
// refreshFrequency: 25000
 
// # render gets called after the shell command has executed. The command's output
// # is passed in as a string. Whatever it returns will get rendered as HTML.
// render: (output) -> """
//   <h1>Adelaide <br/>#{output}</h1>
// """
 
// # the CSS style for this widget, written using Stylus
// # (http://learnboost.github.io/stylus/)
// style: """
//   background: rgba(#000, 0.35)
//   right: 20px
//   bottom: 520px
//   border-radius: 5px
//   width:150px;
   
//   h1 
//     margin:0
//     font-family: "SF Pro Display"
//     font-size:18px
//     padding:5px 10px
//     color:#dedede
//     text-align:left
// """
//   # background: rgba(#fff, 0.95) url('übersicht-logo.png') no-repeat 50% 20px
//   # background-size: 176px 84px
//   # -webkit-backdrop-filter: blur(20px)
//   # border-radius: 1px
//   # border: 2px solid #fff
//   # box-sizing: border-box
//   # color: #141f33
//   # font-family: Helvetica Neue
//   # font-weight: 300
//   # left: 50%
//   # line-height: 1.5
//   # margin-left: -170px
//   # padding: 120px 20px 20px
//   # top: 10%
//   # width: 340px
//   # text-align: justify
//   #
//   # h1
//   #   font-size: 20px
//   #   font-weight: 300
//   #   margin: 16px 0 8px
//   #
//   # em
//   #   font-weight: 400
//   #   font-style: normal