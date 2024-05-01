import React from 'react'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'
import SalesForm from '../components/SalesForm'

function SalesPage() {
  return (
    <>
    <div className='w-screen h-screen  flex flex-col'>
       <VerticalNav/>
       <div className='w-full h-full'>
        <SalesForm/>
       </div>
    </div>
    </>
  )
}

export default SalesPage