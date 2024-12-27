import React from 'react'
import ContactImg from '/contactus.svg'
function Contact() {
  return (
    <div id="left-right-parent">
    <div id="left">
     <div className='img-div'>
       <img src={ContactImg} alt="" className='contact-img' />
     </div>
     </div>
     <div id="right">
       <div className='contact-col'>
       <h2 className='contact-heading con-col-mem'>Contact Us Now</h2>
       <h3 className='con-col-mem'>Phone</h3>
       <p><a href="mailto:mahalakshmisoftawres1@gmail.com" className='con-col-mem con-bor'>mahalakshmisoftawres1@gmail.com</a></p>
       <h3 className='con-col-mem'>Email</h3>
       <p><a href="" className='con-col-mem con-bor'>+91 7666133386</a></p>
       </div>
    </div>
   </div>
  )
}

export default Contact
