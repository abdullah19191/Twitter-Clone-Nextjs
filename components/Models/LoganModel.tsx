import React, { useCallback, useState } from "react";
import useLoganModal from "../../Hooks/useLoginModel";
import Input from "../Input";
import Model from "../Model";
import useRegisterModel from "../../Hooks/useRegisterModel";

const LoganModel = () => {
  const loginModel = useLoganModal();
  const registerModel = useRegisterModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const onToggle = useCallback(()=>{
    if(isLoading){
      return;
    }
    loginModel.onClose();
    registerModel.onOpen();
  },[isLoading,registerModel,loginModel])
  
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      loginModel.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModel]); 
 
  const bodyContent = (
    <div className=" flex flex-col gap-4">
      <Input
        value={email}
        disabled={isLoading}
        placeholder="Email"
        onCharge={(e) => setEmail(e.target.value)}
      />
      <Input
        value={password}
        disabled={isLoading}
        placeholder="Password"
        onCharge={(e) => setEmail(e.target.value)}
      />
    </div>
  );

  const footerContent = (
    <div className=" text-neutral-400 text-center mt-4">
         <p>First time using Twiiter?
            <span onClick={onToggle}  className=" ml-2 text-white 
            cursor-pointer hover:underline">Create an account</span>
         </p>
    </div>
  );
  return (
    <Model
      disabled={isLoading}
      isOpen={loginModel.isOpen}
      title="Login"
      actionLabel="Sign In"
      onClose={loginModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoganModel;
