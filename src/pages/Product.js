import React from 'react';
import {  HelmetProvider, Helmet } from 'react-helmet-async'
import Category from "../components/category"
import ProductList from "../components/Productlist"

function Product() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Product List</title>
                </Helmet>
            </HelmetProvider>
            <header className='product py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        
                        <div className='col-2 product-list border-end'>
                                <Category/>
                        </div>
                        <div className='col-10'>
                                
                             <ProductList/>     
                        </div>
                    </div>     
                     
                </div>
            </header>
        </>
    );
}

export default Product;