import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name.contactName}</p>
      {Object.values(description.rest).map((item, index) => (
        <p key={index} className="tile">{item}</p>
      ))}
    </div>
  );
};
