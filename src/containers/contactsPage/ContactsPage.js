import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [containsDuplicate, setContainsDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (containsDuplicate === false){
    addContacts(currentName, currentPhone, currentEmail);
    setCurrentName('');
    setCurrentPhone('');
    setCurrentEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  const nameIsDuplicate = () => {
    const found = contacts.find((contact) => contact.name === currentName);
    if (found !== undefined) {
      return true;
    }
    return false;
  };

  if (nameIsDuplicate()) {
    alert("Name already exits! Please choose another contact name!")
    setContainsDuplicate(true);
  } else {
    setContainsDuplicate(false);
  }
 }, [contacts, currentName, containsDuplicate])


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={currentName}
          setName={setCurrentName}
          phone={currentPhone}
          setPhone={setCurrentPhone}
          email={currentEmail}
          setEmail={setCurrentEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts}/>
      </section>
    </div>
  );
};
