
import { useNavigate, Outlet } from "react-router-dom";
export default function Contact() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("create")}>Create Contact</button>
            {/* <List></List> */}
            <Outlet />
        </div>
    );
}
