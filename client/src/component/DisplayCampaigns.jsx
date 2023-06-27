import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loader } from '../assets'
import FundCard from './FundCard'

const DisplayCampaigns = ({title,isLoading,campaigns}) => {
    const navigate=useNavigate()
    // console.log({...campaigns[0]})

    const handleNavigate=(campaign)=>{
        navigate(`/campaign-details/${campaign.title}`,{state:campaign});
    }
  return (
   <div>

<h1 className='text-white font-epilogue font-semibold text-[18px] text-left'>{title} -({campaigns.length})</h1>
    <div className='flex flex-wrap  mt-[20px] gap-[26px] '>
        {isLoading && (
            <img src={loader} alt='loader' className='h-[100px] w-[100px] object-contain' />
        )}

        {!isLoading && campaigns.length===0 &&(
            <p className=' text-green-50 font-semibold font-epilogue text-[14px] leading-[14px]'>You Have Created No Campaigns Yet</p>
        )}

        {!isLoading && campaigns.length>0 && (
           campaigns.map((campaign)=>(
            <FundCard  
            key={campaign.id}
            {...campaign}
            handleClick={()=>handleNavigate(campaign)}
             />
           ))

        )}

    </div>
   </div>
  )
}

export default DisplayCampaigns