import React from "react"

import "./css/styles.css"
import Avtaar from "./assets/img/avataaars.svg"



import Navbar from "./Navbar/Navbar"
import Header from "./Header/Header"
import Portfolio from "./Portfolio/Portfolio"
import PortfolioModal from "./Portfolio/PortfolioModal"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Copyright from "./Copyright/Copyright"
import ScrollToTopBtn from "./ScrollToTopBtn/ScrollToTopBtn"





const App = () => {
    return(
        <div>
            <Navbar />
            <Header title="Start Bootstrap" tagline="Graphic Artist - Web Designer - Illustrator" image={Avtaar}/>
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />
            <ScrollToTopBtn />
            <PortfolioModal />
        </div>
        
    )
}

export default App