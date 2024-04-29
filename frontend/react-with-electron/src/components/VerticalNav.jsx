import React from 'react'
import { faBook, faCartShopping, faChartLine, faHome, faMoneyBill, faMoneyBillWave, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function VerticalNav() {
  return (
    <>
    <div className=' w-52 bg-slate-100 h-full p-2 flex justify-center items-center shadow-lg'>
      <ul className='w-full flex flex-col h-full justify-center items-center gap-8'>
        <li className='flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center w-1/2'><FontAwesomeIcon icon={faHome}/>Home</li>
        <li className='flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center w-1/2'><FontAwesomeIcon icon={faCartShopping}/>Purchase</li>
        <li className='flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center w-1/2'><FontAwesomeIcon icon={faMoneyBill}/>Sales</li>
        <li className='flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center w-1/2'><FontAwesomeIcon icon={faBook}/>BOM</li>
      </ul>
    </div>
    </>
  )
}

export default VerticalNav