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

function Header() {
    return (
        <>
        {/* <header className='header-top-strip py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='text-white mb-0'>
                            Free shipping 
                        </p>
                    </div>

                    <div className='col-6'>
                        <p className='text-end text-white mb-0'>
                            <a className='text-white' href='tel:+01735251354'>01735251354</a>
                        </p>
                    </div>
                </div>
            </div>
        </header> */}
        <header className='header-upper py-3'>
            <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-2 '>
                        
                        <div className='align-items-center justify-content-between'>
                            <Link className='text-black  '>
                                {/* <img className='logo' src={logo} /> */}
                                <h1 className='all-text'>Logo</h1>
                            </Link>
                        </div>
                        
                    </div>

                    <div className='col-5'>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control nav-search-input py-2" 
                                placeholder="Search" 
                                aria-label="Search" 
                                aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text nav-search-input p-3" id="basic-addon2">
                                < BsSearch className='fs-4'/>
                            </span>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='header-upper-links d-flex align-items-center justify-content-between'>
                            <div>
                                <Link>
                                    <img src={addcart} />
                                    <p className='all-text'>Add Cart</p>
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img className='cash' src={cash} />
                                    <p className='all-text'>Cash</p>
                                </Link> 
                            </div>
                            <div>
                                <Link>
                                    <img className='dashboard' src={dashboard} />
                                    <p className='all-text'>Dashboard</p>
                                </Link> 
                            </div>
                            <div>
                                <Link>
                                    <img className='logout' src={logout} />
                                    <p className='all-text'>Logout</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className='header-bottom py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-2'>
                        <div className='menu-bottom d-flex laign-items-center '>
                            <div>
                                <h2 className='categories all-text'>Categories</h2>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-10'>
                        <div className='row'>
                            <div className='menu-bottom d-flex laign-items-center'> 
                                <div className='col'>
                                    <NavLink className="all-text" to="/">Home</NavLink>
                                </div>
                                <div className='col'>
                                    <NavLink className="all-text" to="/">Blog</NavLink>
                                </div>
                                <div className='col'>
                                    <NavLink className="all-text" to="/">Agency</NavLink>
                                </div>
                                <div className='col'>
                                    <NavLink className="all-text" to="/">Training</NavLink>
                                </div>
                                <div className='col'>
                                <NavLink className="all-text" to="/">About Us</NavLink>
                                </div>
                                <div className='col'>
                                    <NavLink className="all-text" to="/">Contact Us</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

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
                            <div className='col-3'>
                                <div>
                                    <img className='product-items' src={chili} />
                                </div>
                                
                            </div>
                            <div className='col-3'>
                                <div className='row'>
                                        <div className='col-12'>
                                            <img className='product-items' src={puishak} />
                                        </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <p className='all-text'>Deshi Puishak (3 pices)</p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <p className='all-text'> 45tk</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <button className='add-butoon text-white'> add</button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='col-3'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <img className='product-items' src={onion} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <p className='all-text'>Deshi Gold Onion (1kg)</p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <p className='all-text'> 45tk</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <button className='add-butoon text-white'> add</button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='col-3 '>
                                <div className='row'>
                                    <div className='col-12'>
                                        <img className='product-items' src={chili} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <p className='all-text'>Deshi Red Chili (250gm)</p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <p className='all-text'> 100tk</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 product-title'>
                                        <button className='add-butoon text-white'> add</button>
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

export default Header;