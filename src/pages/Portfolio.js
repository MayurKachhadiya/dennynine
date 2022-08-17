import React, { useState } from 'react';
import Menu from './Menu.js';
import  SimpleLightbox  from "simple-lightbox";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    }

    const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
  };

  return (
    <>
      <section className="section text-center bg-light" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
						<div className="title-heading text-center">
							<h3>My Recent work</h3>
							<p className="text-muted">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>	
						</div>
	                    <div>
	                        <div className="title-box"></div>
	                        <div className="title-line"></div>
	                    </div>
					</div>
                </div> 
{/* 
                <div className="row mt-3 pt-2">
                    <ul className="col container-filter categories-filter list-unstyled mb-0" id="filter">
                        <li><a className="categories active" onClick={() => {setItems(Menu); setActive();}}>All</a></li>
                        <li><a className="categories" onClick={() => filterItem('photos')}>Photos</a></li>
                        <li><a className="categories" onClick={() => filterItem('video')}>Videos</a></li>
                        <li><a className="categories" onClick={() => filterItem('designs')}>Designs</a></li>
                        <li><a className="categories" onClick={() => filterItem('coffee')}>Coffee</a></li>
                    </ul>
                </div>
            </div> */}
            
            <div className="row mt-3 pt-2">
                    <ul className="col container-filter categories-filter list-unstyled mb-0" id="filter">
                    <li><a key='1' name='Menu'  className={1 === clickedId ? "categories active" : "categories"} onClick={(event) => {setItems(Menu); handleClick(event, 1); }}>Menu</a></li>   
                    <li><a key='2' name='photos'  className={2 === clickedId ? "categories active" : "categories"} onClick={(event) => {filterItem('photos'); handleClick(event, 2); }}>Photos</a></li>   
                    <li><a key='3' name='video'  className={3 === clickedId ? "categories active" : "categories"} onClick={(event) => {filterItem('video'); handleClick(event, 3); }}>Video</a></li>   
                    <li><a key='4' name='designs'  className={4 === clickedId ? "categories active" : "categories"} onClick={(event) => {filterItem('designs'); handleClick(event, 4); }}>Designs</a></li>   
                    <li><a key='5' name='coffee'  className={5 === clickedId ? "categories active" : "categories"} onClick={(event) => {filterItem('coffee'); handleClick(event, 5); }}>Coffee</a></li>   
                    </ul>
                </div>
            </div> 
            <SimpleLightbox>
            <div className="container-fluid">
                <div className="row container-grid nf-col-3 mt-3 pt-2 projects-wrapper">
                {
                    items.map((elem) => {
                        const { name, image,category } = elem;
                        return(
                            <div className="img-max-width  ">
                                <div className="item-box">
                                
                                    <a href={image} title="Project Name">
                                        <img className="item-container photos videos" src={image} alt="1" />
                                        <div className="item-mask">
                                            <div className="item-caption">
                                                <h5 className="text-light">{name}</h5>
                                                <p className="text-light">{category}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            </SimpleLightbox>
        </section>
        <section className="section bg-contact-btn">
        	<div className="bg-overlay"></div>
        	<div className="container-fluid">
        		<div className="row">
        			<div className="col-lg-8 mx-auto">
        				<div className="text-center">
        					<div className="text-center contact-btn">
								<h3 className="font-weight-bold mb-4">Hire me for your next project</h3>
                                <a href="#contact" className="btn btn-custom btn-rounded">Contact us</a>                        
                            </div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    </>
  )
}

export default Portfolio;
