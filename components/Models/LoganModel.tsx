import React, { useCallback, useState } from "react";
import useLoganModal from "../../Hooks/useLoginModel";

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
  return <div>LoganModel</div>;
};

export default LoganModel;
