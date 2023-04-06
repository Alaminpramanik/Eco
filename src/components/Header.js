import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import logo from "../images/logos.png";
import addcart from "../images/cart.svg";
import cash from "../images/cash.png";
import dashboard from "../images/dashboard-layout.png"
import logout from "../images/logout-rounded.png"


function Header() {
    return (
        <>
        <header className='header-top-strip py-3'>
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
        </header>
        <header className='header-upper py-3'>
            <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-2 '>
                        
                        <div className='align-items-center justify-content-between'>
                            <Link className='text-black  '>
                                <img className='logo' src={logo} />
                                {/* <h2>Logo</h2> */}
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
                                    <p>Add Cart</p>
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img className='cash' src={cash} />
                                    <p>Cash</p>
                                </Link> 
                            </div>
                            <div>
                                <Link>
                                    <img className='dashboard' src={dashboard} />
                                    <p>Dashboard</p>
                                </Link> 
                            </div>
                            <div>
                                <Link>
                                    <img className='logout' src={logout} />
                                    <p>Logout</p>
                                </Link>
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