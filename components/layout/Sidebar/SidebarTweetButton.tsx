import { useRouter } from 'next/router'
import React from 'react'
import {FaFeather} from 'react-icons/fa'
const SidebarTweetButton = () =>{
    const router = useRouter()
  return (
    <div onClick={()=> router.push('/')}> 
<div className=" rounded-full bg-blue-400 flex items-center justify-center w-14 h-14">
    <FaFeather size={24} color='white'/>
</div>
    </div>
  )
}

export default SidebarTweetButton