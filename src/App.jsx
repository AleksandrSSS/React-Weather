import "./styles.css";

import Header from "./Components/Header";
import Weather from "./Components/WeatherRender/Weathers";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
    </div>
  );
}
