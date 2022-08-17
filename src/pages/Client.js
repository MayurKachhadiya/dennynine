import React from 'react'
import img1 from "../images/testimonial/img-1.jpg";
import img2 from "../images/testimonial/img-2.jpg";
import img3 from "../images/testimonial/img-3.jpg";
import Slider from "react-slick";

const Client = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		color: "green",
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
        };
    return(
    <>
      <section className="section bg-light" id="testimonial">
			<div className="container">
				<div className="row">
                
					<div className="col-lg-6 mx-auto">
						<div className="title-heading">
							<h3>Clients</h3>
							<p className="text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>	
		                    <div>
		                        <div className="title-box"></div>
		                        <div className="title-line"></div>
		                    </div>
						</div>
					</div>
				</div>
			</div>
			<div className="container asc">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-8">
                    <div id="owl-demo" className="owl-carousel">
                    <Slider {...settings}>
                            <div className="testi-box">
                                <div className="text-center pt-4">
                                    <div className="client-drow pt-4">
			                            <img src={img1} alt="" className="mx-auto text-center img-fluid img-thumbnail mr-4 testi-img rounded-circle"/>
			                            <div className="testi-content">
			                                <p className="user-review text-center text-muted"> "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
			                                <div className="client-name">
				                                <h4 className="font-weight-bold">James Cates</h4>
				                                <p>Founder</p>
			                                </div>
			                            </div>
			                        </div>
                                </div>
                            </div>

                            <div className="testi-box">
                                <div className="text-center pt-4">
                                    <div className="client-drow pt-4">
			                            <img src={img2} alt="" className="mx-auto img-fluid img-thumbnail mr-4 testi-img rounded-circle"/>
			                            <div className="testi-content">
			                                <p className="user-review text-center text-muted">" Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
			                                <div className="client-name">
				                                <h4 className="font-weight-bold">Gregory Kennedy</h4>
				                                <p>C.E.O</p>
			                                </div>
			                            </div>
			                        </div>
                                </div>
                            </div>

                            <div className="testi-box">
                                <div className="text-center pt-4">
                                    <div className="client-drow pt-4">
			                            <img src={img3} alt="" className="mx-auto text-center img-fluid img-thumbnail mr-4 testi-img rounded-circle"/>
			                            <div className="testi-content">
			                                <p className="user-review text-center text-muted">" Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
			                                <div className="client-name">
				                                <h4 className="font-weight-bold">Gisela Kennedy</h4>
				                                <p>Adviser</p>
			                                </div>
			                            </div>
			                        </div>
                                </div>
                        </div>
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
		</section>
    </>
  );
};

export default Client
