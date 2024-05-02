import React from 'react'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'
import BomComponent from '../components/BomComponent'
import BOMList from '../components/BOMList'

function BOMPage() {
  return (
    <>
    <div className='w-screen h-screen flex flex-col'>
       <VerticalNav/>
       <div className='w-full h-full flex flex-row m-0'>
        <BomComponent/> 
        <BOMList/>
       </div>
    </div>
    </>
  )
}

export default BOMPage