import Card from '/src/reusablecomponenets/Card.jsx'

import '/src/oneusecomp/components.css'


function ModCards(){

    return(
        <div className="cards">
             <Card
            link=""
            img="https://raw.githubusercontent.com/friedegg796/Muslimdiscs/refs/heads/main/src/main/resources/assets/muslimdiscs/icon.png"
            alt="Muslimdiscs icon, has a disc sandwitched between Muslim and discs "
            name="Muslimdiscs"
            desc="Use the Jukebox for more Islamic audios!--Adds Islamic discs to Minecraft."
            />
            <Card
            link="/Tutorialstructures"
            img="https://raw.githubusercontent.com/friedegg796/TutorialStructures/refs/heads/main/src/main/resources/assets/icon.png"
            alt="Tutorial Structures Icon"
            name="Tutorial Structures"
            desc="Teach the player without the need of documentation or wikia!"
            />
            <Card
            img="https://raw.githubusercontent.com/friedegg796/Potassium-Water/refs/heads/main/src/main/resources/assets/potassium-water/icon.png"
            alt="Image of Potassium Water's icon"
            name="Potassium Water"
            desc="Potassium + Water = BOOM! Explosive Water!"
            />
            <Card
            img="https://raw.githubusercontent.com/friedegg796/Noisediscs/refs/heads/master/src/main/resources/assets/noisediscs/icon.png"
            alt="An image of the Noisediscs icon"
            name="Noisediscs"
            desc="Calming Noises Await!"
            />
        </div>
    )
}
export default ModCards
