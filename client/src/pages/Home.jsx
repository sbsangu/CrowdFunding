import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context'
import DisplayCampaigns from '../component/DisplayCampaigns'

const Home = () => {

  const [isLoading,setIsLoading]=useState(false)
  const [campaigns,setCampaigns]=useState([])
  const {contract,address,getCampaigns}=useStateContext();

  const fetchCampaigns=async()=>{
   setIsLoading(isLoading)
   const data=await getCampaigns();
   setCampaigns(data);
   setIsLoading(false)

  }

  useEffect(() => {
    if(contract){
      fetchCampaigns();
    }
  }, [address,contract])
  
  return (
   <DisplayCampaigns 
title="All Campaigns"
isLoading={isLoading}
campaigns={campaigns}

   />
  )
}

export default Home