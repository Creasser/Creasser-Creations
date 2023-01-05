import React from "react"; 
import techData from "../techData";

function TechnologiesList(){

    const techElements = techData.map((tech) => {
        return (
            <div className="technology">
                <h1>{tech.name}</h1>
                <h4>{tech.experience}</h4>
            </div>
        )
    })

    return (
        <div className="technologiesList">{techElements}</div>
        
    )
}

export default TechnologiesList

//can have a 'data' file that I can add technologies to as I learn more
//can use array iteration methods to add the content to the screen dynamically
//can have a proficiently level on each technologies

//create a new technology file that will create just one technology but will be passed all the info from techData (create this variable)