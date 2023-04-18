import { useForm } from "react-hook-form";

import ErrorComponent from "../error/ErrorComponent";

export default function UserForm({ title, buttonLabel, user, onSubmit }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: user });

  return (
    <>
      <h2 className="text-2xl text-white font-bold text-center my-5">
        {title}
      </h2>
      <form
        className="max-w-[550px] w-[85%] mb-10 mx-auto bg-neutral-700 p-8 px-8 rounded-lg text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label>Name</label>
          <input
            className="w-full p-2 rounded-lg bg-gray-700 mt-2 focus:border-gray-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 6,
                message: "Field must have at least 6 charactes",
              },
              maxLength: {
                value: 30,
                message: "Field must have at most 30 characters",
              },
            })}
          />
          <ErrorComponent error={errors.name} />
        </div>

        <div>
          <label>Email</label>
          <input
            className="w-full p-2 rounded-lg bg-gray-700 mt-2 focus:border-gray-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                message: "Invalid email :(",
              },
            })}
          />
          <ErrorComponent error={errors.email} />
        </div>

        <div>
          <label>CPF</label>
          <input
            className="w-full p-2 rounded-lg bg-gray-700 mt-2 focus:border-gray-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            {...register("cpf", {
              required: "CPF is required",
              pattern: {
                value:
                  /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
                message: "CPF is invalid",
              },
            })}
          />
          <ErrorComponent error={errors.cpf} />
        </div>

        <div>
          <label>Phone</label>
          <input
            className="w-full p-2 rounded-lg bg-gray-700 mt-2 focus:border-gray-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            {...register("phone", {
              required: "Phone is required",
              minLength: {
                value: 6,
                message: "Field must have at least 6 charactes",
              },
              maxLength: {
                value: 30,
                message: "Field must have at most 30 characters",
              },
            })}
          />
          <ErrorComponent error={errors.phone} />
        </div>

        <div>
          <label>Address</label>
          <input
            className="w-full p-2 rounded-lg bg-gray-700 mt-2 focus:border-gray-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            {...register("address", {
              required: "Address is required",
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
          <ErrorComponent error={errors.address} />
        </div>

        <input
          className="cursor-pointer w-full my-5 py-2 bg-neutral-800 shadow-neutral-800 hover:bg-neutral-600 text-white font-semibold rounded-lg"
          type="submit"
          value={buttonLabel}
        />
      </form>
    </>
  );
}
