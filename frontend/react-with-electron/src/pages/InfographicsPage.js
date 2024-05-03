import React, { useEffect, useState } from 'react'
import VerticalNav from '../components/VerticalNav'
import axios from 'axios'
import BarChart from '../components/BarChart'

function InfographicsPage() {
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

 const options = {}

 //getting the json data into label and dataset array
 const getQuantityLabel=()=>{
    let allQuantities = [];
    for (let i = 0; i < purchase.length; i++) {
      allQuantities.push(purchase[i].machinePartName) 
    }
    return allQuantities
 }

 const getQuantityDataset=()=>{
    let allQuantitiesData = [];
    for (let i = 0; i < purchase.length; i++) {
      allQuantitiesData.push(purchase[i].quantity)
    }
    return allQuantitiesData
 }

 const barChartData={
    labels:getQuantityLabel(),
    datasets:[
        {
            label:'Quantity',
            data:getQuantityDataset(),
            backgroundColor:'blue',
            borderColor:'black',
            borderWidth:1
        }
    ]
 }
  return (
    <>
    <div className='w-screen h-screen flex flex-col'>
       <VerticalNav/>
       {/*<BarChart options={options} dataset={barChartData}/>*/}
    </div>
    </>
  )
}

export default InfographicsPage