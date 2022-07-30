import {useEffect, useState} from "react";
import ContactItem from "./item";
import api from "../../utils/api";
import {ContactI} from "./type"
import { useNavigate, useParams } from "react-router-dom";
export default function EditContact() {
    const params = useParams();
    const navigate = useNavigate();
    const initialState: ContactI = { name: "", lastName: "", phone: +380 };
    const [contact, setContact] = useState(initialState);

    useEffect(() => {
        api.get("contacts/" + params.contactId).then((r) => setContact(r.data));
    }, []);



    function onCreateContact(): void {

        api.put("contacts/"+ contact.id, contact).then((r) => navigate("/contacts"));
    }
    return (
        <div>
            <input
                type="text"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
            <input
                type="text"
                value={contact.lastName}
                onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
            />
            <input
                type="text"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: +e.target.value })}
            />
            <button onClick={onCreateContact}>Create</button>
        </div>
    );
}
