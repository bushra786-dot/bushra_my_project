import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Importing the search icon from Feather icons
import { MdLocalMall } from 'react-icons/md'; // Importing the shopping bag icon from Material Design
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"

const Header = () => {
    
    const bag = useSelector((store) => store.bag);
    


    return (
        <nav>
            <img src="logo/final_logo.png" className="logo_image" alt="Logo" />
            <div className="logo"></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                    <a href="#">Fresh</a>
                    <ul className="dropdown">
                        <li><a href="Fruits.html">Fruits</a></li>
                        <li><a href="vegetable1.html">Vegetables</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Dairy</a>
                    <ul className="dropdown">
                        <li><a href="milk.html">Milk</a></li>
                        <li><a href="butter.html">Butter</a></li>
                        <li><a href="yogurt.html">Yogurt</a></li>
                        <li><a href="desi_ghee.html">Desi Ghee</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Pantry</a>
                    <ul className="dropdown">
                        <li><a href="rice.html">Rice</a></li>
                        <li><a href="flour.html">Flour</a></li>
                        <li><a href="pulses.html">Pulses</a></li>
                        <li><a href="dates.html">Dates</a></li>
                        <li><a href="dry_fruits.html">Dry Fruits</a></li>
                        <li><a href="spices_herbs.html">Spices</a></li>
                    </ul>
                </li>
                <li><a href="/about">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div className="right-menu">
                <div className="search">
                    <FiSearch className="search-icon" /> {/* Using the Feather search icon */}
                    <input className="search-input" type="search" placeholder="Search" />
                </div>
                <Link className="action-container" to="/bag">
                    <MdLocalMall className="shopping-icon" /> {/* Using the shopping bag icon */}
                    <span className="bag-item-count">{bag.length}</span>
                </Link>
                <a href="login.html" className="login-btn">Login</a>
                <a href="Admin_Login.html" className="log-out-btn">Logout</a>
            </div>
        </nav>
    );
};

export default Header;
