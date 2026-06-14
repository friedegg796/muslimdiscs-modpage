import Card from '/src/reusablecomponenets/Card.jsx'
import './components.css'


function ModCards(){

    return(
        <div className="cards">
             <Card
            name="Muslimdiscs"
            description="Use the Jukebox for more Islamic audios!--Adds Islamic discs to Minecraft."
            />
            <Card
            name="Potassium Water"
            description="Potassium + Water = BOOM! Explosive Water!"
            />
            <Card
            name="Tutorial Structures"
            description="Teach the player without the need of documentation or wikia!"
            />
            <Card
            name="Potassium Water"
            description="Potassium + Water = BOOM! Explosive Water!"
            />

        </div>
    )
}
export default ModCards
