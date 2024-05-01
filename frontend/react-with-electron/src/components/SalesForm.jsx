import React, { useState,useEffect } from 'react'
import axios from 'axios';

function SalesForm() {
    const [inputState,setInputState] = useState({
        machinePartName:'',
        quantity:'',
        date:'',
    });

    const {machinePartName,quantity,date} = inputState;
    
    const handleChange = e => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/sales', inputState)
        .then(response => {
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })
    }
   
  return (
    <>
    <div className='w-1/2 h-full flex flex-col justify-start items-start'>
     <h1 className='text-2xl font-bold w-full p-4'>Sales</h1>
     <div className='w-full h-full flex flex-col justify-start items-start gap-4'>
     <div className='border-2 border-gray ml-4 w-2/3 shadow-md'></div>
        <h1 className='text-1xl font-semibold p-4'>Sales Invoice Details</h1>
        <div className='w-full h-full p-4'>
           <form onSubmit={handleSubmit} className="grid items-end gap-6 mb-6 md:grid-cols-3 w-2/3 h-1/2">
  <div className="relative">
        <input required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Buyer</label>
    </div>
    <div className="relative">
        <input required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Machine Name</label>
    </div>
    <div className="relative">
        <input required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice No.</label>
    </div>
    <div className="relative">
        <input required type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice Date</label>
    </div>
    <div className="relative">
        <input required type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Sale Date</label>
    </div>
    <div className="relative">
        <input required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice Amount</label>
    </div>
    <div className="relative">
        <input required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Order Quantity</label>
    </div>
    <div className="relative">
        <input required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">E-mail</label>
    </div>
    <div className="relative">
        <input required type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Shipment Date</label>
    </div>
                <button className='bg-sky-500 pl-6 pr-6 pt-2 pb-2 shadow-lg rounded-full font-semibold text-white mt-6'>Add Sales</button>
           </form>
        </div>
     </div>
    </div>
    </>
  )
}

export default SalesForm
