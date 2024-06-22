import React, { useState } from "react";
import axios from "../utils/axios";

const WarehouseForm = () => {
  const [warehouseName, setWarehouseName] = useState("");
  const [zones, setZones] = useState(
    Array.from({ length: 12 }, () => ({ zoneNumber: "", shelves: [] }))
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleWarehouseNameChange = (e) => {
    setWarehouseName(e.target.value);
  };

  const handleShelfNameChange = (zoneIndex, shelfIndex, e) => {
    const newZones = [...zones];
    newZones[zoneIndex].shelves[shelfIndex] = e.target.value;
    setZones(newZones);
  };

  const addShelf = (zoneIndex) => {
    const newZones = [...zones];
    if (newZones[zoneIndex].shelves.length < 10) {
      newZones[zoneIndex].shelves.push("");
      setZones(newZones);
    }
  };

  const deleteShelf = (zoneIndex, shelfIndex) => {
    const newZones = [...zones];
    newZones[zoneIndex].shelves.splice(shelfIndex, 1);
    setZones(newZones);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const newWarehouse = {
      name: warehouseName,
      zones: zones.map((zone, index) => ({
        zoneNumber: index + 1,
        shelves: zone.shelves.map((shelfName, shelfIndex) => ({
          name: shelfName,
        })),
      })),
    };

    console.log("Submitting new warehouse:", newWarehouse);
    try {
      const response = await axios.post("/warehouse/create", newWarehouse);
      setSuccess(true);
      setWarehouseName("");
      setZones(Array.from({ length: 12 }, () => ({ shelves: [] })));
      console.log("Response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      console.error("Error submitting warehouse:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Warehouse Name:
          <input
            type="text"
            value={warehouseName}
            onChange={handleWarehouseNameChange}
            required
          />
        </label>
      </div>
      {warehouseName && (
        <>
          {zones.map((zone, zoneIndex) => (
            <div key={zoneIndex} style={{ marginTop: "20px" }}>
              <h3>Zone {zoneIndex + 1}</h3>
              <button type="button" onClick={() => addShelf(zoneIndex)}>
                Add Shelf
              </button>
              {zone.shelves.map((shelf, shelfIndex) => (
                <div key={shelfIndex} style={{ marginLeft: "20px" }}>
                  <label>
                    Shelf {shelfIndex + 1} Name:
                    <input
                      type="text"
                      value={shelf}
                      onChange={(e) =>
                        handleShelfNameChange(zoneIndex, shelfIndex, e)
                      }
                      required
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => deleteShelf(zoneIndex, shelfIndex)}
                  >
                    Delete Shelf
                  </button>
                </div>
              ))}
            </div>
          ))}
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Warehouse"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
      {success && (
        <p style={{ color: "green" }}>Warehouse submitted successfully!</p>
      )}
    </form>
  );
};

export default WarehouseForm;
