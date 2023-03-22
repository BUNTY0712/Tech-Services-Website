import React from 'react'
import about from '../src/images/about.webp'
import Common from './Common'

const About = () => {
  return (
 <>
     <Common name='Welcome to About page of' imgsrc={about} visit="/contact" btname="Contact Now"/>
 </>
  )
}

export default About
