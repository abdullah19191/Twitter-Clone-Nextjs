import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo =() => {
    const router = useRouter()
    
    return (
        <div onClick={() => router.push('/')} className=" flex justify-center items-center h-14 w-14 transition rounded-full p-4 hover:bg-blue-300 hover:bg-opacity-10  cursor-pointer">
           <BsTwitter color="white" size={28}/>
        </div>
    );
}

export default SidebarLogo