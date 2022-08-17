import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faCalendar as faRegularfaCalender } from '@fortawesome/free-regular-svg-icons';
import CounterUp from "react-countup";


const Services = () => {

  return (
    <>
      <section className="section bg-light" id="services">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 mx-auto">
						<div className="title-heading text-center">
							<h3>What i offer?</h3>
							<p className="text-muted">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>	
						</div>
	                    <div>
	                        <div className="title-box"></div>
	                        <div className="title-line"></div>
	                    </div>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-lg-4 mt-1">
						<div className="service text-center">
							<div className="icon">
                            <FontAwesomeIcon icon={ faEarth } />
							</div>
							<div>
								<h5>WEB DEVELOPMENT</h5>
								<p className="text-muted">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-1">
						<div className="service text-center">
							<div className="icon">
                                <FontAwesomeIcon icon={ faBriefcase } />
							</div>
							<div>
								<h5>BUSINESS CONSULTING</h5>
								<p className="text-muted">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-1">
						<div className="service text-center">
							<div className="icon">
                                <FontAwesomeIcon icon={ faPrint } />
							</div>
							<div>
								<h5>PRINTING</h5>
								<p className="text-muted">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-4 pt-3">
					<div className="col-lg-4 mt-1">
						<div className="service text-center">
							<div className="icon">
                                <FontAwesomeIcon icon={ faPlaneUp } />
							</div>
							<div>
								<h5>TRAVEL MANAGEMENT</h5>
								<p className="text-muted">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-1">
						<div className="service text-center">
							<div className="icon">
                            <FontAwesomeIcon icon={faDollarSign} />
							</div>
							<div>
								<h5>BILL AUDITING</h5>
								<p className="text-muted">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-1">
						<div className="service text-center">
							<div className="icon">
                            <FontAwesomeIcon icon={faComputer} />
							</div>
							<div>
								<h5>COMPUTER REPAIR</h5>
								<p className="text-muted">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
            </section>
            <section className="section bg-counter">
            <div className="container">
                <div className="row justify-content-center" id="counter">
                    <div className="col-md-3 pt-3 pb-3">
                    	<div className="text-center text-custom">
	                        <div className="counter-icon">
                                <FontAwesomeIcon icon={ faCrown }/>
	                        </div>
	                        {/* <h2 className="counter-value mb-3" data-count="600">0</h2> */}
							<h2><CounterUp className="counter-value mb-3" end={600} enableScrollSpy={true}/></h2>
	                        <h5 className="counter-name">Awards </h5>
	                    </div>
                    </div>

                    <div className="col-md-3 pt-3 pb-3">
                    	<div className="text-center text-custom">
	                        <div className="counter-icon">
                            <FontAwesomeIcon icon={ faBriefcase } />
	                        </div>
							<h2><CounterUp className="counter-value mb-3" end={2500} enableScrollSpy={true} /></h2>
	                        <h5 className="counter-name">Completed Projects</h5>
	                    </div>
                    </div>

                    <div className="col-md-3 pt-3 pb-3">
                    	<div className="text-center text-custom">
	                        <div className="counter-icon">
                                <FontAwesomeIcon icon={faFaceSmile}/>
	                        </div>
							<h2><CounterUp className="counter-value mb-3" end={2533} enableScrollSpy={true} /></h2>
	                        <h5 className="counter-name">Happy clients</h5>
	                    </div>
                    </div>

                    <div className="col-md-3 pt-3 pb-3">
                    	<div className="text-center text-custom">
	                        <div className="counter-icon">
							<FontAwesomeIcon icon={faRegularfaCalender} />
	                        </div>
							<h2><CounterUp className="counter-value mb-3" end={10} enableScrollSpy={true}/></h2>
	                        <h5 className="counter-name">Years of Experience</h5>
	                    </div>

                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Services;
