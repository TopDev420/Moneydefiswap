import React, { useState, createContext, useContext, useMemo } from "react";
import Header from './Header'
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar'
import Home from '../pages/home/Home';
import '../assets/css/common.css'
import '../assets/css/theme.css'
import '../assets/fonts/font.css'

const Dashboard = () => {
    const [menuCollapse, setMenuCollapse] = useState(true)
    const [themeChange, setThemeChange] = useState(true)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const themeIconClick = () => {
        themeChange ? setThemeChange(false) : setThemeChange(true);
    }

    return (
        <div>
            <Header theme={themeChange} />
            <Navbar collapsed={menuCollapse} toggle={menuIconClick} theme={themeChange} />
            <div className='content d-flex'>
                <div className='top-gradient' />
                <div className="middle-gradient" style={{ display: menuCollapse ? 'block' : 'none' }} />
                <Sidebar collapsed={menuCollapse} theme={themeChange} themeToggle={themeIconClick} />
                <Home theme={themeChange} />
                <div className='bottom-gradient' />
            </div>
            <Footer theme={themeChange} />
        </div >
    )
}

export default Dashboard;
