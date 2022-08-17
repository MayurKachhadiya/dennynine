import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="section bg-light" id="contact">
            <div className="container">             
                <div className="row">
        			<div className="col-lg-6 mx-auto">
						<div className="title-heading text-center">
							<h3>Contact us</h3>
							<p className="text-muted">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>	
						</div>
	                    <div>
	                        <div className="title-box"></div>
	                        <div className="title-line"></div>
	                    </div>
					</div>
        		</div>  

                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-md-8">
                        <form className="form-custom">
                            <div className="form-row mt-3">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" required/>
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type Message" required></textarea>
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <button type="submit" className="btn btn-custom w-100">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>        
        </section>
    </>
  )
}

export default Contact
