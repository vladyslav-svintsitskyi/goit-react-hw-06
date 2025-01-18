import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
