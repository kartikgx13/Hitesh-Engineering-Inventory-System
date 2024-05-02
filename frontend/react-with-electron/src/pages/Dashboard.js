import React, { useState,useEffect } from 'react'
import axios from 'axios';
import VerticalNav from '../components/VerticalNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import KPICards from '../components/KPICards'
import { faChartArea, faChartLine, faDollarSign, faIndianRupee, faMoneyBill1Wave, faShoppingBasket, faTrophy } from '@fortawesome/free-solid-svg-icons'

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
  
  return (
    <>
    <div className='w-screen h-screen flex flex-col'>
       <VerticalNav/>
       <div className='w-full h-full flex flex-row justify-between'>
         <div className=' w-56 h-full flex flex-col gap-4 justify-start items-center p-2'>
         <KPICards title="Sales revenue" value={getSalesRevenue()} iconName={faChartLine} iconColor="blue" iconBgColor="bg-sky-200" borderColor="border-blue-700" currencyIconName={faIndianRupee}/>
         <KPICards title="Purchase Cost" value={getPurchaseCost()} iconName={faMoneyBill1Wave} iconColor="green" iconBgColor="bg-green-200" borderColor="border-green-700" currencyIconName={faIndianRupee}/>
         <KPICards title="Gross Profit/Loss" value={getSalesRevenue()-getPurchaseCost()} iconName={faChartArea} iconColor="red" iconBgColor="bg-red-200" borderColor="border-red-700" currencyIconName={faIndianRupee}/>
         <KPICards title="Top Selling" value={getTopSellingProduct()} iconName={faTrophy} iconColor="orange" iconBgColor="bg-orange-200" borderColor="border-orange-400"/>
         <KPICards title="Avg. Order Value" value={getAverageOrderValue()} iconName={faShoppingBasket} iconColor="purple" iconBgColor="bg-purple-200" borderColor="border-purple-700"currencyIconName={faIndianRupee}/>
         </div>
       </div>
    </div>
    </>
  )
}

export default Dashboard