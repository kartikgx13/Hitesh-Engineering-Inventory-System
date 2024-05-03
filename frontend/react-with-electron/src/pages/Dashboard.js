import React, { useState,useEffect } from 'react'
import axios from 'axios';
import VerticalNav from '../components/VerticalNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import KPICards from '../components/KPICards'
import moment from 'moment'
import { faChartArea, faChartLine, faDollarSign, faIndianRupee, faMoneyBill1Wave, faShoppingBasket, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function Dashboard() {
  const [purchase,setPurchase] = useState({})
  const [sales,setSales] = useState({})

  //getting all the sales and purchases record
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

    useEffect(()=>{
      axios.get('http://localhost:8000/api/getpurchases')
              .then(response => {
                  console.log(response.data);
                  setPurchase(response.data)
              })
              .catch(error => {
                  console.error('Error fetching data: ', error);
              })
      },[purchase])
  
  //making methods for each of the KPI cards
  const getSalesRevenue =() =>{
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
      totalSales += sales[i].invoiceAmount * sales[i].quantity;
    }
    return totalSales
  }

  const getPurchaseCost =() =>{
    let totalCost = 0;
    for (let i = 0; i < purchase.length; i++) {
      totalCost += purchase[i].invoiceAmount * purchase[i].quantity;
    }
    return totalCost
  }

  const getTopSellingProduct =()=>{
    let maxCount = 0
    let maxProduct=""
    for (let i = 0; i < sales.length; i++) {
      if(sales[i].quantity>maxCount){
        maxCount=sales[i].quantity
        maxProduct = sales[i].machinePartName
      }
    }
    return maxProduct
  }

  const getAverageOrderValue=()=>{
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
      totalSales += sales[i].invoiceAmount * sales[i].quantity;
    }
    return totalSales/sales.length
  }

  const recentSales = () => {
    const recentSalesArray = [];
    const startIndex = Math.max(sales.length - 4, 0); // Start index for slicing
    for (let i = startIndex; i < sales.length; i++) {
        recentSalesArray.push(sales[i]);
    }
    return recentSalesArray.reverse();
}

const recentPurchases = () => {
    const recentPurchasesArray = [];
    const startIndex = Math.max(purchase.length - 4, 0); // Start index for slicing
    for (let i = startIndex; i < purchase.length; i++) {
        recentPurchasesArray.push(purchase[i]);
    }
    return recentPurchasesArray.reverse();
}
const dateFormat = (date) =>{
  return moment(date).format('DD/MM/YYYY')
}
  return (
    <>
    <div className='w-screen h-screen flex flex-col'>
       <VerticalNav/>
       <div className='w-full h-full flex flex-row justify-between'>
         <div className=' w-56 h-full flex flex-col gap-5 justify-start items-center p-2'>
         <KPICards title="Sales revenue" value={getSalesRevenue()} iconName={faChartLine} iconColor="blue" iconBgColor="bg-sky-200" borderColor="border-blue-700" currencyIconName={faIndianRupee}/>
         <KPICards title="Purchase Cost" value={getPurchaseCost()} iconName={faMoneyBill1Wave} iconColor="green" iconBgColor="bg-green-200" borderColor="border-green-700" currencyIconName={faIndianRupee}/>
         <KPICards title="Gross Profit/Loss" value={getSalesRevenue()-getPurchaseCost()} iconName={faChartArea} iconColor="red" iconBgColor="bg-red-200" borderColor="border-red-700" currencyIconName={faIndianRupee}/>
         <KPICards title="Top Selling" value={getTopSellingProduct()} iconName={faTrophy} iconColor="orange" iconBgColor="bg-orange-200" borderColor="border-orange-400"/>
         <KPICards title="Avg. Order Value" value={getAverageOrderValue()} iconName={faShoppingBasket} iconColor="purple" iconBgColor="bg-purple-200" borderColor="border-purple-700"currencyIconName={faIndianRupee}/>
         </div>
         <div className='w-full h-5/6 flex flex-col m-2 gap-4'>
         <div className='w-full h-5/6 flex flex-col p-3 border-2 rounded-md'>
          <div className='w-full flex flex-row justify-between items-center mb-2'>
          <h1 className='w-full font-semibold text-sm'>Recent Purchases</h1>
          <NavLink to='/purchases' className='text-sm w-1/6 text-right text-sky-500'>+ Add new purchase</NavLink>
          </div>
          <div className='w-full'>
          <table className='w-full m-0'>
      <thead>
        <tr>
      <th className="border-b-2 rounded-tl-lg p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Seller</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Machine Part Name</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Invoice No.</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Invoice Amount</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Invoice Date</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Shipment Date</th>
      <th className="border-b-2 rounded-tr-lg p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Purchase Date</th>

        </tr>
      </thead>
      <tbody>
      {recentPurchases().map((purchase,index)=>(
            <tr key={index}>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{purchase.sellerName}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{purchase.machinePartName}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{purchase.invoiceNumber}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{purchase.invoiceAmount}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{purchase.quantity}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{dateFormat(purchase.invoiceDate)}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{dateFormat(purchase.shipmentDate)}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{dateFormat(purchase.purchaseDate)}</td>
            </tr>
        ))}
      </tbody>
      </table>
          </div>
         </div>
         <div className='w-full h-5/6 flex flex-col p-3 border-2 rounded-md'>
          <div className='w-full flex flex-row justify-between items-center mb-2'>
          <h1 className='w-full font-semibold text-sm'>Recent Sales</h1>
          <NavLink to='/sales' className='text-sm w-1/6 text-right text-sky-500'>+ Add new sale</NavLink>
          </div>
          <div className='w-full'>
          <table className='w-full m-0'>
      <thead>
        <tr>
      <th className="border-b-2 rounded-tl-lg p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Buyer</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Machine Part Name</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Invoice No.</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Invoice Amount</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Invoice Date</th>
      <th className="border-b-2 p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Shipment Date</th>
      <th className="border-b-2 rounded-tr-lg p-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Sale Date</th>

        </tr>
      </thead>
      <tbody>
      {recentSales().map((sale,index)=>(
            <tr key={index}>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sale.buyerName}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sale.machinePartName}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sale.invoiceNumber}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sale.invoiceAmount}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{sale.quantity}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{dateFormat(sale.invoiceDate)}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{dateFormat(sale.shipmentDate)}</td>
                <td className="border-b p-2 border-gray-200 bg-white text-xs">{dateFormat(sale.date)}</td>
            </tr>
        ))}
      </tbody>
      </table>
          </div>
         </div>
         </div>
       </div>
    </div>
    </>
  )
}

export default Dashboard