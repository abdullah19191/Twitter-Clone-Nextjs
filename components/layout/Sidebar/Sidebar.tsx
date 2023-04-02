import React from 'react'
import {BsHouseFill,BsBellFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import SidebarItem from './SidebarItem'
import SidebarLogo from './Sidebarlogo'
import {BiLogOut} from 'react-icons/bi'

const Sidebar = () => {
     const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notification',
            href: '/notification',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/user/123',
            icon: FaUser
        },
        
     ]

    

    return (
    <div>
        <div className=" h-full pr-4 md:pr-6 col-span-1 ">
            <div className=" flex flex-col items-end">
                <div className=" space-y-2 lg:w-[230px]">
                    <SidebarLogo/>
                    {items.map((items) => (
                        <SidebarItem
                        key={items.href}
                        href={items.href}
                        label={items.label}
                        icons={items.icon}
                        />
                    ))}
                    <SidebarItem  onClick={()=>{}} label='Logout'
                        icons={BiLogOut}
                        />
                        <SiderbarTweetButton/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar