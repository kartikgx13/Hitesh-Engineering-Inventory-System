import React from 'react'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'
import SalesForm from '../components/SalesForm'
import SalesList from '../components/SalesList'

function SalesPage() {
  return (
    <>
    <div className='w-screen h-screen  flex flex-col'>
       <VerticalNav/>
       <div className='w-full h-full flex flex-row m-0'>
        <SalesForm/>
        <SalesList/>
       </div>
    </div>
    </>
  )
}

export default SalesPage