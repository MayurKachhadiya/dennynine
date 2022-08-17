import React from 'react'
import {faGraduationCap as faSolidfaGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Experience = () => {
  return (
    <>
      <section className="section bg-light" id="experience">
            <div className="container">
            	<div className="row">
					<div className="col-lg-6 mx-auto">
						<div className="title-heading">
							<h3>Experience</h3>
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
                                        <FontAwesomeIcon icon={faSolidfaGraduationCap} />
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
                                    <h4>Senior Graphic Designer</h4>
                                    <p className="timeline-subtitle text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="event event-description-left">
                                    <h4>Web Developer</h4>
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
                                    <h4>Freelancer</h4>
                                    <p className="timeline-subtitle text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Experience
