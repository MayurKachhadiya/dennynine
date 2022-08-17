import React from 'react'
import anc from '../images/about/aboutee.jpg';
import {faCalendar as faRegularfaCalenderDay} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faSkype as faBrandfaSkype} from '@fortawesome/free-brands-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <>
        <section className="section bg-light" id="about">
            <div className="container">
				<div className="row">
					<div className="col-lg-6 mx-auto">
						<div className="title-heading">
							<h3>About me</h3>
							<p className="text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>	
		                    <div>
		                        <div className="title-box"></div>
		                        <div className="title-line"></div>
		                    </div>
						</div>
					</div>
				</div>

				<div className="row mt-5 pt-4">
					<div className="col-lg-5">
						<div className="about-img mt-2">
							<img src={anc} className="img-fluid img-thumbnail" title="Denny Denny" alt="image not found" />
						</div>
					</div>
					<div className="offset-lg-1 col-lg-6">
						<div className="about"> 
							<h4 className="font-weight-bold mt-2">Personal Detail</h4>
							<p className="mt-2 pt-2 text-muted personal-info">Hye, I am Johnathan Doe residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want.Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
							<div className="about-item">
								<ul className="list-unstyled">
									<li>
										<FontAwesomeIcon className='mr-2 ab' icon={faRegularfaCalenderDay}/>
	                                    <span><b> Brithday</b> : 12/10/1990</span>
									</li>
									<li>
										<FontAwesomeIcon className='mr-2 ab' icon={faPhone}/>
	                                    <span><b> Phone</b> : (+123) 123 123456</span> 
									</li>
									<li>
									<FontAwesomeIcon className='mr-2 ab' icon={faEnvelope} />
	                                    <span><b> Email</b> : Denny.denny@hotmail.com</span>
									</li>
									<li>
									<FontAwesomeIcon className='mr-2 ab' icon={faBrandfaSkype} />
	                                    <span><b> Skype</b> : Denny_denny007</span>
									</li>
									<li>
									<FontAwesomeIcon className='mr-2 ab' icon={faEarth} />
	                                    <span><b> Website</b> : www.Dennydenny.com</span>
									</li>
								</ul>
							</div>
							<div>
	                            <a href=" " className="btn btn-custom">Download</a>
	                        </div>
						</div>
					</div>
				</div>
			</div>
        <div>
       <div className="sect bg-light">
            <div className="container">
            	<div className="row">
					<div className="col-lg-6 mx-auto">
						<div className="title-heading">
							<h3>Education</h3>
							<p className="text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>	
		                    <div>
		                        <div className="title-box"></div>
		                        <div className="title-line"></div>
		                    </div>
						</div>
					</div>
				</div>

                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <div className="under-line">
                                <div className="line-up">
                                	<div className="main-icon mt-4">
											<span>
                                            <FontAwesomeIcon icon={ faBriefcase } />
											</span>
										</div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timeline-page">
                    <div className="timeline-item">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="duration date-label-left">2008 - 2012</div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="event event-description-right">
                                    <h4>Studied at Cambridge University</h4>
                                    <p className="timeline-subtitle text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="event event-description-left">
                                    <h4>Master In Computer Science</h4>
                                    <p className="timeline-subtitle text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="duration duration-right ">2012 - 2014</div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="duration date-label-left"> 2014 - 2016</div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="event event-description-right">
                                    <h4>UI/UX Designer</h4>
                                    <p className="timeline-subtitle text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, </p>
                                </div>
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

export default About;
