import React from 'react';
import i18n from 'i18next';
import Flag from 'react-world-flags';  // Import react-world-flags for flag icons

const LanguageSwitcher = () => {

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Save the selected language
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className="flex items-center p-2 bg-gray-600 border rounded-lg hover:bg-gray-200 focus:outline-none"
      >
        <Flag code="GB" alt="English" className="w-6 h-4 " />
        
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className="flex items-center p-2 bg-gray-600 border rounded-lg hover:bg-gray-200 focus:outline-none"
      >
        <Flag code="FR" alt="Français" className="w-6 h-4 " />
        
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className="flex items-center p-2 bg-gray-600 border rounded-lg hover:bg-gray-200 focus:outline-none"
      >
        <Flag code="DE" alt="Deutsch" className="w-5 h-3 " />
        
      </button>
      <button
        onClick={() => changeLanguage('it')}
        className="flex items-center p-2 bg-gray-600 border rounded-lg hover:bg-gray-200 focus:outline-none"
      >
        <Flag code="IT" alt="Deutsch" className="w-5 h-3 " />
        
      </button>
    </div>
  );
};

export default LanguageSwitcher;
