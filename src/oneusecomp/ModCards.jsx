import Card from '/src/reusablecomponenets/Card.jsx'
import './components.css'


function ModCards(){

    return(
        <div className="cards">
            <Card
            name="Potassium Water"
            description="Potassium + Water = BOOM! Explosive Water!"
            />
            <Card
            name="Tutorial Structures"
            description="Teach the player without Documentation or Wikia!"
            />
            <Card
            name="MuslimDiscs"
            description="Potassium + Water = BOOM! Explosive Water!"
            />
            <Card
            name="Potassium Water"
            description="Potassium + Water = BOOM! Explosive Water!"
            />

        </div>
    )
}
export default ModCards
