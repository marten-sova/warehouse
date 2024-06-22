import { useAuth } from "./contexts/AuthContext";
import Header from "./components/Header";
import WarehouseList from "./components/WarehouseList";
import WarehouseForm from "./components/WarehouseForm";

export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <Header />
      {isLoggedIn
        ? "You are logged in."
        : "You are not logged in. It doesn't matter for this demo."}
      <h2>Create a New Warehouse</h2>
      <WarehouseForm />
      <h2>All Warehouses</h2>
      <WarehouseList />
    </div>
  );
}
