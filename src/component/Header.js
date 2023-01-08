import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/Cardcontext';
const Header = () => {
    const [show, setshow] = useState(false);
    const { totalitem } = useCartContext();
    return (
        <div className={show ? "header active" : "header"}>
            <div className="logo">
                <Link to="/" >
                    <img src="./image/logo.jpg" alt="#" />
                </Link>
            </div>
            <div className="navbarcart">
                <div className="navbar">
                    <ul className='navlist'>
                        <li>
                            <Link to="/" onClick={() => { setshow(false) }}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => { setshow(false) }}>About</Link>
                        </li>
                        <li>
                            <Link to="/product" onClick={() => { setshow(false) }}>Products</Link>
                        </li>
                        <li>
                            <Link to="/Contact" onClick={() => { setshow(false) }}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="cart">
                    <Link to="/cart"><FaShoppingCart className="icon" /></Link>
                    <span>{totalitem}</span>
                </div>
            </div>
            <div className="navbutton" onClick={() => { setshow(!show) }}>
                <AiOutlineMenu className='open navbtn' />
                <GrClose className='close navbtn' />
            </div>
        </div>
    )
}

export default Header