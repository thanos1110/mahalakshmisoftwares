import React from 'react'
import BGAbout from '/BGAbout.svg'
function About() {
  return (
    <div className='about'>
      <div className='bg-img'>
        <img src={BGAbout} alt="bg about" />
      </div>
      <div className='about-para-div'>
        <h2>About Our Products</h2>
        <p>Target Audience : Our Target Audience is Retailers and Whole sellers of Clothing , Foot wears, And Electronics.</p>

        <p>Full Setup is Offline, and only Requires Internet when required Support or when company owner require access. </p>

        <p>Our Billing Application Provides Realtime Data on the Shop Owners Phone via  Sonic Owner Application. [Requires internet Access]</p>
      </div>
    </div>
  )
}

export default About
