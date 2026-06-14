import Card from '/src/reusablecomponenets/Card.jsx'

import './components.css'


function ModCards(){

    return(
        <div className="cards">
             <Card
            img="https://raw.githubusercontent.com/friedegg796/Muslimdiscs/refs/heads/main/src/main/resources/assets/muslimdiscs/icon.png"
            alt="Muslimdiscs icon, has a disc sandwitched between Muslim and discs "
            name="Muslimdiscs"
            desc="Use the Jukebox for more Islamic audios!--Adds Islamic discs to Minecraft."
            />
            <Card
            img="https://raw.githubusercontent.com/friedegg796/TutorialStructures/refs/heads/main/src/main/resources/assets/icon.png"
            alt="Tutorial Structures Icon"
            name="Tutorial Structures"
            desc="Teach the player without the need of documentation or wikia!"
            />
            <Card
            img="https://raw.githubusercontent.com/friedegg796/Potassium-Water/refs/heads/main/src/main/resources/assets/potassium-water/icon.png"
            alt="Image of the Potassium Water item"
            name="Potassium Water"
            desc="Potassium + Water = BOOM! Explosive Water!"
            />
            <Card
            img=""
            alt="An image of one of the Noise Discs"
            name="Noisediscs"
            desc="Calming Noises Await!"
            />
            <Card />
        </div>
    )
}
export default ModCards
