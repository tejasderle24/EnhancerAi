import { Upload } from "lucide-react";

const ImgUpload = () => {
  return (
    <div className = 'bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl' >
        <label htmlFor="fileInput"
        className='flex flex-col items-center justify-center h-12 px-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200 ease-in-out'>
            <input type="file" id='fileInput' className='hidden' />
            <Upload className="h-12 w-12 text-gray-600" />
            <p className="text-lg font-medium text-gray-600">Click and Drag to uplaod your Project </p>
        </label>
    </div>
  )
}

export default ImgUpload