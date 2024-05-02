import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from "sweetalert";
import { toast } from "react-toastify";

function SalesList() {
      //first step we will create a useState hook to store the array object
  const [sales,setSales] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const recordsPerPage = 3
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

  const deleteProduct = async (id) => {
    const willDelete = await swal({
        title: 'Do you really want to delete the record?',
        icon: 'warning',
        dangerMode: true,
        buttons: ['Cancel', 'Delete'],
    });
    
    if (willDelete) {
        handleDelete(id);
        swal("Deleted!", "Your record has been deleted!", "success");
        axios.get('http://localhost:8000/api/getsales')
            .then(response => {
                console.log(response.data);
                setSales(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    } else {
        swal("Cancelled", "Your record is safe :)", "info");
    }
}

function formatKey(key) {
  // Split camelCase into words
  const words = key.split(/(?=[A-Z])/);
  // Capitalize the first letter of each word and join them with space
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const displayKeyValuePairs = (data) => {
  let message = '';
  const keys = Object.keys(data);
  for (let i = 1; i < keys.length - 1; i++) {
      const key = keys[i];
      const formattedKey = formatKey(key);
      const value = data[key];
      message += `${formattedKey}: ${value}\n`;
  }
  swal({
      title: 'Sales Summary',
      text: message,
      icon: 'info',
      buttons: false
  });
}
  const handleDelete = id => {
    axios.delete(`http://localhost:8000/api/sales/${id}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            toast.error(error.message);
            console.error('Error deleting data: ', error);
        })
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
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Buyer</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Machine Part Name</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Invoice No.</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Invoice Amount</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Quantity</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
      {records.map((sales,index)=>(
            <tr key={index}>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sales.buyerName}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sales.machinePartName}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sales.invoiceNumber}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sales.invoiceAmount}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sales.quantity}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">
                  <FontAwesomeIcon icon={faTrash} className='m-2 cursor-pointer' style={{ color: 'red',fontSize:'10' }} onClick={() => deleteProduct(sales._id)}/>
                  <FontAwesomeIcon icon={faEye} className='m-2 cursor-pointer' style={{ color: 'green',fontSize:'10' }} onClick={() => displayKeyValuePairs(sales)}/>
                </td>
            </tr>
        ))}
      </tbody>
    </table>
    <nav className='w-full p-1 mt-4'>
      <ul className='flex flex-row w-full justify-center items-center text-xs'>
        <li>
          <a href="#" className='border-2 border-gray p-1' onClick={prevPage}>Prev</a>
        </li>
        {
          numbers.map((n,i)=>(
            <li key={i}>
               <a href="#" className={currentPage===n?'border-2 border-gray text-xs bg-sky-500 shadow-md pt-1 pb-1 pl-2 pr-2':'border-2 border-gray text-xs shadow-md pt-1 pb-1 pl-2 pr-2'} onClick={()=>changeCurrentPage(n)}>{n}</a>
            </li>
          ))
        }
        <li>
        <a href="#" className='border-2 border-gray p-1 text-xs' onClick={nextPage}>Next</a>
        </li>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default SalesList