import React from "react";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Warehouse from "./Warehouse";

export default function WarehouseList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axios.get("/warehouse/list").then(({ data }) => {
        setData(data.data);
        console.log(data.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
      {data.map((warehouse) => (
        <Warehouse key={warehouse._id} warehouse={warehouse} />
      ))}
    </div>
  );
}
