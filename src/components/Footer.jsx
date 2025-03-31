const Footer = () => {
    return (
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} AI Image Enhancer. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;