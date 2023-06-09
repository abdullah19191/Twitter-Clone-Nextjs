import React from 'react'
import FollowBar from './layout/FollowBar';
import Sidebar from './layout/Sidebar/Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className=" h-screen  bg-black">
            <div className=" container mx-auto max-w-6xl xl:px-30 h-full">
                <div className=" grid grid-cols-4 h-full  ">
                  <Sidebar/>         
                    <div className=" col-span-3 lg:col-span-2 border-x-2 border-neutral-800">
                        {children}
                    </div>
                    <FollowBar/>
                </div>
            </div>
        </div>
    )
}

export default Layout