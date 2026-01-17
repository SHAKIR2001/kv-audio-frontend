import { useState } from "react";

export default function AddProduct() {
  const [productKey, setProductKey] = useState("");
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productCatagorie, setProductCatagorie] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productDimensions, setproductDimensions] = useState("");

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1>Add items</h1>

      <div className="w-[400px] border flex flex-col items-center">

        <input
          type="text"
          placeholder="Product Key"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setproductPrice(e.target.value)}
        />

        <select
          value={productCatagorie}
          onChange={(e) => setProductCatagorie(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>

        <input
          type="text"
          placeholder="Product Dimensions"
          value={productDimensions}
          onChange={(e) => setproductDimensions(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setproductDescription(e.target.value)}
        />

        <button className="border cursor-pointer">Add</button>

      </div>
    </div>
  );
}
