import React from 'react'
import { Link } from 'react-router-dom'


const Nav = (props) => {
    return (
        <div>
            <nav className="navBar">
            <Link to='/'><img src="https://www.invisalignaccessories.com/assets/svg/invisalign_logo_white-5efbed8ec2d726166690c1c9283db89c10753bb613aa9abe47120cb2d2b50d7f.svg"
                    width="200" height="80" alt="logo" /></Link>
                <ul>
                    <li><a href="#" >Invisalign Home</a></li>

                    <Link to='/About'>
                        <li>About</li>
                    </Link>
                    <Link to='/Cart'>
                        <li>
                            <img src="https://www.invisalignaccessories.com/assets/cart_icon_header-23aa40502841b773752ef2ef4803a2bb77187d6628bad3a80a0942f76a750212.png"
                                width="30" height="30" alt="icon" />
                            <span>{props.cartCount}</span>
                        </li>
                    </Link>

                </ul>
            </nav>
            <nav className="littleNav">
                <p className="littleNavText">
                    Free Shipping on orders above 20$
                   </p>
            </nav>
        </div>
    )
}

export default Nav;
