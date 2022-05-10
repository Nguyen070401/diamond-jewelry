import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Left-Footer">
          <h1 className="Logo-Footer">DIAMOUND CITY.</h1>
          <p className="Desc-Footer">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </p>
          <div className="SocialContainer">
              <div className="SocialIcon" color="3B5999">
                  <Facebook/>
              </div>
              <div className="SocialIcon" color="E4405F">
                  <Instagram/>
              </div>
              <div className="SocialIcon" color="55ACEE">
                  <Twitter/>
              </div>
              <div className="SocialIcon" color="E60023">
                  <Pinterest/>
              </div>
          </div>
        </div>

        <div className="Center-Footer">
          <h3 className="Title-Footer">Useful Links</h3>
          <ul className="List">
          <li className="ListItem">Home</li>
            <li className="ListItem">Cart</li>
            <li className="ListItem">Man Fashion</li>
            <li className="ListItem">Woman Fashion</li>
            <li className="ListItem">Accessories</li>
          </ul>
        </div>

        <div className="Center2-Footer">
          <h3 className="Title-Footer">Another Links</h3>
          <ul className="List">
            <li className="ListItem">My Account</li>
            <li className="ListItem">Order Tracking</li>
            <li className="ListItem">Wishlist</li>
            <li className="ListItem">Wishlist</li>
            <li className="ListItem">Terms</li>
          </ul>
        </div>



        <div className="Right-Footer">
        <h3 className="Title-Footer">Contact</h3>
          <div className="ContactItem">
            <Room style={{marginRight:"10px"}}/> 311 Nguyen Thien Thuat , Quan 1 Viet Nam
          </div>
          <div className="ContactItem">
            <Phone style={{marginRight:"10px"}}/> +1 538 677 859
          </div>
          <div className="ContactItem">
            <MailOutline style={{marginRight:"10px"}} /> contact@diamound.city
          </div>
          <img className="Payment" alt="" src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
      <div className='bottom'>
        <p>@Copyright 2019. All Right Reserved</p>

        <ul>
            <li>
                <Link to="/chinh-sach-bao-mat">Privacy Policy</Link>
            </li>
            <li>
                <Link to="/dieu-khoan-va-dieu-kien">Terms & Conditions</Link>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Footer
