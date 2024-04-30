import React, { useState } from 'react'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'
import PurchaseForm from '../components/PurchaseForm'
import PurchaseList from '../components/PurchaseList'

function PurchasePage() {
  const [toggleForm,setToggleForm]= useState(true)
  const toggleComponent = ()=>{
    setToggleForm(!toggleForm)
  }
  return (
    <>
    <div className='w-screen h-screen bg-blue-200 flex flex-col'>
       <HorizontalNav/>
       <div className='flex flex-row justify-center items-center w-full h-full gap-2'>
       <VerticalNav/>
       <div className='w-full h-full flex flex-col'>
        {toggleForm ? <PurchaseForm/> : <PurchaseList/>}
        <div className='w-full flex p-8 justify-end items-center'>
          <button onClick={toggleComponent} className='bg-sky-500 pl-6 pr-6 pt-2 pb-2 rounded-full font-semibold text-white mt-6'>Show Purchases</button>
        </div>
       </div>
       </div>
    </div>
    </>
  )
}

export default PurchasePage