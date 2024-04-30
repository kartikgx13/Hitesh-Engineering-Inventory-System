import React from 'react'
import { faBook, faCartShopping, faChartLine, faHome, faMoneyBill, faMoneyBillWave, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function VerticalNav() {
  return (
    <>
    <div className=' w-52 bg-slate-100 h-full p-2 flex justify-center items-center shadow-lg'>
      <ul className='w-full flex flex-col h-full justify-center items-center gap-8'>
        <Link to="/" className='flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center w-1/2'><FontAwesomeIcon icon={faHome}/><li>Home</li></Link>
        <Link to="/purchases" className='flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center w-1/2'><FontAwesomeIcon icon={faCartShopping}/><li>Purchase</li></Link>
        <Link to="/sales" className='flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center w-1/2'><FontAwesomeIcon icon={faMoneyBill}/><li>Sales</li></Link>
        <Link to="/bom" className='flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center w-1/2'><FontAwesomeIcon icon={faBook}/><li>BOM</li></Link>
      </ul>
    </div>
    </>
  )
}

export default VerticalNav