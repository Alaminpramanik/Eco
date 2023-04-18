import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import Category from "../components/category"


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