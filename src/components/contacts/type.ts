import {BaseEntity } from "../../utils/types";

export interface ContactI extends BaseEntity {
    name: string;
    lastName: string;
    phone: number;

}

export interface ContactItemPropsI {
    contact: ContactI;
    cb: (id: string, type: ContactActionType) => void;
}

export type ContactActionType = "delete";
