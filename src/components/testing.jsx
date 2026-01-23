import { useState } from "react"

export default function Testing() {
  const [file, setFile] = useState(null)

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
      <input
        type="file"
        multiple //can upload multiple images
        className="
          cursor-pointer
          text-sm
          file:mr-3
          file:rounded
          file:border file:border-gray-400
          file:bg-white
          file:px-3 file:py-1.5
          file:text-sm
          file:cursor-pointer
          hover:file:bg-gray-50
        "
        value = {file}
        onChange={ (e)=>{setFile(e.target.files[0])}}
      />

      <button
        className="
          bg-blue-500 w-[80px] h-[40px]
          rounded
          border border-blue-700
          cursor-pointer
          hover:bg-blue-600
        "
        type="button"
      >
        Upload
      </button>

    </div>
  )
}