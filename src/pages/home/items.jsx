import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";

export default function Items() {
  const [state, setState] = useState("loading"); // loading | success | error
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/products`) //dont get any tokens bcs prodcuts can be view by anyone
      .then((res) => {
        setItems(res.data);
        setState("success");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.error || "Error occurred");
        setState("error");
      });
  }, []);

  return (
    <div className="w-full min-h-screen pt-[50px]">
      {state === "loading" && 
        <div className="w-full flex justify-center items-center">
          <div className="w-[50px] h-[50px] border-4 border-t-green-500 rounded-full animate-spin" />
        </div>
      }

      {state === "success" && 
        <div className="w-full flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <ProductCard key={item.key} item={item} />
          ))}
        </div>
      }
    </div>
  );
}