import List from "./list";
import { useNavigate, Outlet } from "react-router-dom";
export default function Todo() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("create")}>Create Todo</button>
      {/* <List></List> */}
      <Outlet />
    </div>
  );
}
