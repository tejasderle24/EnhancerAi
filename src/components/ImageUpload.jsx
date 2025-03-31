import { useState } from "react";

const ImageUpload = ({ onUpload, isProcessing }) => {
    const [dragActive, setDragActive] = useState(false);
  
    const handleDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === 'dragenter' || e.type === 'dragover') {
        setDragActive(true);
      } else if (e.type === 'dragleave') {
        setDragActive(false);
      }
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onUpload(e.dataTransfer.files[0]);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        onUpload(e.target.files[0]);
      }
    };
  
    return (
      <div className="mb-12">
        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive ? 'border-blue-500 bg-blue-100 dark:bg-blue-900' : 'border-gray-300 dark:border-gray-600'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-lg font-medium">
              {isProcessing ? 'Processing your image...' : 'Drag & drop your image here, or click to select'}
            </p>
            <input
              type="file"
              id="image-upload"
              className="hidden"
              accept="image/*"
              onChange={handleChange}
              disabled={isProcessing}
            />
            <label
              htmlFor="image-upload"
              className={`px-4 py-2 rounded-md cursor-pointer ${
                isProcessing 
                  ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              } transition-colors`}
            >
              {isProcessing ? 'Processing...' : 'Select Image'}
            </label>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Supports JPG, PNG, WEBP (Max 10MB)
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageUpload;