import Card from '/src/reusablecomponenets/Card.jsx'
//import '/src/oneusecomp/components.css'
import muslimcraft from '/src/assets/pack3.png'


function ResourcepackCards(){

    return(
        <div className="cards">
             <Card
             link=""
            img="muslimcraft"
            alt="Muslimcraft icon"
            name="Muslimcraft"
            desc="Make Minecraft more clearly halal!"
            />
                   <Card
            img="https://raw.githubusercontent.com/friedegg796/Muslimdiscs/refs/heads/main/src/main/resources/assets/muslimdiscs/icon.png"
            alt="Muslimpaintings icon"
            name="Muslimpaintings"
            desc="Make Minecraft more clearly halal!"
            />
        </div>
    )
}
export default ResourcepackCards
