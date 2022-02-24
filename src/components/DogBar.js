import React from "react";

function DogBar({ dogs, onClickDog }) {
    const dogsDisplayed = dogs.map((dog) => {
        return <span 
        key={dog.id} 
        onClick={() => onClickDog(dog.id)}
        >
        {dog.name}
        </span>
    })

    return (
    <div id="dog-bar">
        {dogsDisplayed}
    </div>
    )
}

export default DogBar