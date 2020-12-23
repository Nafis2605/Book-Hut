import React from "react"

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="www.google.com" className="brand-logo right" style={{ marginRight: 30 }}>Book Hut</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="sass.html">Popular Books</a></li>
                        <li><a href="badges.html">New Arrival</a></li>
                        <li><a href="collapsible.html">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;