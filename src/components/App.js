
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState,useEffect } from "react";
function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }
  , []);
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}/>
    </div>
  );
}

export default App;
