import { Link } from 'react-router-dom'
import defaultimg from '/src/assets/pack3.png'

function Card({link = #} ){

   return(
  <div className="card">
    <Link to={props.link}>
        <img src={props.img} alt={props.alt} width="200" />
        <h2> {props.name} </h2>
        <p> {props.desc} </p>
    </Link>
   </div>
)
}
export default Card
