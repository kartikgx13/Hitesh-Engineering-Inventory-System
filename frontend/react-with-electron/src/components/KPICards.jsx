import { faIndianRupee, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function KPICards({title,value,iconName,borderColor,iconBgColor,iconColor,currencyIconName}) {
  return (
    <>
    <div className='w-full p-2 rounded-md flex flex-row justify-between items-center border-2 border-gray-200'>
       <div className='flex flex-row justify-center items-center gap-2'>
        <div className={`border-2 rounded-lg shadow-md h-12 ${borderColor}`}></div>
        <div className='flex flex-col justify-center items-center p-2 gap-2'>
            <div className='w-full h-full text-xs font-semibold text-gray-400'>
                {title}
            </div>
            <div className='w-full h-full text-xs font-semibold flex flex-row gap-2 justify-start items-center'>
                <FontAwesomeIcon icon={currencyIconName}/>
                {value}
            </div>
        </div>
       </div>
       <div className={`flex flex-row justify-center items-center p-2 rounded-md shadow-md ${iconBgColor}`}>
          <FontAwesomeIcon icon={iconName} style={{ color:iconColor,fontSize:'15'}}/>
       </div>
    </div>
    </>
  )
}

export default KPICards