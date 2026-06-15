import { Link } from 'react-router-dom'
import MuslimcraftLiteDownloadsList from '/src/oneusecomp/Resourcepacks/Muslimcraft/MuslimcraftLiteDownloadsList.jsx';
function Downloads(){

    return(
        <>

        <h1> Muslimcraft (Resourcepack) </h1>
       <p> This makes Minecraft more clearly halal,
         changing things that might be seen as problematic into clearly halal things
         (Such as replacing pork with truffles)</p>


         <p> A full list of changes is supposed to be <Link to="/changes">here</Link></p>

         <h2> Downloads </h2>

            <h2> Full Version </h2>

            <p> Unfinished </p>



            <h2> Lite Version </h2>
            <MuslimcraftLiteDownloadsList />
            </>
            )

            }

export default Downloads
