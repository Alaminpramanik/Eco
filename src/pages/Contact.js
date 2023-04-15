import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import Category from "../components/category"
import banner from "../images/banner.png"
import fishbeef from "../images/fishbeef.jpg"
import Vegetable from "../images/vegetable.jpg"
import drink from "../images/drink.jpeg"
import Choclate from "../images/choclates.jpg"
import background from "../images/apps.png"
import gplaystore from "../images/playstore.png"

function About() {
    return (
        <>
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