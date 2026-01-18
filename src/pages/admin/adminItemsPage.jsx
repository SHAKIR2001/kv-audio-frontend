const sampleArr = [
  {
    key: "AUD-JBL-001",
    name: "JBL Go 3 Portable Speaker",
    price: 2250,
    category: "Audio",
    dimensions: "8.6cm x 6.9cm x 4cm",
    description: "Compact portable Bluetooth speaker with powerful sound and punchy bass.",
    availability: true,
    image: [
      "https://m.media-amazon.com/images/I/713TUYjagQL._AC_SY300_SX300_QL70_FMwebp_.jpg"
    ]
  },
  {
    key: "AUD-SONY-002",
    name: "Sony MDR-ZX110 Headphones",
    price: 4500,
    category: "Audio",
    dimensions: "19cm x 17cm x 6cm",
    description: "Lightweight on-ear headphones with dynamic sound and comfortable design.",
    availability: true,
    image: [
      "https://m.media-amazon.com/images/I/51UQJQzZrOL._AC_SY300_SX300_.jpg"
    ]
  },
  {
    key: "LGT-LED-003",
    name: "RGB LED Strip Light",
    price: 1800,
    category: "Lights",
    dimensions: "5m length",
    description: "Multi-color RGB LED strip with remote control, ideal for room decoration.",
    availability: true,
    image: [
      "https://m.media-amazon.com/images/I/61QkK7z1UHL._AC_SY300_SX300_.jpg"
    ]
  },
  {
    key: "AUD-MIC-004",
    name: "USB Condenser Microphone",
    price: 6200,
    category: "Audio",
    dimensions: "15cm x 5cm",
    description: "Plug-and-play USB microphone suitable for streaming, recording, and meetings.",
    availability: true,
    image: [
      "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SY300_SX300_.jpg"
    ]
  },
  {
    key: "LGT-RING-005",
    name: "LED Ring Light 10 Inch",
    price: 5200,
    category: "Lights",
    dimensions: "10 inch diameter",
    description: "Adjustable brightness LED ring light perfect for video calls and photography.",
    availability: true,
    image: [
      "https://m.media-amazon.com/images/I/61q4M0ZKZyL._AC_SY300_SX300_.jpg"
    ]
  }
];

import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function AdminItemsPage(){

    const [items, setItems] = useState(sampleArr);

    return(
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimensions</th>
                    <th>availability</th>
                </thead>

                <tbody>
                    <tr>
                        <td>AUD-JBL-001</td>
                        <td>JBL Go 3 Portable Speaker</td>
                        <td>2250</td>
                        <td>Audio</td>
                        <td>8.6cm x 6.9cm x 4cm</td>
                        <td>Availbale</td>

                    </tr>
                                        <tr>
                        <td>AUD-JBL-002</td>
                        <td>JBL Go 4 Portable Speaker</td>
                        <td>4250</td>
                        <td>Audio</td>
                        <td>9.6cm x 7.9cm x 5cm</td>
                        <td>Availbale</td>

                    </tr>

                </tbody>
            </table>

























           <Link to="/admin/items/add">
                 <CiCirclePlus className="text-[100px] absolute bottom-2 right-2 hover:text-red-900 cursor-pointer "/>
        
            </Link>
            
        
        
        
        
        
        
        
        
        </div>
    )

}