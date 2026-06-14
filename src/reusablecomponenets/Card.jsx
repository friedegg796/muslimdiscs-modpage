import { Link } from 'react-router-dom'
import defaultimg from '/src/assets/pack3.png'

function Card(props){

   return(
  <div className="card">
    <Link to="/MuslimcraftDownloads">
        <img src={props.img} alt={props.alt} width="200" />
        <h2> {props.name} </h2>
        <p> {props.desc} </p>
    </Link>
   </div>
)
}
export default Card
