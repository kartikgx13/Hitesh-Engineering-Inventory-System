import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";

function SalesList() {
      //first step we will create a useState hook to store the array object
  const [sales,setSales] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const recordsPerPage = 7
  const lastIndex = currentPage*recordsPerPage
  const firstIndex = lastIndex-recordsPerPage
  const records = sales.slice(firstIndex,lastIndex)
  const npage = Math.ceil(sales.length/recordsPerPage)
  const numbers = [...Array(npage+1).keys()].slice(1)

  function prevPage(){
    if(currentPage!==firstIndex){
      setCurrentPage(currentPage-1)
    }
  }
  function nextPage(){
    if(currentPage!==lastIndex){
      setCurrentPage(currentPage+1)
    }
  }
  function changeCurrentPage(id){
    setCurrentPage(id)
  }

  //next we will get all the purchases through axios
  //now we will use the useEffect hook
  useEffect(()=>{
    axios.get('http://localhost:8000/api/getsales')
            .then(response => {
                console.log(response.data);
                setSales(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    },[sales])
  return (
    <>
    <div className='flex flex-col w-full h-full p-6'>
    <table className='rounded-md shadow-lg'>
      <thead>
        <tr>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Buyer</th>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Machine Part Name</th>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Invoice No.</th>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Invoice Amount</th>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Quantity</th>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
      {records.map((sales,index)=>(
            <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{sales.buyerName}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{sales.machinePartName}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{sales.invoiceNumber}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{sales.invoiceAmount}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{sales.quantity}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">button</td>
            </tr>
        ))}
      </tbody>
    </table>
    <nav className='w-full p-2 mt-6'>
      <ul className='flex flex-row w-full justify-center items-center'>
        <li>
          <a href="#" className='border-2 border-gray p-2' onClick={prevPage}>Prev</a>
        </li>
        {
          numbers.map((n,i)=>(
            <li key={i}>
               <a href="#" className={currentPage===n?' bg-sky-500 shadow-md pt-2 pb-2 pl-4 pr-4':'shadow-md pt-2 pb-2 pl-4 pr-4'} onClick={()=>changeCurrentPage(n)}>{n}</a>
            </li>
          ))
        }
        <li>
        <a href="#" className='border-2 border-gray p-2' onClick={nextPage}>Next</a>
        </li>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default SalesList