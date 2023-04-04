import React from 'react'


 interface InputProps {
    placeholder?:string;
    value?:string;
    type?:string;
    disabled?:boolean;
    onCharge:(event:React.ChangeEvent<HTMLInputElement>) => void;

 }

const Input:React.FC<InputProps> = ({
    
}) => {
  return (
    <div>Input</div>
  )
}

export default Input