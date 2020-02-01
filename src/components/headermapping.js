import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Navigation</h1>
        <NavLink to="/" exact={true}> Login </NavLink>
        <NavLink to="/register"> Register </NavLink>
        <NavLink to="/portfolio"> PortFolio </NavLink>
        <NavLink to="/userdetails"> UserDetails </NavLink>
    </header>
)

export default Header;