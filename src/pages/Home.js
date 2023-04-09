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


function Home() {
    return (
        <div>
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
                                <div className='customer-review'>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-12 '>
                                                <h2 className='all-text'>Ours Product</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row '>
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
                            </div>

                            <div className='row '>
                                <div className='customer-review'>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-12 '>
                                                <h2 className='all-text'>Customer Reviews</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;