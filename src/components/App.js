import React, { useState, useEffect } from "react";
import DogBar from "./DogBar.js";
import Filter from "./Filter";
import DogDetail from "./DogDetail";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(null)
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then((res) => res.json())
    .then((data) => setDogs(data))
  }, [])

  const dogSelected = dogs.find((dog) => dog.id === selectedDogId)

  function updateIsGoodDog(matchingDog) {
    const mappedDogs = dogs.map((dog) => {
      if (dog.id === matchingDog.id) {
       dog.isGoodDog = matchingDog.isGoodDog
       return dog
      } else {
        return dog
      }
    })
    setDogs(mappedDogs)
  }

  function handleFilterClick() {
    setFilter((filter) => !filter)
  }

  return (
    <div className="App">
      <Filter filter={filter} onFilterClick={handleFilterClick} />
      <DogBar dogs={dogs} onClickDog={setSelectedDogId}/>
      <DogDetail dog={dogSelected} updateIsGoodDog={updateIsGoodDog} />
    </div>
  );
}

export default App;