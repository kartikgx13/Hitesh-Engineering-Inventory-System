import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function SalesForm() {
    const [inputState,setInputState] = useState({
        machinePartName:'',
        quantity:'',
        buyerName:'',
        invoiceNumber:'',
        invoiceDate:'',
        invoiceAmount:'',
        userEmail:'',
        shipmentDate:'',
        date:''
    });

    const {machinePartName,quantity,date,buyerName,invoiceNumber,invoiceDate,invoiceAmount,userEmail,shipmentDate} = inputState;
    
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
            toast.success("Record successfully added")
            console.log(response.data)
        }).catch(error => {
            toast.info("Not enough stocks to sell")
            console.error(error)
        })
        setInputState({
        machinePartName:'',
        quantity:'',
        buyerName:'',
        invoiceNumber:'',
        invoiceDate:'',
        invoiceAmount:'',
        userEmail:'',
        shipmentDate:'',
        date:''
        })
    }
   
  return (
    <>
    <div className='w-3/4 h-full flex flex-col justify-start items-start'>
     <h1 className='text-1xl font-bold w-full p-2'>Sales</h1>
     <div className='w-full h-full flex flex-col justify-start items-start gap-4'>
     <div className='border-2 border-gray ml-2 w-2/3 shadow-md'></div>
        <h1 className='text-sm font-semibold p-2'>Sales Invoice Details</h1>
        <div className='w-full h-full p-2'>
           <form onSubmit={handleSubmit} className="grid items-end gap-6 mb-6 md:grid-cols-3 w-2/3">
  <div className="relative">
        <input onChange={handleChange} value={buyerName} name="buyerName" required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Buyer</label>
    </div>
    <div className="relative">
        <input onChange={handleChange} value={machinePartName} name="machinePartName" required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Machine Name</label>
    </div>
    <div className="relative">
        <input onChange={handleChange} value={invoiceNumber} name="invoiceNumber" required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice No.</label>
    </div>
    <div className="relative">
        <input onChange={handleChange} value={invoiceDate} name="invoiceDate" required type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice Date</label>
    </div>
    <div className="relative">
        <input onChange={handleChange} value={date} name="date" required type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Sale Date</label>
    </div>
    <div className="relative">
        <input onChange={handleChange} value={invoiceAmount} name="invoiceAmount" required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice Amount</label>
    </div>
    <div className="relative">
        <input onChange={handleChange} value={quantity} name="quantity" required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Order Quantity</label>
    </div>
    <div className="relative">
        <input onChange={handleChange} value={userEmail} name="userEmail" required type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">E-mail</label>
    </div>
    <div className="relative">
        <input onChange={handleChange} value={shipmentDate} name="shipmentDate" required type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Shipment Date</label>
         </div>
                <button className='bg-sky-500 text-xs pl-6 pr-6 pt-2 pb-2 shadow-lg rounded-lg font-semibold text-white mt-6'>Add Sales</button>
           </form>
        </div>
     </div>
    </div>
    </>
  )
}

export default SalesForm
