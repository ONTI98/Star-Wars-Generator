
//event listener
const button = document.getElementById("button")
button.addEventListener("click",retrieveData)

//align body text and add font
const bodyClass = document.querySelector("body")
bodyClass.classList.add("text_align", "custom_font")



//function to retrieve data
function retrieveData(){

    //random number generator
    const number=Math.random()*83
    const rNumber=Math.round(number)
    console.log(rNumber)
    //fetch API

    
    fetch (`https://swapi.dev/api/people/${rNumber}`)
        .then ( response => response.json())
        .then (information =>{
            console.log(information)
           
            //cast object into string 
            const informationString= JSON.stringify(information)
            console.log(informationString)

            //cast stringified object back into Javascript object
            const informationObject=JSON.parse(informationString)
            console.log(informationObject)
            
   
            //declare attribute variables
            const name = document.getElementById("name").innerText=`Name: ${informationObject.name}`
            const height=document.getElementById("height").innerText=`Height: ${informationObject.heigh}`
            const mass=document.getElementById("mass").innerText=`Mass: ${informationObject.mass}`
            const hair_color=document.getElementById("hair_color").innerText=`Hair: ${informationObject.hair_color}`
            const skin_color=document.getElementById("skin_color").innerText=`Skin colour: ${informationObject.skin_color}`
            const eye_color=document.getElementById("eye_color").innerText=`Eye colour :${informationObject.eye_color}`
            const birth_year=document.getElementById("birth_year").innerText=`Birth year: ${informationObject.birth_year}`
            const gender=document.getElementById("gender").innerText=`Gender: ${informationObject.gender}`
            const homeworld=document.getElementById("homeworld").innerText=`Homeworld:  ${informationObject.homeworld}`
            const films=document.getElementById("films").innerText=`Films: ${informationObject.films}`
            const species=document.getElementById("species").innerText=`Species: ${informationObject.species}`
            const vehicles=document.getElementById("vehicles").innerText=`Vehicles: ${informationObject.vehicles}`
            const starships=document.getElementById("starships").innerText=`Starships: ${informationObject.starships}`
            const created=document.getElementById("created").innerText=`Created: ${informationObject.created}`
            const edited=document.getElementById("edited").innerText=`Edited :${informationObject.edited}`
            const url=document.getElementById("url").innerText=`Url :${informationObject.url}`
            
            //change the button after clicking
            const buttonStyling = document.querySelector("button")
            buttonStyling.innerHTML="Randomize characters"
            buttonStyling.classList.add("background_color","custom_font","hover")
        
       })
       
} 