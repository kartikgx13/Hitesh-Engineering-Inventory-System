import React from 'react'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

function Dashboard() {
  return (
    <>
    <div className='w-screen h-screen bg-blue-200 flex flex-col'>
       <HorizontalNav/>
       <VerticalNav/>
    </div>
    </>
  )
}

export default Dashboard