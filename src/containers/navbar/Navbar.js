import React from 'react'
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
    return (
        <div>
            <div className="nav-outer-flex" style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="nav-links">
                    <a href="">Home</a>
                   
                    <Link
    activeClass="active"
    to="hi2"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    style={{cursor : 'pointer'}}
>About</Link>
<Link
    activeClass="active"
    to="cont-2"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    style={{cursor : 'pointer'}}
>Features</Link>

                </div>
            </div>
            
        </div>
    )
}

export default Navbar
