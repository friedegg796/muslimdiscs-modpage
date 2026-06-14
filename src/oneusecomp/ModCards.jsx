import Card from '/src/reusablecomponenets/Card.jsx'
import MuslimdiscsImg from ' '
import './components.css'


function ModCards(){

    return(
        <div className="cards">
             <Card
            img={}
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
