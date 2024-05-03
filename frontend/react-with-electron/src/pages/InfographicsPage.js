import React, { useEffect, useState } from 'react'
import VerticalNav from '../components/VerticalNav'
import axios from 'axios'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
import LineChart from '../components/LineChart'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'

function InfographicsPage() {
  const [purchase, setPurchase] = useState({});
  const [sales, setSales] = useState({});
  
  useEffect(() => {
    // Fetching sales data
    axios.get('http://localhost:8000/api/getsales')
      .then(response => {
        console.log(response.data);
        setSales(response.data);
      })
      .catch(error => {
        console.error('Error fetching sales data: ', error);
      });
  
    // Fetching purchase data
    axios.get('http://localhost:8000/api/getpurchases')
      .then(response => {
        console.log(response.data);
        setPurchase(response.data);
      })
      .catch(error => {
        console.error('Error fetching purchase data: ', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

 const lineChartOptions= {
  maintainAspectRatio:false,
  plugins: {
    title: {
        display: true,
        text: 'Purchase vs Sales'
    }
}
}

const pieChartOptionsSales= {
  maintainAspectRatio:false,
  plugins: {
    title: {
        display: true,
        text: 'Machine name by Sales Amount'
    },
    legend:{
      position:'top',
      align:'start'
    }
}
}

const pieChartOptionsPurchase= {
  maintainAspectRatio:false,
  plugins: {
    title: {
        display: true,
        text: 'Machine name by Purchase Amount'
    },
    legend:{
      position:'top',
      align:'start'
    }
},

}

const barchartOptionsSales= {
  maintainAspectRatio:false,
  plugins: {
    title: {
        display: true,
        text: 'Machine name by Sales Quantity'
    },
    
},
}

const barchartOptionsPurchase= {
  maintainAspectRatio:false,
  plugins: {
    title: {
        display: true,
        text: 'Machine name by Purchase Quantity'
    }
}
}

 //getting the json data into label and dataset array
 const purchaseQuantityLabel = () => {
  let allQuantities = [];
  for (let i = 0; i < purchase.length; i++) {
      let partName = purchase[i].machinePartName;
      if (!allQuantities.some(item => item.partName === partName)) {
          allQuantities.push({ partName, quantity: 0 });
      }
  }
  return allQuantities.map(item => item.partName);
}

const salesQuantityLabel = () => {
  let allQuantities = [];
  for (let i = 0; i < sales.length; i++) {
      let partName = sales[i].machinePartName;
      if (!allQuantities.some(item => item.partName === partName)) {
          allQuantities.push({ partName, quantity: 0 });
      }
  }
  return allQuantities.map(item => item.partName);
}

const purchaseAmountLabel = () => {
  let allAmounts = [];
  for (let i = 0; i < purchase.length; i++) {
      let partName = purchase[i].machinePartName;
      if (!allAmounts.some(item => item.partName === partName)) {
          allAmounts.push({ partName, invoiceAmount: 0 });
      }
  }
  return allAmounts.map(item => item.partName);
}

const salesAmountLabel = () => {
  let allAmounts = [];
  for (let i = 0; i < sales.length; i++) {
      let partName = sales[i].machinePartName;
      if (!allAmounts.some(item => item.partName === partName)) {
          allAmounts.push({ partName, invoiceAmount: 0 });
      }
  }
  return allAmounts.map(item => item.partName);
}

const purchaseQuantityDataset = () => {
  let allQuantitiesData = [];
  for (let i = 0; i < purchase.length; i++) {
      let partName = purchase[i].machinePartName;
      let quantity = purchase[i].quantity;
      let existingIndex = allQuantitiesData.findIndex(item => item.partName === partName);
      if (existingIndex !== -1) {
          allQuantitiesData[existingIndex].quantity += quantity;
      } else {
          allQuantitiesData.push({ partName, quantity });
      }
  }
  return allQuantitiesData.map(item => item.quantity);
}



const salesQuantityDataset = () => {
  let allQuantitiesData = [];
  for (let i = 0; i < sales.length; i++) {
      let partName = sales[i].machinePartName;
      let quantity = sales[i].quantity;
      let existingIndex = allQuantitiesData.findIndex(item => item.partName === partName);
      if (existingIndex !== -1) {
          allQuantitiesData[existingIndex].quantity += quantity;
      } else {
          allQuantitiesData.push({ partName, quantity });
      }
  }
  return allQuantitiesData.map(item => item.quantity);
}

const salesAmountDataset = () => {
  let allAmountsData = [];
  for (let i = 0; i < sales.length; i++) {
      let partName = sales[i].machinePartName;
      let invoiceAmount = sales[i].invoiceAmount;
      let existingIndex = allAmountsData.findIndex(item => item.partName === partName);
      if (existingIndex !== -1) {
          allAmountsData[existingIndex].invoiceAmount += invoiceAmount;
      } else {
          allAmountsData.push({ partName, invoiceAmount });
      }
  }
  return allAmountsData.map(item => item.invoiceAmount);
}

const purchaseAmountDataset = () => {
  let allAmountsData = [];
  for (let i = 0; i < purchase.length; i++) {
      let partName = purchase[i].machinePartName;
      let invoiceAmount = purchase[i].invoiceAmount;
      let existingIndex = allAmountsData.findIndex(item => item.partName === partName);
      if (existingIndex !== -1) {
          allAmountsData[existingIndex].invoiceAmount += invoiceAmount;
      } else {
          allAmountsData.push({ partName, invoiceAmount });
      }
  }
  return allAmountsData.map(item => item.invoiceAmount);
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
  const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
  const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
  const alpha = Math.random().toFixed(1); // Random alpha value between 0 and 1 with one decimal place
  return `rgba(${r},${g},${b},${0.7})`; // Return the rgba color string
}

function generateRandomColorsArray(length) {
  const colorsArray = [];
  for (let i = 0; i < length; i++) {
    colorsArray.push(getRandomColor());
  }
  return colorsArray;
}

 const salesQuantityBarChartData={
    labels:salesQuantityLabel(),
    datasets:[
        {
            label:'Quantity',
            data:salesQuantityDataset(),
            backgroundColor:"rgba(0, 100, 0, 0.8)",
            borderColor:'black',
            borderWidth:1
        }
    ],
    
 }

 const purchaseQuantityBarChartData={
  labels:purchaseQuantityLabel(),
  datasets:[
      {
          label:'Quantity',
          data:purchaseQuantityDataset(),
          backgroundColor:"rgba(135, 206, 235, 0.8)",
          borderColor:'black',
          borderWidth:1
      }
  ],
  legend: {
    display: true,
    labels: {
        color: 'rgb(255, 99, 132)'
    }
}

}

const pieChartPurchaseData={
  labels:purchaseAmountLabel(),
  datasets:[
    {
      label:'Purchase Amount',
      data:purchaseAmountDataset(),
      backgroundColor:generateRandomColorsArray(purchaseAmountLabel().length),
      hoverOffset:4,
      borderWidth:0
    }
  ]
}
const pieChartSalesData={
  labels:salesAmountLabel(),
  datasets:[
    {
      label:'Purchase Amount',
      data:salesAmountDataset(),
      backgroundColor:generateRandomColorsArray(salesAmountLabel().length),
      hoverOffset:4,
      borderWidth:0
    }
  ]
}

const salesArray = Object.values(sales);
const purchaseArray = Object.values(purchase);

// Extract unique dates from sales and purchase data
const uniqueDates = Array.from(new Set([...salesArray.map(item => item.invoiceDate), ...purchaseArray.map(item => item.invoiceDate)]));

// Calculate total invoice amount for each unique date
const dateWiseInvoiceAmounts = uniqueDates.map(date => {
    const totalSalesAmount = salesArray
        .filter(sale => sale.invoiceDate === date)
        .reduce((total, sale) => total + sale.invoiceAmount, 0);

    const totalPurchaseAmount = purchaseArray
        .filter(purchase => purchase.invoiceDate === date)
        .reduce((total, purchase) => total + purchase.invoiceAmount, 0);

        return {
          date,
          totalSalesAmount,
          totalPurchaseAmount
      };
});

const dateFormat = (date) =>{
  return moment(date).format('DD/MM/YYYY')
}

// Separate dates and total invoice amounts into arrays
const dates = dateWiseInvoiceAmounts.map(item => dateFormat(item.date));
const invoiceSalesAmounts = dateWiseInvoiceAmounts.map(item => item.totalSalesAmount);
const invoicePurchaseAmounts = dateWiseInvoiceAmounts.map(item => item.totalPurchaseAmount);




const lineChartData={
  labels:dates,
  datasets:[
    {
      label:'Purchase',
      data:invoicePurchaseAmounts,
      borderColor:'red'
    },
    {
      label:'Sales',
      data:invoiceSalesAmounts,
      borderColor:'green'
    },
  ]
}

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

const getSalesNumber =() =>{
  let totalSales = 0;
  for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i].quantity;
  }
  return totalSales
}

const getPurchaseNumber =() =>{
  let totalCost = 0;
  for (let i = 0; i < purchase.length; i++) {
    totalCost += purchase[i].quantity;
  }
  return totalCost
}
  return (
    <>
    <div className='w-screen h-screen flex flex-col'>
       <VerticalNav/>
       {/*<BarChart options={options} dataset={purchaseQuantityBarChartData}/>*/}
       {/*<PieChart options={options} dataset={pieChartData}/>*/}
       <div className='w-full h-full flex flex-row justify-center items-start gap-4 p-3'>
       <div className='w-1/2 h-5/6 flex flex-col gap-3'>
          <div className='w-full h-1/2 flex justify-center items-center  border-2 shadow-lg p-2 rounded-md'>
               <LineChart options={lineChartOptions} dataset={lineChartData}/>
          </div>
          <div className='w-full h-1/2 flex flex-row justify-center items-center gap-4'>
            <div className='w-1/2 h-full p-2 flex flex-col justify-center items-center border-2 rounded-md shadow-lg'>
            <PieChart options={pieChartOptionsSales} dataset={pieChartSalesData}/>
            <div className='w-full text-sm font-semibold flex flex-row gap-2 justify-end items-center p-2 text-sky-500'>Total sales: <FontAwesomeIcon icon={faIndianRupee}/>{getSalesRevenue()}</div>
            </div>
            <div className='w-1/2 h-full p-2 flex flex-col justify-center items-center border-2 rounded-md shadow-lg'>
            <PieChart options={pieChartOptionsPurchase} dataset={pieChartPurchaseData}/>
            <div className='w-full text-sm font-semibold flex flex-row gap-2 justify-end items-center p-2 text-sky-500'>Total Purchase: <FontAwesomeIcon icon={faIndianRupee}/>{getPurchaseCost()}</div>
            </div>
          </div>
       </div>
       <div className='w-1/2 h-5/6 flex flex-col gap-3'>
          <div className='w-full h-1/2 flex flex-col justify-center items-center  border-2 shadow-lg p-2 rounded-md'>
          <div className='w-full text-sm font-semibold flex flex-row gap-2 justify-end items-center p-2 text-sky-500'>Net Sales Quantity: {getSalesNumber()}</div>
          <BarChart options={barchartOptionsSales} dataset={salesQuantityBarChartData}/>
          </div>
          <div className='w-full h-1/2 flex flex-col justify-center items-center  border-2 shadow-lg p-2 rounded-md'>
          <div className='w-full text-sm font-semibold flex flex-row gap-2 justify-end items-center p-2 text-sky-500'>Total Inventory: {getPurchaseNumber()}</div>
          <BarChart options={barchartOptionsPurchase} dataset={purchaseQuantityBarChartData}/>
          </div>
       </div>
       </div>
    </div>
    </>
  )
}

export default InfographicsPage