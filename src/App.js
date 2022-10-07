import { Routes, Route, useLocation} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import AboutProjectPage from './pages/AboutProjectPage/AboutProjectPage';
import WorkScheme from './pages/WorkScheme/WorkScheme';
import FormPage from './pages/FormPage/FormPage';
import FormThankYouPage from './pages/FormThankYouPage/FormThankYouPage';
import GeneralTermsPage from './pages/GeneralTermsPage/GeneralTermsPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage/CookiesPolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import Contacts from './pages/Contacts/Contacts';
import HelpModal from './components/HelpModal/HelpModal';
import { createContext, useState } from "react";

const ThemeContext = createContext(null);

function App() {
  const [openedModal, setOpenedModal] = useState(false);
  const currentTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  }
  
  const {pathname} = useLocation(); 
  const isHomePage = pathname === "/" ? true : false;
  const isSetBackground = isHomePage ? ' home__page' : '';

  const handleModal = () => {
    setOpenedModal((curr) => !curr);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`App ${isSetBackground}`} id={theme}>
      <HelpModal handleModal={handleModal} opened={openedModal} theme={theme}/>
        <Header toggleTheme={toggleTheme} theme={theme}/>
          <main className="container">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about-project' element={<AboutProjectPage/>}/>
                <Route path='/work-scheme' element={<WorkScheme/>}/>
                <Route path='/form' element={<FormPage/>}/>
                <Route path='/thank-you' element={<FormThankYouPage/>}/>
                <Route path='/general-terms' element={<GeneralTermsPage/>}/>
                <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
                <Route path='/cookies-policy-page' element={<CookiesPolicyPage/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
          </main>
        <Footer handleModal={handleModal}/> 
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
