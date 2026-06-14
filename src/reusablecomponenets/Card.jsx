import { Link } from 'react-router-dom'


function Card(props){

   return(
  <div className="card">
    <Link to="/MuslimcraftDownloads">
        <img src="{props.img}" at="{props.alt}" width="200"></img>
        <h2> {props.name} </h2>
        <p> {props.description} </p>
    </Link>
   </div>
)
}
Card.defaultProps = {
img: "
}
export default Card
