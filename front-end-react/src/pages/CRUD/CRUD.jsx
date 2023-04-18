import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { UserAPI } from "../../utils/axios";

const Row = ({ user, onEdit, onDelete }) => {
  return (
    <tr className="border-b bg-neutral-800 border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap text-white"
      >
        {user.name}
      </th>
      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
      <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
      <td className="px-6 py-4 whitespace-nowrap">{user.address}</td>
      <td className="px-6 py-4 whitespace-nowrap">{user.cpf}</td>
      <td className="px-6 py-4 space-x-2 whitespace-nowrap">
        <button
          onClick={() => {
            onEdit(user);
          }}
          className="bg-transparent m-2"
        >
          Editar <i className="bi bi-pencil-fill text-cyan-600"></i>
        </button>
        <button
          onClick={() => {
            onDelete(user);
          }}
          className="bg-transparent m-2"
        >
          Deletar <i className="bi bi-trash3-fill text-orange-800"></i>
        </button>
      </td>
    </tr>
  );
};

export default function CRUD() {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await UserAPI.get("/user");
      setUsersData(response.data);
    } catch (error) {
      toast.error("Could not fetch clients");
    }
  }

  function onCreate() {
    navigate("/app/users/create");
  }

  function onEdit(user) {
    if (!!user.id) {
      navigate(`/app/users/edit/${user.id}`, { state: { user } });
    }
  }

  async function onDelete(user) {
    try {
      await UserAPI.delete(`/user/${user.id}`);
      toast.success("Client deleted!");
      getUsers();
    //   navigate(0); // refresh
    } catch (err) {
      toast.error("Could not delete client! Try again later!");
    }
  }

  return (
    <div className="container text-white max-w-[1024px] w-[85%] mx-auto space-y-10 mt-10">
      <div className="w-full flex justify-between">
        <h2 className="text-3xl font-bold text-center text-white">Client CRUD</h2>
        <button
          className="btn inline-block px-6 py-2 border-2 bg-neutral-800 text-white font-medium text-xs uppercase rounded hover:bg-neutral-700 transition duration-150 ease-in-out"
          onClick={() => {
            onCreate();
          }}
        >
          Add Client
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto overflow-scroll text-sm text-left ">
          <thead className="text-xs uppercase bg-neutral-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                CPF
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => {
              return (
                <Row
                  key={index}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  user={user}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
