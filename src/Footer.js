import React from 'react';
import './Footer.css';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
// This is  a initil commit in git fgdfgfdgdfgdfdrgfg

const Footer = () => {
  return (
    <>
       {/* <footer className='w-100 bg-dark text-center sticky-footer'>
        <p> &copy 2022 BuntyTechnical. All Rights Reserved | Terms and Condition </p>
        </footer>  */}
        <footer className='container-fluid'>
         <div className='row'>
          <div className='col-md-9 col-12 mx-auto'>
            <div className='row'>
            <div className='col-4 mx-auto'>
              <div className='footer-about'>
                <h4>Tech Services</h4>
                <h5>we are the real Hero </h5>
              </div>
            </div>
            <div className='col-4 mx-auto'>
              <div className='footer-social'>
                <h4>Follow Us </h4>
                <div className='footer-social--icons'>
                <div><FaDiscord className='icons'></FaDiscord></div>
                <div><FaInstagram className='icons'></FaInstagram></div>
                <div>
                  <a 
                  href='https://www.youtube.com/'
                  target='_blank rel="noreferrer"'>
                  <FaYoutube className='icons'></FaYoutube>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 mx-auto link'>
              <h4>Menu Link</h4>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/service'>Services</a>
                    <a href='/contact'>Contact</a>
              
                    
               </div>
            </div>
          </div>
         </div>  
        </footer>
        </>
  )
}



export default Footer
