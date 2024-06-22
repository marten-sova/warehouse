import React from "react";
import Shelf from "./Shelf";

export default function Zone({ zone }) {
  return (
    <div
      style={{
        margin: "10px 1% 10px 1%",
        padding: "10px",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: "#DDDDDD",
        width: "23%",
        height: "100%",
        border: "1px solid black",
      }}
    >
      <h3>Zone {zone.zoneNumber}</h3>
      <ul>
        {zone.shelves.map((shelf) => (
          <Shelf key={shelf._id} shelf={shelf} />
        ))}
      </ul>
    </div>
  );
}
