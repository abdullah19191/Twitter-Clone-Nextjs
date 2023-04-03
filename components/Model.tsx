import React, { useCallback } from "react";
import {AiOutlineClose} from "react-icons/ai"
interface ModelProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Model: React.FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handeleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <div
        className=" justify-center flex items-center bg-neutral-800 bg-opacity-70 outline-none overflow-x-hidden overflow-y-auto z-50 fixed inset-0"
      >
        <div className=" relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
            <div className=" h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black  outline-none focus:outline-none">
                <div className=" flex items-center justify-between p-10 rounded-t">
                    <h3 className=" text-3xl font-semibold text-white" >{title}</h3>
                    <button onClick={handleClose} className=" p-1 ml-auto border-0 text-white hover:opacity-60  transition">
                        <AiOutlineClose color="white" size={20}/>
                        </button>
                </div>
                <div className=" relative p-10 flex-auto ">
                    {body}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
