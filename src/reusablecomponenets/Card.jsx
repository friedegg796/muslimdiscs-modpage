import { Link } from 'react-router-dom'
import defaultimg from '/src/assets/pack3.png'

function Card({img = {}, link = {} , alt = "WIP", name = 0, desc = "none" }){

   return(
    <Link to={link}>
  <div className="card">

        <img src={img} alt={alt} width="200" />
        <h2> {name} </h2>
        <p> {desc} </p>

   </div>
   </Link>
)
}
export default Card
