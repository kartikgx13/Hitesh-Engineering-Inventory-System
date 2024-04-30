import React from 'react'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'
import PurchaseForm from '../components/PurchaseForm'

function PurchasePage() {
  return (
    <>
    <div className='w-screen h-screen bg-blue-200 flex flex-col'>
       <HorizontalNav/>
       <div className='flex flex-row justify-center items-center w-full h-full gap-2'>
       <VerticalNav/>
       <div className='w-full h-full'>
        <PurchaseForm/>
       </div>
       </div>
    </div>
    </>
  )
}

export default PurchasePage