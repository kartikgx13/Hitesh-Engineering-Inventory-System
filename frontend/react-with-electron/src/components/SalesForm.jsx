import React, { useState } from 'react'

function SalesForm() {

    const [inputState,setInputState] = useState({
        machinePartName:'',
        quantity:'',
        date:'',
    });

    const {machinePartName,quantity,date} = inputState;
    
    const handleSubmit = e => {
        e.preventDefault()
    }
  return (
    <>
    <div className='w-full h-full flex flex-col justify-start items-start'>
     <h1 className='text-2xl font-bold w-full'>Sales</h1>
     <div className='w-full h-full flex flex-row justify-center items-center gap-4'>
        <h1 className='text-2xl font-bold'>Machine Details</h1>
        <div className='w-1/3 h-full'>
           <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full h-full ml-20'>
                <div className='flex flex-row w-full gap-3 h-1/12 justify-start items-center'>
                    <label htmlFor="machinePartName" className='font-semibold w-1/3'>Machine Name</label>
                    <input type="text" placeholder='Enter machine name' className='w-2/3 m-2 p-2 outline-none border-none rounded shadow-md'/>
                </div>
                <div className='flex flex-row gap-3 w-full h-1/12 justify-start items-center'>
                    <label htmlFor="machinePartName" className='font-semibold w-1/3'>Quantity</label>
                    <input type="text" placeholder='Enter quantity' className='w-2/3 m-2 p-2 outline-none border-none rounded shadow-md'/>
                </div>
                <div className='flex flex-row gap-3 w-full h-1/12 justify-start items-center'>
                <label htmlFor="machinePartName" className='font-semibold w-1/3'>Date</label>
                  <input type="date" required placeholder='Enter date' className='w-2/3 m-2 p-2 outline-none border-none rounded shadow-md'/>
                </div>
                <button className='bg-sky-500 pl-6 pr-6 pt-2 pb-2 rounded-full font-semibold text-white mt-6'>Add Item</button>
           </form>
        </div>
     </div>
    </div>
    </>
  )
}

export default SalesForm