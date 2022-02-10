import React from 'react'
import '../assets/css/nabvar.css'
import { FaTimes, FaChevronDown } from "react-icons/fa";

import { BsTextIndentLeft, BsTextIndentRight } from "react-icons/bs";

const Navbar = (props) => {
    const dropDown = () => {
        document.getElementById("languageDropdown").classList.toggle("show");
    }
    return (
        <div className={`navbar d-flex justify-content-*-between ${props.theme ? 'dark-navbar' : 'light-navbar'}`}>
            <div className='nav-left d-flex'>
                <div className=' align-self-center'>{React.createElement(props.collapsed ? BsTextIndentLeft : BsTextIndentRight, {
                    style: { color: props.theme ? "white" : "black" },
                    className: 'menu align-self-center pointer',
                    onClick: props.toggle
                })}</div>
                <div className={`nav-mark align-self-center ${props.theme ? 'dark-mark' : 'light-mark'}`}></div>
                <span className={`nav-mark-name align-self-center ${props.theme ? 'dark-mark-name' : 'light-mark-name'}`}>Moneydefiswap</span>
            </div>
            <div className='nav-right d-flex'>
                <div className='small-mark align-self-center'></div>
                <span className={`balance align-self-center ${props.theme ? 'dark-bal' : 'light-bal'}`}>$</span>
                <span className={`balance-f align-self-center ${props.theme ? 'dark-bal' : 'light-bal'}`}>36</span>
                <span className={`balance-e align-self-center ${props.theme ? 'dark-bal' : 'light-bal '}`}>.658</span>
                <div className={`connect-wallet align-self-center justify-content-center pointer  ${props.theme ? 'dark-wallet' : 'light-wallet '}`}  >
                    <span style={{ color: props.theme ? '' : '#fff' }}>Connect Wallet</span>
                </div>
                <div>
                    <div className='language d-flex pointer' onClick={dropDown}><div></div><FaChevronDown className='lang-drop'></FaChevronDown></div>
                    <div id="languageDropdown" className="language-content flex-column">
                        <FaTimes className='closeLanguage pointer' onClick={dropDown} />
                        <button className='pointer'>English</button>
                        <button className='pointer'>italiana</button>
                        <button className='pointer'>中国人</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
const windowOnClick = () => {
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("language-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}
 */
export default Navbar;