import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import logo from "../images/logos.png";
import addcart from "../images/cart.svg";
import cash from "../images/cash.png";
import dashboard from "../images/dashboard-layout.png"
import logout from "../images/logout-rounded.png"
import banner from "../images/banner.png"
import chili from "../images/chili.png"
import puishak from "../images/puishak.png"
import onion from "../images/onion.jpg"
import potato from "../images/potato.webp"
import fishbeef from "../images/fishbeef.jpg"
import Vegetable from "../images/vegetable.jpg"
import drink from "../images/drink.jpeg"
import Choclate from "../images/choclates.jpg"
import background from "../images/apps.png"
import gplaystore from "../images/playstore.png"

function Home() {
    return (
        <>
            <header className='header-body py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2 product-list border-end'>
                            <ul className='list'>
                                <li className='list-group-item '>
                                    <Link className="all-text">Vegetable and Fruits</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link className="all-text"> Meat and Fish </Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link className="all-text"> Cooking </Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link className="all-text"> Dairy and Eggs </Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link className="all-text"> Bevarage</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link className="all-text">Choclate </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-10'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img className='banner' src={banner} />
                                </div>
                            </div>

                            <div className='row '>
                                <div className='product'>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-12 '>
                                                <h2 className='all-text'>Ours Product</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                {/* <div className='product-listing'> */}
                                    <div className='col-3'>
                                        <div>
                                            <img className='product-items' src={fishbeef} />
                                        </div>
                                        
                                        <div className='row'>
                                            <div className='col-12  '>
                                                <button className=' add-butoon text-white'> See List</button>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='col-3'>
                                        <div>
                                            <img className='product-items' src={Vegetable} />
                                        </div>
                                        
                                        <div className='row'>
                                            <div className='col-12  '>
                                                <button className=' add-butoon text-white'> See List</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className='col-3 '>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <img className='product-items' src={drink} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12  '>
                                                <button className=' add-butoon text-white'> See List</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3 '>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <img className='product-items' src={Choclate} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12  '>
                                                <button className=' add-butoon text-white'> See List</button>
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>

                            <div className='row '>
                                <div className='customer-review'>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-12 '>
                                                <h2 className='all-text'>Customer Reviews</h2>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 '>
                                                <p className='all-text'>Overall, I'm very happy with my experience using Shopify for my eCommerce website. It's been an essential tool in growing my business and I would highly recommend it to anyone looking to start an online store.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row '>
                                <div className='android-app' style={{backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat',}}>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <h2 className='text-white fs-1'>Download Mobile App</h2>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <button className='text-white app-download fs-1'>Download</button>
                                            </div>
                                        </div>
                                        <div className='row'>
                                          
                                            <div className='col-12'>
                                                <p className='text-white'>Get it On <br/> Google Play Store</p>
                                                <img className='playstore' src={gplaystore} />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Home;