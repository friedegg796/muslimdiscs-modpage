import './components.css'
import { Link } from 'react-router-dom'
function MuslimcraftCard(){

   return(
  <div className="card">
    <Link to="/MuslimcraftDownloads">
        <img src="muslimdiscs-modpage/src/assets/pack3.png" alt="Muslimcraft Resourcepack" width="200"></img>
        <h2> Muslimcraft </h2>
        <p> Make Minecraft more clearly halal! </p>
    </Link>
   </div>
)

}
export default MuslimcraftCard
