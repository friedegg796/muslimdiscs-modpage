import { Link } from 'react-router-dom'


function Card(props){

   return(
  <div className="card">
    <Link to="/MuslimcraftDownloads">
        <img src={props.img} alt={props.alt} width="200"></img>
        <h2> {props.name} </h2>
        <p> {props.desc} </p>
    </Link>
   </div>
)
}
Card.defaultProps = {
img: "muslimdiscs-modpage/src/assets/pack3.png",
alt: "TEST",
name: "WIP",
desc: "WIP",
}
export default Card
