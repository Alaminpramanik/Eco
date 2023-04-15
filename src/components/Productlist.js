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

function Productlist(props) {
    return (
        <>
            <div className='row '>
                <div className='col-3'>
                    <div>
                        <img className='product-items' src={potato} />
                    </div>
                    <div className='row'>
                        <div className='col-12 product-title'>
                            <p className='all-text'>Potato (1kg)</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 product-title'>
                            <p className='all-text'> 25tk</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12  '>
                            <button className=' add-butoon text-white'> add</button>
                        </div>
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
                    <div>
                        <img className='product-items' src={potato} />
                    </div>
                    <div className='row'>
                        <div className='col-12 product-title'>
                            <p className='all-text'>Potato (1kg)</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 product-title'>
                            <p className='all-text'> 25tk</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12  '>
                            <button className=' add-butoon text-white'> add</button>
                        </div>
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
            </div>
        </>
    );
}

export default Productlist;
