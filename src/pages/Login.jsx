import Form from "../components/Form";
import {useEffect}  from "react"

const Login = () => {
  useEffect(() => {
    document.title="Login"
  }, [])
  
    const fields = [
        {
            name: 'Email',
            type: 'email',
            placeholder: 'Enter your email address'
        },
        {
            name: 'Password',
            type: 'password',
            placeholder: 'Enter your password'
        }
    ]
  return (
    <>
      <Form fields={fields} type ="Login"/>
    </>
  );
};
export default Login;
