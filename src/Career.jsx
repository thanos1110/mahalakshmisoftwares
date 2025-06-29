import React from 'react'
import CareerCards from './components/CareerCards'
function Career() {
  return (
    
    <div className='career-div'>
      <div className='products-p'>
      <div className='product-heading-p'>
      <h2 className='product-heading'>Training + Internships</h2>
      </div>
      <div className='products'>
              <CareerCards />
      </div>
    </div>
      <p>Please send your resume at </p><p><a href="mailto:mahalakshmisoftwares@email.com">mahalakshmisoftwares@email.com</a></p>
    </div>
  )
}

export default Career
