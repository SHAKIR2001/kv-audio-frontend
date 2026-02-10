import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import AdminItemsPage from "./adminItemsPage";
import AddProduct from "./addProductPage"
import UpdateProduct from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";
import AdminOrderPage from "./adminOrderPage";

export default function AdminPage(props){
    return(
    <div className="w-full min-h-screen flex bg-primary">
      {/* Sidebar */}
      <div className="w-[240px] min-h-screen bg-accent text-white shadow-2xl sticky top-0">
        {/* Brand / Title */}
        <div className="h-[100px] flex items-center px-5 border-b border-white/15">
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-wide">KV Admin</span>
            <span className="text-xs text-white/75">Dashboard</span>
          </div>
        </div>

        {/* Nav */}
        <div className="p-4 flex flex-col gap-2">
          <button className="w-full h-11 text-sm font-semibold cursor-pointer flex items-center gap-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 transition">
            <BsGraphDown className="text-lg" />
            Dashboard
          </button>

          <Link
            to="/admin/bookings"
            className="w-full h-11 text-sm font-semibold cursor-pointer flex items-center gap-3 px-4 rounded-xl bg-white/0 hover:bg-white/10 transition no-underline text-white"
          >
            <FaRegBookmark className="text-lg" />
            Bookings
          </Link>

          <Link
            to="/admin/items"
            className="w-full h-11 text-sm font-semibold cursor-pointer flex items-center gap-3 px-4 rounded-xl bg-white/0 hover:bg-white/10 transition no-underline text-white"
          >
            <MdOutlineSpeaker className="text-lg" />
            Items
          </Link>

          <Link
            to="/admin/users"
            className="w-full h-11 text-sm font-semibold cursor-pointer flex items-center gap-3 px-4 rounded-xl bg-white/0 hover:bg-white/10 transition no-underline text-white"
          >
            <FaRegUser className="text-lg" />
            Users
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="h-[100px] bg-white shadow flex items-center justify-between px-6 sticky top-0 z-40">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">Admin Panel</h1>
            <p className="text-xs text-gray-500 mt-1">Manage bookings, items, and users</p>
          </div>

          <div className="hidden md:flex items-center gap-2">

          </div>
        </div>

        {/* Routed pages container */}
        <div className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Routes path="/*">
              <Route path="/orders" element={<AdminOrderPage/>}/>
              <Route path="/items" element={<AdminItemsPage/>}/>
              <Route path="/items/add" element={<AddProduct/>} />
              <Route path="/items/edit" element={<UpdateProduct/>} />
              <Route path="/users" element={<AdminUsersPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    )
}