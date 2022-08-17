import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple as faApplefa1x } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF as  faFacebookFfa1x } from '@fortawesome/free-brands-svg-icons';
import { faGoogle as faGooglefa1x } from '@fortawesome/free-brands-svg-icons';
import { faTwitter as faTwitterfa1x } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
      <section className="section footer bg-dark" id="footer">
        	<div className="container">
        		<div className="row">
        			<div className="col-sm-7">
        				<div className="footer-menu">
        					<h5 className="text-light">2022 © Denny. Design and Devlop with @Shreethemes</h5>
        				</div>
        			</div>

        			<div className="col-sm-5">
                        <div className="footer-menu">
                            <div className="text-white text-sm-right">
                                <a href="https://www.facebook.com/"><FontAwesomeIcon className='footer-mdi fa-sm' icon={ faFacebookFfa1x } /></a>
                                <a href="https://twitter.com/"><FontAwesomeIcon className='footer-mdi fa-sm' icon={ faTwitterfa1x } /></a>
                                <a href="https://google.com/"><FontAwesomeIcon className='footer-mdi fa-sm' icon={ faGooglefa1x } /></a>
                                <a href="https://www.apple.com/"><FontAwesomeIcon className='footer-mdi fa-sm' icon={ faApplefa1x } /></a>
                            </div>
                        </div>
                    </div>
        		</div>
        	</div>
        </section>
    </>
  )
}

export default Footer
