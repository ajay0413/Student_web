import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='main'>
      <div className="container ">
        <div className="row">

          <div className="col-4 class">
            <h1>GARDENIA </h1>
            <p className="description">
              Gardenia is a School aimed at creating achievable models to take
              Montessori education to Regular Government Board Schools and end the
              deprivation of the developmental need-based Montessori Education to
              all the children of our country.
            </p>
            <p className="description">
              Gardenia is an initiative from Vruksha - International School of
              Montessori, an Authentic Montessori School Chain.
            </p>

            <div className='icons'>
              <FaFacebook className='icon1' />
              <FaInstagram className='icon1' />
              <FaYoutube className='icon1' />
            </div>

          </div>
          <div className="col-4 class ">
          <h4>Contact Info</h4>
          <div className="container class">
            <div className="row">
              <div className="col-1 circle"><IoHomeSharp /></div>
              <div className="col-11">No-3, Thiruvalluvar Salai, Kumaran Nagar, OMR, Sholinganallur, Chennai, Tamil Nadu 600119</div>
            </div>
            <div className="row"><img src="src/assets/google-map.jfif" alt="" /></div>
            <div className="row">
              <div className="col-1 circle"><MdEmail /></div>
              <div className="col-11">Email: contact@gardeniaschools.com</div>
            </div>
            <div className="row">
              <div className="col-1 circle"><IoMdPhonePortrait /></div>
              <div className="col-11">Phone: +91 79040 010825</div>
            </div>
            
            
          </div>
          </div>
          <div className="col-4 ">
            <h4>NEWSLETTER</h4>
            <p>Please fill your details below & subscribe to our free Newsletter</p>
            <div className="container las">
              <div className="row">
                <div className="col-6"><input type="text" className="form-control" placeholder="Enter your name" /></div>
                <div className="col-6"><input type="text" className="form-control" placeholder="Enter your name" /></div>
              </div><br />
              <div className="row">
                <div className="col"><input type="text" className="form-control" placeholder="Enter your name" /></div>
              </div><br /> <br />
              <div className="row">
                <div className="col"></div>
                <div className="col"><button type="button" class="btn btn-info">SUBSCRIBE</button></div>
              </div>
            </div>



          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
