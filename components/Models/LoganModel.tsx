import React, { useCallback, useState } from "react";
import useLoganModal from "../../Hooks/useLoginModel";
import Input from "../Input";
import Model from "../Model";

const LoganModel = () => {
  const loginModel = useLoganModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(  async () => {
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
        <Input value={email} disabled={isLoading} placeholder="Email" onCharge={(e) => setEmail(e.target.value)}/>
        <Input value={password} disabled={isLoading} placeholder="Password" onCharge={(e) => setEmail(e.target.value)}/>
    </div>
   )
  return (
    <Model
     disabled={isLoading}
     isOpen={loginModel.isOpen}
     title="Login"
     actionLabel="Sign In"
     onClose={loginModel.onClose}
     onSubmit={onSubmit}
     body={bodyContent}
    />
  )
};

export default LoganModel;
