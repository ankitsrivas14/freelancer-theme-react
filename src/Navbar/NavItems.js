import React from "react"

const NavItems = ({link = "#",content="No Text"}) => {
    return(
        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href={link}>{content}</a></li>
    )
}

export default NavItems
