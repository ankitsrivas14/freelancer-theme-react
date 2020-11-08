import React from "react"

import NavItems from "./NavItems"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <NavItems link="#portfolio" content="Portfolio" />
                        <NavItems link="#about" content="About" />
                        <NavItems link="#contact" content="Contact" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar