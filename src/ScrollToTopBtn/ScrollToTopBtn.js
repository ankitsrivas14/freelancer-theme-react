import React from "react"

const ScrollToTopBtn = () =>{
    return(
        <div className="scroll-to-top d-lg-none position-fixed">
            <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up next"></i></a>
        </div>
    )
}

export default ScrollToTopBtn