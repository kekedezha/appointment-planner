import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleNameInput = e => {
    setTitle(e.target.value);
  }

  const handleDateInput = e => {
    setDate(e.target.value);
  }

  const handleTimeInput = e => {
    setTime(e.target.value);
  }

  const handleContactSelection = e => {
    setContact(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name: </label>
        <input type="text" name="name" value={title} onChange={handleNameInput} required/>
        <label for="date">Date: </label>
        <input type="date" name="date" value={date} min={getTodayString()} onChange={handleDateInput} required/>
        <label for="time">Time: </label>
        <input type="time" name="time" value={time} onChange={handleTimeInput} required/>
        <ContactPicker contacts={contacts} handleOnChange={handleContactSelection} value={contact} name="contact"/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
