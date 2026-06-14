import { Link } from 'react-router-dom'


function Card(props){

   return(
  <div className="card">
    <Link to="/MuslimcraftDownloads">
        <img src="muslimdiscs-modpage/src/assets/pack3.png" alt="Muslimcraft Resourcepack" width="200"></img>
        <h2> {props.name} </h2>
        <p> {props.description} </p>
    </Link>
   </div>
)

}
export default Card
