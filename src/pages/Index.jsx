import './App.css'
import ResourcepackCards from '/src/oneusecomp/Resourcepacks/ResourcepackCards.jsx'
import ModCards from '/src/oneusecomp/Mods/ModCards.jsx'
import { Link } from 'react-router-dom'

function Index(){

    return( //html-ish text goes here

        <>
          <div>
            <header>
          <h1>Muslimdiscs</h1>
          <p> Who said we couldn't use Minecraft for good deeds?</p>
          <hr/>
          </header>

                <h2> About </h2>
          <p>
            This is the offical website for the Muslimcraft, Muslimdiscs, and all of my other minecraft creations. It's just not done yet...

          </p>
          <h2> Mods/Datapacks</h2>
          <ul>
          <li>
              <ModCards />


          </li>
          </ul>
          <h2> Resourcepacks </h2>
          <ul>
          <li>
               <ResourcepackCards />
               {/* Other resource packs go here! */}


          </li>
          </ul>

        </div>
        <h2> Credits </h2>
        <p> Hasnain Alahi (AWanderingMuslim) - Creator</p>


        </>
    )
}


export default Index
