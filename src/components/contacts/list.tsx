import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import ContactItem from "./item"
import {ContactActionType, ContactI} from "./type";

export default function ContactList() {
    const [contacts, setContacts] = useState();
    useEffect(() => {
        api.get("contacts").then((r) => setContacts(r.data.reverse()));
    }, []);

    function onContactAction(id: string, type: ContactActionType) {
        // api.delete("contacts/"+ contact.id).then((r) => setContacts(r.data));
        console.log('delete')
    }


    return (
        <div>
            {contacts &&
                (contacts as ContactI[]).map<JSX.Element>((e) => (
                    <ContactItem key={e.id} cb={onContactAction} contact={e}></ContactItem>
                ))}
        </div>
    );

}