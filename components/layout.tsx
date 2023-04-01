 
import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className=" h-screen  bg-black">
        <div className=" container mx-auto max-w-6xl xl:px-30 h-full">
            <div className=" grid grid-cols-4 h-full  ">
                <div className=" col-span-3 lg:col-span-2 border-x-2 border-neutral-800">
    
        {children}
     

                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout