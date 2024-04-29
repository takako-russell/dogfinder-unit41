import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await axios.get("/db.json");
        setDogs(res.data.dogs);
      } catch (err) {
        console.error("could not fetch data", err);
      }
    };
    fetchDogData();
  }, []);

  return (
    <div className="App">
      <h1>Dog Finder!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <div className="container">
          <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
