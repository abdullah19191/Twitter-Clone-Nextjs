import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi';

interface HeaderProps {
    label:string;
    showBackArrow?:boolean;
}

const Header:React.FC<HeaderProps> = ({label, showBackArrow}) => {
    const router = useRouter();
    
    const handleBack = useCallback(()=>{
        router.back()
    }, [router])
  return (
    <div>
        <div className=" border-b-[1px] border-neutral-700 p-5">
            <div className=" flex flex-row items-center  gap-2">
                {
                    showBackArrow && (
                        <BiArrowBack
                        onClick={handleBack}
                        color='white'
                        size={20}
                        className=" cursor-pointer transition hover:opacity-70"
                        />
                    )
                }
                <h3 className=' text-white text-lg  font-semibold'>{label}</h3>
            </div>
        </div>
    </div>
  )
}

export default Header