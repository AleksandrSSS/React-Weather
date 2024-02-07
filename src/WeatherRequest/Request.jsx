//

export default async function responce() {
  const weather = {
    curweather: "",
    forcast: "",
  };
  const data = {
    city: "Kyiv",
    lat: 50.458,
    lon: 30.5303,
  };
  const apiKey1 = "ac4d8af28a8c864ae7422cba18ba1e76";
  const forcast8Days = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&exclude=current,minutely,hourly&units=metric&lang=ru&appid=${apiKey1}`;
  const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=metric&lang=ru&appid=${apiKey1}`;

  const response8Days = await fetch(forcast8Days);
  if (response8Days.ok) {
    const res1 = await response8Days.json();
    weather.forcast = res1;
    // console.log(res1);
  }

  const currWeather = await fetch(currentWeather);
  if (currWeather.ok) {
    const res2 = await currWeather.json();
    weather.curweather = res2;
    // console.log(res2);
  }
  return weather;
}
