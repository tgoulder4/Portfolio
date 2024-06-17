import React from 'react'

function Navbar() {
    return (
        <nav
            id="navbar"
            className="position-absolute z-[3] w-100 back-color-primary flex justify-content-center align-items-center"
        >
            <ul className="w-100 flex justify-items-center items-center justify-content-between">
                <li>
                    <a href="#contactMeSection">CONTACT</a>
                </li>
                <li className="moveLeft">
                    <a href="#aboutMeSection">ABOUT</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar