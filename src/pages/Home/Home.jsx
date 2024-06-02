import React from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/ExploreMenu/Exploremenu'
import {useState} from 'react'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'
import OrderPlaced from '../../component/OrderPlaced/OrderPlaced'




const Home = () => {
    const[ category,setCategory]=useState("All");
    
  return (
    
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
     
      
      
    </div>
  )
}

export default Home
