import React from 'react'
import Travelers from '../components/Travelers.js'
import Footer from '../components/Footer.js'
import Navigation from '../components/Navigation/Navitation.js'
function Traveler() {
    return (
        <div>
            <Navigation />
            <Travelers />
            <Footer />
        </div>
    )
}

export default Traveler