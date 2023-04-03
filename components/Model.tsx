import React, { useCallback } from "react";

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
        <div className=" relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full bg-red-800 lg:h-auto">
            <div className=" h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex  flex-col w-full  outline-none focus:outline-none">
                <div className=" flex items-center justify-between p-10 rounded-t "></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
