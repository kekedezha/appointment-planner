import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameInput = e => {
    setName(e.target.value);
  }

  const handleEmailInput = e => {
    setEmail(e.target.value);
  }

  const handlePhoneInput = e => {
    setPhone(e.target.value);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input type="text" name="name" value={name} onChange={handleNameInput} />
      <label for="phone">Phone: </label>
      <input type="tel" name="phone" value={phone} onChange={handlePhoneInput} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
      <label for="email">Email: </label>
      <input type="email" name="email" value={email} onChange={handleEmailInput} />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

