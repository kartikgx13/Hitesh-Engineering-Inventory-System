import React from 'react'
import { faBook, faCartShopping, faChartLine, faChartPie, faCodeFork, faDashboard, faDiagramNext, faDraftingCompass, faFileAlt, faFileCode, faHome, faMap, faMoneyBill, faMoneyBillWave, faPencilRuler, faProjectDiagram, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavL, NavLink } from 'react-router-dom'

function VerticalNav() {
  return (
    <>
    <div className=' w-full bg-slate-100 p-2 flex flex-row justify-center items-center shadow-lg'>
      <div className='flex flex-row justify-start items-center'>
      <img src="/logo.png" alt="logo" className='w-1/3 h-1/12 rounded-lg shadow-lg cursor-pointer'/>
      </div>
      <ul className='w-5/6 flex flex-row h-full justify-end items-center gap-12 mr-4'>
        <NavLink to="/" className={({isActive})=>{return((isActive ? ' text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faMap}/><li>Dashboard</li></NavLink>
        <NavLink to="/purchases" className={({isActive})=>{return((isActive ? 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faCartShopping}/><li>Purchase</li></NavLink>
        <NavLink to="/sales" className={({isActive})=>{return((isActive ? 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faMoneyBill}/><li>Sales</li></NavLink>
        <NavLink to="/bom" className={({isActive})=>{return((isActive ? 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faProjectDiagram}/><li>BOM</li></NavLink>
        <NavLink to="/infographics" className={({isActive})=>{return((isActive ? 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center bg-slate-300 p-2 rounded-md box-border shadow-md' : 'text-sm flex font-semibold cursor-pointer flex-row gap-3 m-0 justify-start items-center box-border'));}}><FontAwesomeIcon icon={faChartPie}/><li>Infographics</li></NavLink>
      </ul>
    </div>
    </>
  )
}

export default VerticalNav