import { useState, createContext } from 'react';

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language 'en'

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
