import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFileExcel, faFileExport, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import { toast } from "react-toastify";
import {utils,writeFile} from 'xlsx';

function BOMList() {
    //first step we will create a useState hook to store the array object
    const [boms,setBoms] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const recordsPerPage = 8
    const lastIndex = currentPage*recordsPerPage
    const firstIndex = lastIndex-recordsPerPage
    const records = boms.slice(firstIndex,lastIndex)
    const npage = Math.ceil(boms.length/recordsPerPage)
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
          title: 'BOM Summary',
          text: message,
          icon: 'info',
          buttons: false
      });
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
          axios.get('http://localhost:8000/api/getbom')
              .then(response => {
                  console.log(response.data);
                  setBoms(response.data)
              })
              .catch(error => {
                  console.error('Error fetching data: ', error);
              })
      } else {
          swal("Cancelled", "Your record is safe :)", "info");
      }
  }
    const handleDelete = id => {
      axios.delete(`http://localhost:8000/api/bom/${id}`)
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
      axios.get('http://localhost:8000/api/getbom')
              .then(response => {
                  console.log(response.data);
                  setBoms(response.data)
              })
              .catch(error => {
                  console.error('Error fetching data: ', error);
              })
      },[])
  
      const handleExport = () => {
        const wb = utils.book_new();
        const ws = utils.json_to_sheet(boms);
        utils.book_append_sheet(wb, ws, "PurchaseRecord");
        writeFile(wb, "PurchaseExcel.xlsx");
    }
    function calculateTotalInvoiceAmount(parts) {
      let total = 0;
      parts.forEach(part => {
          total += part.invoiceAmount || 0;
      });
      return total;
  }
  return (
    <>
    <div className='flex flex-col w-full h-full p-4'>
    <table className='rounded-lg shadow-lg'>
      <thead>
      <tr>
      <th className="p-2 rounded-tl-lg border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Machine Name</th>
      <th className="p-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Invoice No.</th>
      <th className="p-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Composition</th>
      <th className="p-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Amount</th>
      <th className="p-2 rounded-tr-lg border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
      {records.map((bom,index)=>(
            <tr key={index}>
                <td className="p-2 border-b border-gray-200 bg-white text-xs">{bom.machineName}</td>
                <td className="p-2 border-b border-gray-200 bg-white text-xs">{bom.invoiceNumber}</td>
                <td className="p-2 border-b border-gray-200 bg-white text-xs">
                <ul className='flex flex-col gap-2 list-disc'>
                     {bom.parts.map((part, index) => (
                         <li key={index}>
                             {part.partName.machinePartName} : {part.quantity}
                         </li>
                     ))}
               </ul>
                </td>
                <td className="p-2 border-b border-gray-200 bg-white text-xs">{calculateTotalInvoiceAmount(bom.parts)}</td>
                <td className="p-2 border-b border-gray-200 bg-white text-xs">
                  <FontAwesomeIcon icon={faTrash} className='m-2 cursor-pointer' style={{ color: 'red',fontSize:'10' }} onClick={() => deleteProduct(bom._id)}/>
                  <FontAwesomeIcon icon={faEye} className='m-2 cursor-pointer' style={{ color: 'green',fontSize:'10' }} onClick={() => displayKeyValuePairs(bom)}/>
                </td>
            </tr>
        ))}
      </tbody>
    </table>
    <nav className='w-full p-1 mt-4 flex flex-row justify-between items-center'>
      <ul className='flex flex-row w-full justify-start items-center'>
        <li>
          <a href="#" className='border-2 border-gray p-1 text-xs' onClick={prevPage}>Prev</a>
        </li>
        {
          numbers.map((n,i)=>(
            <li key={i}>
               <a href="#" className={currentPage===n?' border-2 border-gray bg-sky-500 pt-1 pb-1 pl-2 pr-2 text-xs':'border-2 border-gray text-xs pt-1 pb-1 pl-2 pr-2'} onClick={()=>changeCurrentPage(n)}>{n}</a>
            </li>
          ))
        }
        <li>
        <a href="#" className='border-2 border-gray p-1 text-xs' onClick={nextPage}>Next</a>
        </li>
      </ul>
      <div className='flex flex-row justify-end items-center w-full gap-3'>
        <button onClick={handleExport} className='text-sm font-semibold flex flex-row justify-center items-center gap-2 rounded-md shadow-md p-2'>Export<FontAwesomeIcon icon={faFileExcel} style={{color:'green',fontSize:'15'}}/></button>
      </div>
    </nav>
    </div>
    </>
  )
}

export default BOMList