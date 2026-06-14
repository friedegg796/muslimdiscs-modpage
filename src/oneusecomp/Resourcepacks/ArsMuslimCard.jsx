import './components.css'
import { Link } from 'react-router-dom'
function ArsMuslimCard(){

   return(
  <div className="card">
    <Link to="/ArsMuslimDownloads">
        <img src="muslimdiscs-modpage/src/assets/pack3.png" alt="Ars Muslim" width="200"></img>
        <h2> WIP, Ars Muslim </h2>
        <p> Make magic mods halal? </p>
    </Link>
   </div>
)

}
export default ArsMuslimCard
