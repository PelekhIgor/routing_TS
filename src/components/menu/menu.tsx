import { MenuI } from "./type";
import { Link } from "react-router-dom";
export default function Menu() {
    const menu: MenuI[] = [
        {
            title: "home",
            link: "/",
        },
        {
            title: "Todos",
            link: "/todos",
        },
        {
            title: "Contacts",
            link: "/contacts",
        },
    ];
    return (
        <div
            className="menu"
            style={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
                paddingLeft: "50px",

            }}
        >
            {menu.map((e, i) => (
                <div key={i}>
                    <Link className='link' style={{
                        paddingLeft: "10px",
                    }}to={e.link}>{e.title}</Link>
                </div>
            ))}
        </div>
    );
}
