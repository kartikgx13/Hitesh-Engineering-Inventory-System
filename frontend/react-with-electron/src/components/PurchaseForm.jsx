import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";

function PurchaseForm() {
    const [inputState,setInputState] = useState({
        machinePartName:'',
        invoiceNumber:'',
        userEmail:'',
        quantity:'',
        sellerName:'',
        invoiceDate:'',
        purchaseDate:'',
        invoiceAmount:'',
        shipmentDate:''
    });

    const {machinePartName,invoiceNumber,userEmail,quantity,sellerName,invoiceDate,purchaseDate,invoiceAmount,shipmentDate} = inputState;
    
    const handleChange = e => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/purchases', inputState)
        .then(response => {
            toast.success("Record added successfully");
            console.log(response.data)
        }).catch(error => {
            toast.error(error.message);
            console.error(error)
        })
        setInputState({
        machinePartName:'',
        invoiceNumber:'',
        userEmail:'',
        quantity:'',
        sellerName:'',
        invoiceDate:'',
        purchaseDate:'',
        invoiceAmount:'',
        shipmentDate:''
        })
    }

    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/purchases/${id}`)
            .then(response => {
                toast.success("Record deleted successfully");
                console.log(response.data);
            })
            .catch(error => {
                toast.error(error.message);
                console.error('Error deleting data: ', error);
            })
    }

    const handleUpdate = (id, updatedData) => {
        axios.put(`http://localhost:8000/api/purchases/${id}`, updatedData)
            .then(response => {
                toast.success("Purchase record updated successfully");
                console.log(response.data);
            })
            .catch(error => {
                toast.error(error.message);
                console.error('Error updating data: ', error);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/getpurchases')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }, []);
   
  return (
    <>
    <div className='w-full h-full flex flex-col justify-start items-start'>
     <h1 className='text-1xl font-bold w-full p-2'>Purchases</h1>
     <div className='w-full h-full flex flex-col justify-start items-start gap-4'>
     <div className='border-2 border-gray ml-2 w-5/6 shadow-md'></div>
        <h1 className='text-sm font-semibold p-2'>Purchase Invoice Details</h1>
        <div className='w-full h-full p-2'>
           <form onSubmit={handleSubmit} className="grid items-end gap-6 mb-6 md:grid-cols-3 w-5/6">
  <div className="relative">
        <input required onChange={handleChange} name='sellerName' value={sellerName} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-25 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Seller</label>
    </div>
    <div className="relative">
        <input required onChange={handleChange} name='machinePartName' value={machinePartName} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Machine Name</label>
    </div>
    <div className="relative">
        <input required onChange={handleChange} name='invoiceNumber' value={invoiceNumber} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice No.</label>
    </div>
    <div className="relative">
        <input required onChange={handleChange} name='invoiceDate' value={invoiceDate} type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice Date</label>
    </div>
    <div className="relative">
        <input required onChange={handleChange} name='purchaseDate' value={purchaseDate} type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Purchase Date</label>
    </div>
    <div className="relative">
        <input required onChange={handleChange} name='invoiceAmount' value={invoiceAmount} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice Amount</label>
    </div>
    <div className="relative">
        <input required onChange={handleChange} name='quantity' value={quantity} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Order Quantity</label>
    </div>
    <div className="relative">
        <input required onChange={handleChange} name='userEmail' value={userEmail} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">E-mail</label>
    </div>
    <div className="relative">
        <input required onChange={handleChange} name='shipmentDate' value={shipmentDate} type="date" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Shipment Date</label>
    </div>
                <button className='bg-sky-500 text-xs pl-6 pr-6 pt-2 pb-2 shadow-lg rounded-lg font-semibold text-white mt-6'>Add Purchase</button>
           </form>
        </div>
     </div>
    </div>
    </>
  )
}

export default PurchaseForm