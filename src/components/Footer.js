import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'


function Footer() {
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                
                        <div className='col-3'>
                            {/* <h4 className='text-center all-text mb-4'>About Us</h4> */}
                            <div className='footer-links d-flex flex-column'>
                                <Link className='all-text py-2 mb-1'>about us</Link>
                                <Link className='all-text py-2 mb-1 '>contact us</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            {/* <h4 className='text-center all-text mb-4'>About Us</h4> */}
                            <div className='footer-links d-flex flex-column'>
                                <Link className='all-text py-2 mb-1'>Terms and conditions</Link>
                                <Link className='all-text py-2 mb-1 '>Privacy Policy</Link>
                                <Link className='all-text py-2 mb-1 '>Payment System</Link>
                                <Link className='all-text py-2 mb-1 '>Delivery Area</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            {/* <h4 className='text-center all-text mb-4'>About Us</h4> */}
                            <div className='footer-links d-flex flex-column'>
                                <Link className='all-text py-2 mb-1'>Security</Link>
                                <Link className='all-text py-2 mb-1 '>Download Apps</Link>
                                <Link className='all-text py-2 mb-1 '>Careers</Link>
                                
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-center all-text mb-4'>Social Media</h4>

                        </div>

                </div>
                </div>
                
            </footer>
            <footer className='footer py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                
                        <div className='col-12'>
                            <p className='text-center all-text mb-4'>Developed by @alamin</p>
                            
                        </div>
                    

                    </div> 
                </div>
                
            </footer>
        </>
    );
}

export default Footer;