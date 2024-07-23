import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import UserData from "./components/UserData";
import AddProduct from "./components/AddProduct";

export default function Home() {
  return (
    <>
    <AdminNavbar/>
    <Routes>
    <Route path="/user" element={<UserData/>} />
    <Route path="/products" element={<AddProduct/>} />
    </Routes>
    </>
  )
}
