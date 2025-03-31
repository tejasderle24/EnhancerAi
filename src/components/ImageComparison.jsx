const ImageComparison = ({ originalImage, enhancedImage, isProcessing }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">Original Image</h2>
          </div>
          <div className="p-4 flex justify-center items-center min-h-64">
            <img 
              src={originalImage} 
              alt="Original" 
              className="max-w-full max-h-96 object-contain rounded"
            />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">Enhanced Image</h2>
          </div>
          <div className="p-4 flex justify-center items-center min-h-64">
            {isProcessing ? (
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <p>Enhancing your image with AI...</p>
              </div>
            ) : (
              <img 
                src={enhancedImage} 
                alt="Enhanced" 
                className="max-w-full max-h-96 object-contain rounded"
              />
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageComparison;