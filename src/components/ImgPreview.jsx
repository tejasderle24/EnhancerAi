import React from 'react'

const ImgPreview = () => {
  return (
    <div className = 'mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl' >
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">Upload Image</h2>
            <img src="" alt="" className='w-full h-full object-cover' />
            <div className="flex item-center justify-center h-80 bg-gray-200 text-black">No image found</div>
        </div>
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">Enhancer Image</h2>
            <img src="" alt="" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default ImgPreview