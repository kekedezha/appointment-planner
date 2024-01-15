import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({list}) => {
  return (
    <>
      {list.map((item, index) => {
        const {name: contactName, ...rest} = item;
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
