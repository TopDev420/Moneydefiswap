import React, { useState } from "react";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
    SubMenu,
} from "react-pro-sidebar";

import { FaTractor, FaExchangeAlt, FaFacebook, FaPinterest, FaYoutubeSquare, FaInstagramSquare, FaRegSun } from "react-icons/fa";
import { BiCategory, BiHome } from "react-icons/bi";

import Inflatable from '../assets/img/inflatable.svg'

import "react-pro-sidebar/dist/css/styles.css";
import '../assets/css/sidebar.css'


//import sidebar css from react-pro-sidebar module and our custom css 

const Sidebar = (props) => {
    const bg1 = '#E0B000'
    const bg2 = '#151C2F'
    const bg3 = '#FFF4CA'

    return (
        <div id="sidbar">
            <ProSidebar collapsed={props.collapsed}>
                <SidebarContent style={props.theme ? { backgroundColor: props.collapsed ? bg1 : bg2 } : { backgroundColor: bg3 }}>
                    <Menu iconShape="square" style={{ backgroundColor: props.collapsed ? bg1 : props.theme ? bg2 : bg3 }}>
                        <MenuItem active={true} icon={<BiHome />}>
                            Home
                        </MenuItem>
                        <SubMenu icon={<FaExchangeAlt />} title='Trade/Exchange' style={{ color: props.theme ? 'white' : 'black !important' }}>
                            <MenuItem>Trade</MenuItem>
                            <MenuItem>Liquidity</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FaTractor />} style={{ color: props.theme ? 'white' : 'black' }}>
                            Farm
                        </MenuItem>
                        <MenuItem icon={<img src={Inflatable} />} style={{ color: props.theme ? 'white' : 'black' }}>
                            Pool
                        </MenuItem>
                        <SubMenu icon={<BiCategory />} title='More' style={{ color: props.theme ? 'white' : 'black' }}>
                            <MenuItem>Moneydefi Website</MenuItem>
                            <MenuItem>Poocoin Chart</MenuItem>
                            <MenuItem>Token Contract Address</MenuItem>
                            <MenuItem>Product</MenuItem>
                            <MenuItem>Dex Tool</MenuItem>
                            <MenuItem>Audit</MenuItem>
                        </SubMenu>
                    </Menu>
                    <div className="justify-content-around others" style={{ display: props.collapsed ? 'none' : 'flex' }}>
                        <div className="d-flex">
                            <label className="switch" >
                                <input type="checkbox" onClick={props.themeToggle} />
                                <span className="slider round"></span>
                            </label>
                            <div><FaRegSun className="other-connect-icon pointer" /></div>
                        </div>
                        <div className="d-flex other-connect">
                            <a><FaFacebook className="other-connect-icon pointer" /></a>
                            <a><FaInstagramSquare className="other-connect-icon pointer" /></a>
                            <a><FaPinterest className="other-connect-icon pointer" /></a>
                            <a><FaYoutubeSquare className="other-connect-icon pointer" /></a>
                        </div>
                    </div>
                </SidebarContent>
            </ProSidebar>
        </div >
    )
}

export default Sidebar;