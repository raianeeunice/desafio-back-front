import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import UserForm from "../../components/form/UserForm";
import { UserAPI } from "../../utils/axios";

export default function EditClient() {
  const { state } = useLocation();

  let user = undefined;
  if (state) {
    user = state.user;
  }

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    if (!!user.id) {
      try {
        delete data._id;
        await UserAPI.patch(`/user/${user.id}`, data);
        toast.success("Client edited!");
        navigate("/app/users");
      } catch (error) {
        toast.error("User could not be edited!\nTry again later!");
      }
    }
  };

  return (
    <UserForm
      buttonLabel="Edit"
      title="Edit client"
      onSubmit={onSubmit}
      user={user}
    />
  );
}
