import { Link, useNavigate } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const { fields, type } = props;
  return (
    <>
      <div class="h-screen">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/ "
            class="flex items-center mb-6 text-4xl font-semibold text-[#1D3557]"
          >
            TravelNest
          </Link>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                {type === "Login"
                  ? "Sign in to your account"
                  : "Create new account"}
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                {fields.map((field) => {
                  return (
                    <div>
                      <label
                        for={field.name}
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        {field.name}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder={field.placeholder}
                        required
                      />
                    </div>
                  );
                })}
                <div class={`text-center ${type === "Login" ? "" : "hidden"}`}>
                  <p
                    href="#"
                    class="text-sm font-bold text-primary-600 text-[#1D3557] cursor-pointer"
                  >
                    Forgot password ?
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={()=>{navigate('/')}}
                  class="w-full text-white bg-[#1D3557] hover:bg-primary-700 rounded-lg text-sm px-5 py-2.5 text-center font-bold"
                >
                  {type}
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                  Don’t have an account yet ?{" "}
                  <Link
                    to={`${type === "Login" ? "/register" : "/login"}`}
                    class="font-bold text-[#1D3557] hover:underline"
                  >
                    {type === "Login" ? "Sign up" : "Sign in"}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
