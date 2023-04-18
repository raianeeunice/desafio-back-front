import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import ErrorComponent from "../components/error/ErrorComponent";
import loginImg from "../assets/energia-solar.jpg";
import { UserAPI } from "../utils/axios";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!localStorage.getItem("token")) {
      navigate("/app/home");
    }
  }, []);

  const onSubmit = async (data) => {
    const { username, password, rememberMe } = data;
    const response = await UserAPI.post("/auth/login", { username, password });

    if (response.status === 201) {
      const token = response.data.access_token;

      if (!!rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("rememberMe", true);
      }

      navigate("/app/home");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      <div className="hidden sm:block h-screen w-full">
        <img
          className="w-full h-full object-cover"
          src={loginImg}
          alt="Imagem de placas solares."
        />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-4xl text-white font-bold text-center">WELCOME</h2>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-gray-500 focus:bg-gray-800 focus:outline-none"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 6,
                  message: "Field must have at least 6 charactes",
                },
                maxLength: {
                  value: 20,
                  message: "Field must have at most 20 characters",
                },
              })}
            />
            <ErrorComponent error={errors.username} />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <div>
              <input
                className="w-full p-2 rounded-lg bg-gray-700 mt-2 focus:border-gray-500 focus:bg-gray-800 focus:outline-none"
                type={!!showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Field must have at least 6 charactes",
                  },
                  maxLength: {
                    value: 20,
                    message: "Field must have at most 20 characters",
                  },
                })}
              />
              <i
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className={`ml-[-30px] cursor-pointer bi bi-${
                  !!showPassword ? "eye" : "eye-slash"
                }`}
              ></i>
            </div>
            <ErrorComponent error={errors.password} />
          </div>

          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                {...register("rememberMe")}
              />
              Remember me
            </p>
          </div>

          <input
            className="cursor-pointer w-full my-5 py-2 bg-neutral-800 shadow-neutral-800 hover:bg-neutral-600 text-white font-semibold rounded-lg"
            type="submit"
            value="Sign in"
          />
        </form>
      </div>
    </div>
  );
}
