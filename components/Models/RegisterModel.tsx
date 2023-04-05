import React, { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";
import useRegisterModel from "../../Hooks/useRegisterModel";
import useLoganModal from "../../Hooks/useLoginModel";

const RegisterModel = () => {
  const registerModel = useRegisterModel();
  const loginModel = useLoganModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(()=>{
    if(isLoading){
      return;
    }
    registerModel.onClose();
    loginModel.onOpen();
  },[isLoading,registerModel,loginModel])
  
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      registerModel.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModel]);

  const bodyContent = (
    <div className=" flex flex-col gap-4">
      <Input
        value={email}
        disabled={isLoading}
        placeholder="Email"
        onCharge={(e) => setEmail(e.target.value)}
      />
      <Input
        value={name}
        disabled={isLoading}
        placeholder="Name"
        onCharge={(e) => setName(e.target.value)}
      />
      <Input
        value={username}
        disabled={isLoading}
        placeholder="Username"
        onCharge={(e) => setUsername(e.target.value)}
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
         <p>Already have an account?
            <span onClick={onToggle}  className=" ml-2 text-white cursor-pointer hover:underline">Sign In</span>
         </p>
    </div>
  );
  return (
    <Model
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModel;
