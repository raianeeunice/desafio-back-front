import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserAPI } from "../../utils/axios";

import UserForm from "../../components/form/UserForm";

export default function CreateClient() {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await UserAPI.post(`/user`, data);
      toast.success("Client created!");
      navigate("/app/users");
    } catch (error) {
      toast.error("User could not be created!\nTry again later!");
    }
  };

  return (
    <UserForm
      buttonLabel="Create"
      title="Create client"
      onSubmit={onSubmit}
      user={{}}
    />
  );
}
