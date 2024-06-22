import React from "react";
import Zone from "./Zone";

export default function Warehouse({ warehouse }) {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        backgroundColor: "#EEEEEE",
      }}
    >
      <h2>{warehouse.name}</h2>
      {warehouse.zones.map((zone) => (
        <Zone key={zone._id} zone={zone} />
      ))}
    </div>
  );
}
