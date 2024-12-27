import React from 'react'
import SimpleCards from './components/SimpleCards'
import POS from '/pos.svg'
import ERP from '/erp.svg'
function Products() {
  return (
    <div className='products-p'>
      <div className='product-heading-p'>
      <h2 className='product-heading'>Product Menu</h2>
      </div>
      <div className='products'>
              <SimpleCards />
      </div>
    </div>
  )
}

export default Products
