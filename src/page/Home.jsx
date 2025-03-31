import React from 'react'
import {ImgPreview, ImgUpload} from '../components/index';
import DarkModeToggle from '../components/DarkMode';


const Home = () => {
  return (
    <>

    <div className="">
        <DarkModeToggle/>
        <ImgUpload />
        <ImgPreview />
    </div>
    
    </>
  )
}

export default Home