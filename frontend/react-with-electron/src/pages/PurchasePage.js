import React from 'react'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

function PurchasePage() {
  return (
    <>
    <div className='w-screen h-screen flex flex-col bg-blue-300'>
        <HorizontalNav/>
        <div className='w-full h-full flex flex-row'>
           <VerticalNav/>
           <div className='w-full h-full'>
                
           </div>
        </div>
    </div>
    </>
  )
}

export default PurchasePage