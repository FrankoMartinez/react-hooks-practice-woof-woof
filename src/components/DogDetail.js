import React from "react";

function DogDetail({ dog, updateIsGoodDog }) {
    if (!dog) return <h3>Select a doggo</h3>
    const { id, image, name, isGoodDog } = dog
    
    function handleButtonClick() {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isGoodDog: !isGoodDog
            }),
        })
        .then((res) => res.json())
        .then((data) => updateIsGoodDog(data))
    }

    return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            <img src={image} alt={name}></img>
            <h2>{name}</h2>
            <button onClick={handleButtonClick}>{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
    </div>
    )
}

export default DogDetail