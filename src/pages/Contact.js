import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import Category from "../components/category"
import {  HelmetProvider, Helmet } from 'react-helmet-async'

function About() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Contact Us</title>
                </Helmet>
            </HelmetProvider>
            <header className='about py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2 product-list border-end'>
                                <Category/>
                        </div>
                        <div className='col-10'>    
                        </div>
                    </div>     
                     
                </div>
            </header>
        </>
    );
}

export default About;