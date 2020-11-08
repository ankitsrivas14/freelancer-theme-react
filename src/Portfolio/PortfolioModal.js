import React from "react"

import Cabin from "../assets/img/portfolio/cabin.png"
import Cake from "../assets/img/portfolio/cake.png"
import Circus from "../assets/img/portfolio/circus.png"
import Game from "../assets/img/portfolio/game.png"
import Safe from "../assets/img/portfolio/safe.png"
import Submarine from "../assets/img/portfolio/submarine.png"

const PortfolioModal = () => {
    return(
        <div>
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">

                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Log Cabin</h2>

                                    <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img className="img-fluid rounded mb-5" src={Cabin} alt="" />

                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">

                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">Tasty Cake</h2>

                                    <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img className="img-fluid rounded mb-5" src={Cake} alt="" />

                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">

                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label">Circus Tent</h2>

                                    <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div class="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img className="img-fluid rounded mb-5" src={Circus} alt="" />

                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">

                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label">Controller</h2>

                                    <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img className="img-fluid rounded mb-5" src={Game} alt="" />

                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">

                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal5Label">Locked Safe</h2>

                                    <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img className="img-fluid rounded mb-5" src={Safe} alt="" />

                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">

                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">Submarine</h2>

                                    <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <img className="img-fluid rounded mb-5" src={Submarine} alt="" />

                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioModal