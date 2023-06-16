import Form from "../components/Form";

const Login = () => {
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
