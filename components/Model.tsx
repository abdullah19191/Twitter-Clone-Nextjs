import React from 'react'

interface ModelProps {
    isOpen?:boolean;
    onClose:() => void;
    onSubmit: () => void;
    title?:string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLabel:string;
    disabled?:boolean;
}

const Model:React.FC<ModelProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
}
) => {
  return (
    <div>

    </div>
  )
}

export default Model