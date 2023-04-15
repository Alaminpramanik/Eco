import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function category(props) {
    return (
        <>
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
        </>
    );
}

export default category;