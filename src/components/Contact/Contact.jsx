import React from "react";
import s from "./Contact.module.css";
import { ImUser } from "react-icons/im";
import { ImPhone } from "react-icons/im";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <p className={s.infoWrap}>
          <ImUser />
          <span className={s.infoText}>{name}</span>
        </p>
        <p className={s.infoWrap}>
          <ImPhone />
          <span className={s.infoText}>{number}</span>
        </p>
      </div>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
