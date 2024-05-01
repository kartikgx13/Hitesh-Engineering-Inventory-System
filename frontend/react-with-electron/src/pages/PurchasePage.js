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
    <div className='w-screen h-screen flex flex-col'>
       <VerticalNav/>
       <div className='w-full h-full flex flex-row m-0'>
       <PurchaseForm/> 
       <PurchaseList/>
       </div>
    </div>
    </>
  )
}

export default PurchasePage