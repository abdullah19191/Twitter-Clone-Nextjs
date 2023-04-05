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
  const [isLoading, setIsLoading] = useState(false);

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
        value={password}
        disabled={isLoading}
        placeholder="Password"
        onCharge={(e) => setEmail(e.target.value)}
      />
    </div>
  );
  return (
    <Model
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="Register"
      actionLabel="Sign In"
      onClose={registerModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default RegisterModel;
