import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <>
      {contacts.map((contact, index) => {
        const {name: contactName, ...rest} = contact;
        return (
          <div key={index}>
            <Tile name={{contactName}} description={{rest}} /> 
          </div>
      )}
      )
    }
  </>
  );
};
