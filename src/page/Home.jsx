// import React, { useState } from 'react';
// import { ImgPreview, ImgUpload } from '../components/index';

// const Home = () => {
//     const [uploadImg, setUploadImg] = useState(null);
//     const [enhancedImg, setEnhancedImg] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const UploadImageHandler = (file) => {
//         setUploadImg(URL.createObjectURL(file));
//         setLoading(true);    
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">AI Image Enhancer</h1>
//             <ImgUpload UploadImageHandler={UploadImageHandler} />
//             <ImgPreview
//                 loading={loading}
//                 upload={uploadImg}
//                 enhanced={enhancedImg}
//             />
//         </div>
//     );
// };
// export default Home;


import { useState } from 'react';
import {Header,ImageUpload,ImageComparison, Footer} from '../components/index';


function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [originalImage, setOriginalImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleImageUpload = (file) => {
    setIsProcessing(true);
    setOriginalImage(URL.createObjectURL(file));
    
    // Simulate AI processing
    setTimeout(() => {
      setEnhancedImage(URL.createObjectURL(file)); // In a real app, this would be the AI-enhanced version
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ImageUpload onUpload={handleImageUpload} isProcessing={isProcessing} />
        {originalImage && (
          <ImageComparison 
            originalImage={originalImage} 
            enhancedImage={enhancedImage} 
            isProcessing={isProcessing} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;