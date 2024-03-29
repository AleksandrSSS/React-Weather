//
import "../../Styles/weather.css";

export default function WeatherForcastItem({ item, itemHourly }) {
  // console.log("itemHourly: ", itemHourly);
  let weekday = ["сб", "нд"];
  // console.log(weekday);
  //

  return (
    <div className="forcast">
      {item.map((itm, idx) => (
        <div key={idx} className="forcast_item">
          <div className="forcast_date ">
            <span
              className={
                weekday.some(
                  (item) =>
                    item ==
                    new Date(itm.dt * 1000).toLocaleDateString("uk-UA", {
                      weekday: "short",
                    }),
                )
                  ? "locale_date-day weekend"
                  : "locale_date-day"
              }
            >
              {weekday.idx}
              {new Date(itm.dt * 1000).toLocaleDateString("uk-UA", {
                weekday: "short",
              })}
            </span>
          </div>

          <div className="forcast_temp ">
            <div className="forcast_temp-day forcast_temp-item">
              <div className="forcast_icon-wrap">
                <svg
                  className="forcast_temp-day-icon"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 122.88"
                >
                  <path d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z" />
                </svg>
              </div>

              <div className="forcast_temp-value">
                {Math.round(itm.temp.day)} {/* <span>&#8451;</span> */}
              </div>
            </div>
            <div className="forcast_temp-night forcast_temp-item">
              <div className="forcast_icon-wrap">
                <svg
                  className="forcast_temp-night-icon"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.56 122.88"
                >
                  <path d="M121.85,87.3A64.31,64.31,0,1,1,36.88.4c2.94-1.37,5.92.91,4.47,4.47a56.29,56.29,0,0,0,75.75,77.4l.49-.27a3.41,3.41,0,0,1,4.61,4.61l-.35.69ZM92.46,74.67H92A16.11,16.11,0,0,0,76.2,58.93v-.52a15.08,15.08,0,0,0,11-4.72,15.19,15.19,0,0,0,4.72-11h.51a15.12,15.12,0,0,0,4.72,11,15.12,15.12,0,0,0,11,4.72v.51A16.13,16.13,0,0,0,92.46,74.67Zm10.09-46.59h-.27a7.94,7.94,0,0,0-2.49-5.81A7.94,7.94,0,0,0,94,19.78v-.27A7.94,7.94,0,0,0,99.79,17a8,8,0,0,0,2.49-5.8h.27A8,8,0,0,0,105,17a8,8,0,0,0,5.81,2.49v.27A8,8,0,0,0,105,22.27a7.94,7.94,0,0,0-2.49,5.81Zm-41.5,8h-.41a12.06,12.06,0,0,0-3.78-8.82A12.06,12.06,0,0,0,48,23.5v-.41a12.07,12.07,0,0,0,8.82-3.78,12.09,12.09,0,0,0,3.78-8.82h.41a12.08,12.08,0,0,0,3.77,8.82,12.09,12.09,0,0,0,8.83,3.78v.41a12.09,12.09,0,0,0-8.83,3.78,12.08,12.08,0,0,0-3.77,8.82Z" />
                </svg>
              </div>

              <div className="forcast_temp-value">
                {Math.round(itm.temp.night)} {/* <span>&#8451;</span> */}
              </div>
            </div>
          </div>

          <div className="forcast_desc align-self-center">
            <img
              className="forcast_icon"
              src={`https://openweathermap.org/img/wn/${itm.weather[0].icon}.png`}
              alt={itm.weather[0].description}
            />
            <span className="forcast_desc-text">
              {itm.weather[0].description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
/* new Date(1706263200000) */
