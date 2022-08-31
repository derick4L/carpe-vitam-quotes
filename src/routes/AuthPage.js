import { useEffect, useState, useContext } from "react";
import AuthForm from "../components/AuthForm";

import { DataContext } from "../App";

const AuthPage = () => {
  const { user } = useContext(DataContext);

  const [docTitle, setDocTitle] = useState("");

  useEffect(() => {
    setDocTitle((document.title = "Authenticate | Quotes to Inspire & Share"));
  }, [docTitle]);

  return (
    <>
      <AuthForm user={user} />
    </>
  );
};
export default AuthPage;
