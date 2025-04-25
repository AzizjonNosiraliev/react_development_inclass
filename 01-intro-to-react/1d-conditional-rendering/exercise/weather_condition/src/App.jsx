import "./App.css";
import {
  Rain,
  CloudCover,
  ColdTemperature,
  HotTemperature,
  Footer,
} from "./components";

function App() {
  const isCloudy = true;
  const isRainy = true;
  const temp = 8;

  return (
    <>
      <div className="m-0" id="App">
        <nav className="navbar bg-yellow-400 flex justify-start gap-5 items-center p-5 font-bold text-2xl">
          <img
            className="w-30 h-30 rounded-full border-3"
            src="/weather.jpeg"
            alt=""
          />
          <h1 className="text-blue-600">Weather Condition</h1>
        </nav>

        <div className="row font-sans flex flex-wrap justify-evenly items-center gap-5 mt-20">
          {/* Here we will create cards that have pictures representing different weather conditions such as: Hot, rainy, cold, cloudy */}
          
          {temp < 60 ? <ColdTemperature /> : <HotTemperature />}
          {isRainy && <Rain />}
          {isCloudy && <CloudCover />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
