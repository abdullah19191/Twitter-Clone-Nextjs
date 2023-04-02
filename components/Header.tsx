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
        <div className="">
            <div className="">
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
            </div>
        </div>
    </div>
  )
}

export default Header