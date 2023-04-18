import React from 'react';
import {  HelmetProvider, Helmet } from 'react-helmet-async'
import Category from "../components/category"
import { NavLink, Link } from 'react-router-dom';

function Login(props) {
    const TITLE = 'My Page Title';
    return (
        <>
        <HelmetProvider>
            <Helmet>
            <title>Login</title>
            </Helmet>
        </HelmetProvider>
       
            <header className='about py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        
                        <div className='col-2 product-list border-end'>
                                <Category/>
                        </div>
                        <div className='col-10'>
                            <div className="auth-inner-center align-middle my-5 ">
                                <div className='auth-inner my-5'>
                                
                                    <div className="form-group">
                                        <input
                                        name="Phone Number"
                                        type="Phone Number"
                                        // onChange={(e) => setEmail(e.target.value)}
                                        className="form-control form-rounded"
                                        placeholder="Enter Phone Number"
                                        />
                                    </div>

                                    <div className="form-group pwd-container pt-3">
                                        <input
                                        name="password"
                                    
                                        className="form-control form-rounded"
                                        placeholder="Enter password"
                                        
                                    
                                        />
                                    
                                    </div>
                                

                                    <div className="submit-button pt-3">
                                        <button
                                        type="submit"
                                        className="btn btn-success btn-lg round"
                                        
                                        >
                                        Login
                                        </button>
                                    </div>
                                    <div className="title-account pt-3">
                                        <p>
                                        Not on Bagdabazar Shop yet?
                                        <Link href="/">
                                            <a className="px-1 sign">Sign up</a>
                                        </Link>
                                        </p>
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

export default Login;