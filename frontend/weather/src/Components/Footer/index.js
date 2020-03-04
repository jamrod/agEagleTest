import React from 'react'

import '../../App.css'

function Footer() {

    return (
        <div className="flex-container-row footer centered">
            <div className="foot fex-container-row">
                <p>&copy; 2020 James Rodgers</p>
            </div>
            <div className="flex-container-row">
                <a href="http://github.com/jamrod" ><img src="./Octocat.jpg" alt="github" className="icons" /></a>
                <a href="http://www.linkedin.com/in/jamescrodgers"><img src="./LI-In-Bug.png" alt="linked in" className="icons" /></a>
            </div>
        </div>
    )
}
export default Footer