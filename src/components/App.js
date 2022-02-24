import React, { useState, useEffect } from "react";
import DogBar from "./DogBar.js";
import Filter from "./Filter";
import DogDetail from "./DogDetail";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then((res) => res.json())
    .then((data) => setDogs(data))
  }, [])
  
  const dogSelected = dogs.find((dog) => dog.id === selectedDogId)

  return (
    <div className="App">
      <Filter />
      <DogBar dogs={dogs} onClickDog={setSelectedDogId}/>
      <DogDetail dog={dogSelected} />
    </div>
  );
}

export default App;