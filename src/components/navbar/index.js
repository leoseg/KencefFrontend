import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Kencef
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink
                        to="/"
                        activeStyle={{ color:'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/addchild"
                        activeStyle={{ color: 'black' }}
                    >
                        Add new child
                    </NavLink>
                    <NavLink
                        to="/addgodparent"
                        activeStyle={{ color: 'black' }}
                    >
                        Add new godparent
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;