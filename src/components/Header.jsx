const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="w-full py-8">
      {/* Dark mode toggle positioned at top-right */}
      <div className="container mx-auto px-4 flex justify-end">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors ${
            darkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>

      {/* Main header content */}
      <div className="container mx-auto px-4 mt-4 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
          EnhancerAI
        </h1>
        <h3 className={`text-xl md:text-2xl font-semibold mb-4 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          AI-Powered Image Enhancer
        </h3>
      
        <p className={`text-lg ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        } max-w-2xl mx-auto`}>
          Transform your blurry, low-quality images into high-resolution masterpieces with our advanced AI technology.
        </p>
      </div>
    </header>
  );
};

export default Header;