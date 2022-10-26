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
import Agreement from './pages/Agreement/Agreement';
import Contacts from './pages/Contacts/Contacts';
import HelpModal from './components/HelpModal/HelpModal';
import ThanksModal from './components/ThanksModal/ThanksModal';
import { createContext, useState, useEffect } from "react";
import { ReactComponent as ChatIconWhite} from "./assets/imgs/chat_icon_white.svg";
import { ReactComponent as OnlineMark} from "./assets/imgs/online_mark_chat.svg";
import { ReactComponent as ChatIconBlack} from "./assets/imgs/chat_icon_black.svg";


const ThemeContext = createContext(null);

function App() {
  const [openedHelpModal, setOpenedHelpModal] = useState(false);
  const [openedThanksModal, setOpenedThanksModal] = useState(false);
  const currentTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(currentTheme);
  const {pathname} = useLocation(); 
  const isHomePage = pathname === "/" ? true : false;
  const isSetBackground = isHomePage ? ' home__page' : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  }

  const handleHelpModal = () => {
    setOpenedHelpModal((curr) => !curr);
  }

  const handleThanksModal = () => {
    setOpenedThanksModal((curr) => !curr);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`App ${isSetBackground}`} id={theme}>
      <HelpModal handleModal={handleHelpModal} opened={openedHelpModal} theme={theme}/>
      <ThanksModal handleModal={handleThanksModal} opened={openedThanksModal} theme={theme}/>
        <Header toggleTheme={toggleTheme} theme={theme}/>
          <main className="container">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about-project' element={<AboutProjectPage/>}/>
                <Route path='/work-scheme' element={<WorkScheme/>}/>
                <Route path='/form' element={<FormPage handleModal={handleThanksModal}/>}/>
                <Route path='/thank-you' element={<FormThankYouPage/>}/>
                <Route path='/general-terms' element={<GeneralTermsPage/>}/>
                <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
                <Route path='/cookies-policy-page' element={<CookiesPolicyPage/>}/>
                <Route path='/agreement' element={<Agreement/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
          </main>
          <button className='app__chat'>
            {theme === 'light' ? <ChatIconBlack className='app__chatIcon'/>
            : <ChatIconWhite className='app__chatIcon'/>}
            <OnlineMark className='app__chatOnline'/>
          </button>
        <Footer handleModal={handleHelpModal}/> 
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
