import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminOrderPage() {
  const [orders, setOrders] = useState([]);
  const [state, setState] = useState("loading"); // loading | success | error
  const [activeOrder, setActiveOrder] = useState(null);
  const [modalOpened, setModalOpened] = useState(false)

  // UI controls
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all | approved | pending
  const [sortBy, setSortBy] = useState("orderDateDesc"); // orderDateDesc | orderDateAsc | totalDesc | totalAsc

  async function fetchOrders() {
    const token = localStorage.getItem("token");

    if (!token) {
      setState("error");
      toast.error("Not authorized. Please login again.");
      return;
    }

    try {
      setState("loading");
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setOrders(Array.isArray(res.data) ? res.data : []);
      setState("success");
    } catch (err) {
      console.error(err);
      setState("error");
      toast.error(err?.response?.data?.error || "Failed to load orders");
    }
  }

  useEffect(() => {
    fetchOrders();
    
  }, []);

  function formatDateTime(value) {
    if (!value) return "—";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function formatDateOnly(value) {
    if (!value) return "—";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }

  const filteredAndSorted = useMemo(() => {
    const q = search.trim().toLowerCase();

    let list = Array.isArray(orders) ? [...orders] : [];

    // filter: status
    if (statusFilter === "approved") {
      list = list.filter((o) => Boolean(o?.isApproved));
    } else if (statusFilter === "pending") {
      list = list.filter((o) => !Boolean(o?.isApproved));
    }

    // filter: search by orderId/email
    if (q) {
      list = list.filter((o) => {
        const orderId = String(o?.orderId || "").toLowerCase();
        const email = String(o?.email || "").toLowerCase();
        return orderId.includes(q) || email.includes(q);
      });
    }

    // sort
    const toTime = (v) => {
      const t = new Date(v).getTime();
      return Number.isNaN(t) ? 0 : t;
    };
    const toNum = (v) => {
      const n = Number(v);
      return Number.isNaN(n) ? 0 : n;
    };

    if (sortBy === "orderDateAsc") {
      list.sort((a, b) => toTime(a?.orderDate) - toTime(b?.orderDate));
    } else if (sortBy === "orderDateDesc") {
      list.sort((a, b) => toTime(b?.orderDate) - toTime(a?.orderDate));
    } else if (sortBy === "totalAsc") {
      list.sort((a, b) => toNum(a?.totalAmount) - toNum(b?.totalAmount));
    } else if (sortBy === "totalDesc") {
      list.sort((a, b) => toNum(b?.totalAmount) - toNum(a?.totalAmount));
    }

    return list;
  }, [orders, search, sortBy, statusFilter]);

  return (
    <div className="w-full p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header card */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">Orders</h1>
    
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-3 py-2 rounded-xl bg-gray-50 ring-1 ring-gray-200 text-sm text-gray-700">
                Total: <span className="ml-2 font-bold text-gray-900">{orders?.length || 0}</span>
              </span>

              <button
                type="button"
                onClick={fetchOrders}
                className="h-10 px-4 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition cursor-pointer"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-gray-600 mb-1">Search</label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by Order ID or Email..."
                className="w-full h-11 px-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full h-11 px-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-300"
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Sort</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-11 px-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-300"
              >
                <option value="orderDateDesc">Newest first</option>
                <option value="orderDateAsc">Oldest first</option>
                <option value="totalDesc">Total (high → low)</option>
                <option value="totalAsc">Total (low → high)</option>
              </select>
            </div>
          </div>

          {/* States */}
          {state === "loading" && (
            <div className="mt-6 p-4 rounded-xl bg-gray-50 ring-1 ring-gray-100 text-sm text-gray-600 flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-purple-600 rounded-full animate-spin" />
              Loading orders...
            </div>
          )}

          {state === "error" && (
            <div className="mt-6 p-5 rounded-xl bg-red-50 ring-1 ring-red-100">
              <div className="text-sm font-bold text-red-700">Could not load orders</div>
              <div className="text-xs text-red-600 mt-1">
                Check your backend, token, and <code className="font-semibold">VITE_BACKEND_URL</code>.
              </div>
            </div>
          )}

          {state === "success" && filteredAndSorted.length === 0 && (
            <div className="mt-6 p-8 rounded-xl bg-gray-50 ring-1 ring-gray-100 text-center">
              <div className="text-sm font-semibold text-gray-800">No orders found</div>
              <div className="text-xs text-gray-500 mt-1">
                Try clearing filters or changing the search.
              </div>
            </div>
          )}

          {/* Table */}
          {state === "success" && filteredAndSorted.length > 0 && (
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-gray-100">
              <div className="overflow-x-auto">
                <table className="min-w-[1100px] w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr className="text-left text-xs font-extrabold uppercase tracking-wide text-gray-500">
                      <th className="px-5 py-4">Order ID</th>
                      <th className="px-5 py-4">Email</th>
                      <th className="px-5 py-4">Days</th>
                      <th className="px-5 py-4">Start</th>
                      <th className="px-5 py-4">End</th>
                      <th className="px-5 py-4">Total (LKR)</th>
                      <th className="px-5 py-4">Status</th>
                      <th className="px-5 py-4">Ordered On</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {filteredAndSorted.map((o) => {
                      const approved = Boolean(o?.isApproved);
                      const total = Number(o?.totalAmount ?? 0);

                      return (
                        <tr key={o?._id || o?.orderId} className="hover:bg-gray-50/60 transition cursor-pointer" onClick={()=>{
                            setActiveOrder(o);
                            setModalOpened(ture);

                        }}>
                          <td className="px-5 py-4">
                            <div className="font-extrabold text-gray-900">{o?.orderId || "—"}</div>
                            
                          </td>

                          <td className="px-5 py-4 text-sm text-gray-700">
                            <span className="font-semibold">{o?.email || "—"}</span>
                          </td>

                          <td className="px-5 py-4 text-sm text-gray-700">
                            <span className="font-bold">{Number(o?.days ?? 0) || 0}</span>
                          </td>

                          <td className="px-5 py-4 text-sm text-gray-700">{formatDateOnly(o?.startingDate)}</td>

                          <td className="px-5 py-4 text-sm text-gray-700">{formatDateOnly(o?.endingDate)}</td>

                          <td className="px-5 py-4">
                            <span className="font-extrabold text-purple-700">
                              {total.toFixed(2)}
                            </span>
                          </td>

                          <td className="px-5 py-4">
                            <span
                              className={[
                                "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-extrabold ring-1",
                                approved
                                  ? "bg-green-50 text-green-700 ring-green-200"
                                  : "bg-yellow-50 text-yellow-700 ring-yellow-200",
                              ].join(" ")}
                            >
                              {approved ? "APPROVED" : "PENDING"}
                            </span>
                          </td>

                          <td className="px-5 py-4 text-sm text-gray-700">
                            {formatDateTime(o?.orderDate)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>


            </div>
          )}
        </div>
      </div>
    </div>
  );
}