import {ContactItemPropsI} from "./type";

import "./contact.css"
import { useNavigate } from "react-router-dom";
export default function ContactItem({ contact, cb }: ContactItemPropsI): JSX.Element {
    const navigate = useNavigate();

    function onEdite() {
        navigate("/contacts/" + contact.id);
    }




    return (
        <div className = 'item'>
            <div>{contact.name}</div>
            <div>{contact.lastName}</div>
            <div>{contact.phone}</div>
            <button onClick={cb}>Delete</button>
            <button onClick={onEdite}>Edit</button>
        </div>
    );
}