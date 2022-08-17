import React, {useState} from 'react';
import Bdata from './Bdata.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Blog = () => {

    const [items, setItems] = useState(Bdata);
    const filterItem = (categItem) => {
        const updatedItems = Bdata.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
    <>
      <section className="section bg-light" id="blog">
        	<div className="container">
            <div className="row">
        			<div className="col-lg-6 mx-auto">
						<div className="title-heading text-center">
							<h3>Latest Blog</h3>
							<p className="text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>	
						</div>
	                    <div>
	                        <div className="title-box"></div>
	                        <div className="title-line"></div>
	                    </div>
					</div>
        		</div>
                <div className="row mt-5">
            {
                    items.map((elem) => {
                        const { id, image, name, desc, read } = elem;
                        return(
                    <div className="col-lg-4">
                        <div className="blog">
                        	<div className="blog-img">
                            	<img className="img-fluid rounded" src={image} alt="blog-img"/>
                            </div>
                            <p className="category">{name}</p>
                            <h5>Personal Template On ThemeForest</h5>
                            <p className="text-muted">{ desc }</p>
                            <div className="mt-3">
                                <a href=" " className="read-btn">{read}<FontAwesomeIcon icon={ faArrowRight } /></a>
                            </div>
                        </div>
                    </div>
                )
                })
            }
            </div>
            </div>

        </section>
    </>
  )
}

export default Blog
