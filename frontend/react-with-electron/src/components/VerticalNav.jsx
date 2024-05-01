import React from 'react'
import { faBook, faCartShopping, faChartLine, faDashboard, faHome, faMap, faMoneyBill, faMoneyBillWave, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavL, NavLink } from 'react-router-dom'

function VerticalNav() {
  return (
    <>
    <div className=' w-full bg-slate-100 p-4 flex flex-row justify-center items-center shadow-lg'>
      <div className='text-2xl font-bold w-1/6 cursor-pointer'>Hitesh Engineering</div>
      <ul className='w-5/6 flex flex-row h-full justify-end items-center gap-12'>
        <NavLink to="/" className={({isActive})=>{return((isActive ? 'flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faMap}/><li>Dashboard</li></NavLink>
        <NavLink to="/purchases" className={({isActive})=>{return((isActive ? 'flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faCartShopping}/><li>Purchase</li></NavLink>
        <NavLink to="/sales" className={({isActive})=>{return((isActive ? 'flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faMoneyBill}/><li>Sales</li></NavLink>
        <NavLink to="/bom" className={({isActive})=>{return((isActive ? 'flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faBook}/><li>BOM</li></NavLink>
      </ul>
    </div>
    </>
  )
}

export default VerticalNav