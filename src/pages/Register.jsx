import Form from "../components/Form";
import {useEffect}  from "react"

const Register = () => {
  useEffect(() => {
    document.title="Register"
  }, [])
  const fields = [
    {
      name: "Email",
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      name: "Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];
  return (
    <>
      <Form fields={fields} type="Register" />
    </>
  );
};

export default Register;
