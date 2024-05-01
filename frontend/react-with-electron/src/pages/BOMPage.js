import React from 'react'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'
import BomComponent from '../components/BomComponent'

function BOMPage() {
  return (
    <>
    <div className='w-screen h-screen flex flex-col'>
       <VerticalNav/>
       <div className='w-full h-full flex flex-row m-0'>
        <BomComponent/> 
       </div>
    </div>
    </>
  )
}

export default BOMPage