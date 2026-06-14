import Card from '/src/reusablecomponenets/Card.jsx'

import './components.css'


function ModCards(){

    return(
        <div className="cards">
             <Card
            img="https://raw.githubusercontent.com/friedegg796/Muslimdiscs/refs/heads/main/src/main/resources/assets/muslimdiscs/icon.png"
            alt="wow"
            name="Muslimdiscs"
            desc="Use the Jukebox for more Islamic audios!--Adds Islamic discs to Minecraft."
            />
            <Card
            name="Potassium Water"
            desc="Potassium + Water = BOOM! Explosive Water!"
            />
            <Card
            name="Tutorial Structures"
            desc="Teach the player without the need of documentation or wikia!"
            />
            <Card
            name="Noisediscs"
            desc="Calming Noises Await!"
            />
            <Card />
        </div>
    )
}
export default ModCards
