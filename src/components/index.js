import React, { useState, createContext, useContext, useMemo } from "react";
import Header from './Header'
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar'
import Home from '../pages/home/Home';
import '../assets/css/common.css'
import '../assets/fonts/font.css'

const themeContext = createContext({
    theme: ''
})

const Dashboard = () => {
    const [menuCollapse, setMenuCollapse] = useState(true)
    const [themeChange, setThemeChange] = useState(true)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const themeIconClick = () => {
        themeChange ? setThemeChange(false) : setThemeChange(true);
    }
    console.log(themeChange);

    return (
        <div>
            <Header />
            <Navbar collapsed={menuCollapse} toggle={menuIconClick} />
            <div className='content d-flex'>
                <div className='top-gradient' />
                <div className="middle-gradient" style={{ display: menuCollapse ? 'block' : 'none' }} />
                <Sidebar collapsed={menuCollapse} theme={themeIconClick} />
                <Home />
                <div className='bottom-gradient' />
            </div>
            <Footer />
        </div >
    )
}

export default Dashboard;
