import React from 'react'
import {BsHouseFill,BsBellFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import SidebarItem from './SidebarItem'
import SidebarLogo from './Sidebarlogo'

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
        <div className="">
            <div className="">
                <div className="">
                    <SidebarLogo/>
                    {items.map((items) => (
                        <SidebarItem
                        key={items.href}
                        href={items.href}
                        label={items.label}
                        icon={items.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar