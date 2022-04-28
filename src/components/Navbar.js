import React from 'react'
import "./Navbar.css"
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import { Badge } from '@material-ui/core';

const Navbar = () => {
  return (
      <div className="Wrapper-Navbar">
          <div className="Left-Navbar">
              <div className="Language">EN</div>
              <div className="SearchContainer">
                <input className="Input"/>
                <Search style={{ color: "gray", fontSize: 16 }}/>
              </div>
          </div>
          <div className="Center-Navbar">
              <h1 className="Logo">DIAMOUND CITY</h1>
          </div>
          <div className="Right-Navbar">
            <div className="MenuItem">REGISTER</div>
            <div className="MenuItem">SIGN IN</div>
            <div className="MenuItem">
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Badge>
            </div>         
          </div>
      </div>
  )
}

export default Navbar
