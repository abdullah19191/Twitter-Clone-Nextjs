import React from "react";
import { IconType } from "react-icons";

interface SidebarItemsProps {
    label: string;
    href?: string;
    icons: IconType;
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemsProps> = ({
    label,
    href,
    icons:Icon,
    onClick,
}) => {
    return <div>
      <div className="  flex-col items-center">
        <div className=" relative lg:hidden  justify-center items-center h-14 w-14 transition rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10  cursor-pointer">
            <Icon size={26} color="white"/>
        </div>
        <div className="  hidden relative lg:flex  items-center gap-4  transition rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10  cursor-pointer">
            <Icon size={24} color="white" />
            <p className=" hidden lg:block text-lg text-white">{label}</p>
        </div>
      </div>
    </div>;
};

export default SidebarItem;
