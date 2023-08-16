import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { useForm } from "react-hook-form";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    dispatch(
      login({
        name: data.name,
        email: data.email,
        password: data.password,
        loggedIn: true,
      })
    );
    console.log(data.name, data.email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[415px] mx-auto overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200"
      >
        <div className="p-6">
          <header className="mb-4 text-center">
            <h3 className="text-xl font-medium text-slate-700">Login</h3>
          </header>
          <div className="flex flex-col">
            <div className="relative my-6">
              <input
                id="email"
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Your email"
                required
                className={`relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white ${errors.email ? "invalid:border-pink-500" : ""} focus:border-emerald-500 focus:outline-none ${errors.email ? "invalid:focus:border-pink-500" : ""} disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
              />
              <label
                htmlFor="email"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your email
              </label>
              {errors.email && (
                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                  <span>Type your email address</span>
                </small>
              )}
            </div>
            <div className="relative my-6">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", { required: true })}
                placeholder="Your password"
                required
                className={`relative w-full h-10 px-4 pr-12 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white ${errors.password ? "invalid:border-pink-500" : ""} focus:border-emerald-500 focus:outline-none ${errors.password ? "invalid:focus:border-pink-500" : ""} disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 right-4 h-5 w-5 stroke-slate-400 cursor-pointer peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </svg>
              <label
                htmlFor="password"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Type your password
              </label>
              {errors.password && (
                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                  <span>Type your password</span>
                </small>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end p-6 -mt-5">
          <button
            type="submit"
            className="btn border-0 inline-flex items-center justify-center bg-blue-600  w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-success disabled:cursor-not-allowed disabled:borde"
          >
            <span>Login</span>
          </button>
        </div>
        <div className="-mt-1 text-center text-md transition text-slate-400 peer-invalid:text-pink-500">
          Create New Account
          <Link className="ml-1 text-success font-semibold" to="/signup">
            Sign UP
          </Link>
        </div>
        <p className="text-red-600 text-center mt-4">
          <small>{error}</small>
        </p>
        <div className="w-full px-6 flex items-center text-center mx-auto py-5">
          <hr className="flex-1 border-t border-slate-200" />
          <span className="my-0 mx-[10px] font-bold text-slate-400">or</span>
          <hr className="flex-1 border-t border-slate-200" />
        </div>
        <div className="flex items-center justify-center gap-[6px] w-ful; mx-6 h-[50px] border bg-blue-200 hover:bg-blue-500 border-slate-200 rounded-md cursor-pointer">
          <FaGoogle className="w-8 h-8 rounded-md"></FaGoogle>
          <span>Continue with Google</span>
        </div>
      </form>
    </section>
  );
};

export default Login;
