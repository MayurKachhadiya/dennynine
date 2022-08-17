import React from "react";
const Home = () => {
    
  return (
    <>
    <section className="section bg-home" id="home">
            <div className="bg-overlay"></div>
            <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                            	<div className="title-heading">
                            		<h3 className="text-white mt-3">WELCOME!</h3>

                            		<div className="home-title">
                                    <div className="words">
                                      <span className="st"> </span>   
                                      <span className="st">Hi! I'M Frank Denny</span>   
                                      <span className="st">Hi! I'M Web Designer</span>
                                      <span className="st">Hi! I'M C.E.O.</span> 
                                      <span className="st">Hi! I'M Portfolio Manager</span> 
                                    </div>
                                </div>

                            		<p className="home-sub-title text-white mx-auto">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
	                                <div className="mb-4 pt-3">
		                                <a href="#" className="btn btn-custom btn-rounded mr-3">Hire me</a>
		                                <a href="#" className="btn btn-outline-custom btn-rounded">Download CV</a>
		                            </div>
                            	</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    </> 
    );
  };
export default Home;
