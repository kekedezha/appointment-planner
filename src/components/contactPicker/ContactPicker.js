import React from "react";

export const ContactPicker = ({ contacts, handleOnChange, value, name }) => {
  return (
    <>
      <label for={name}>Select a contact: </label>
      <select name={name} onChange={handleOnChange} value={value}>
        <option value="">--No Contact Selected--</option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </>
  );
};
