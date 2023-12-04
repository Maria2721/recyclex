import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import AboutProjectPage from "./pages/AboutProjectPage/AboutProjectPage";
import WorkScheme from "./pages/WorkScheme/WorkScheme";
import FormPage from "./pages/FormPage/FormPage";
import FormThankYouPage from "./pages/FormThankYouPage/FormThankYouPage";
import GeneralTermsPage from "./pages/GeneralTermsPage/GeneralTermsPage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage/CookiesPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import Agreement from "./pages/Agreement/Agreement";
import Contacts from "./pages/Contacts/Contacts";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HelpModal from "./components/HelpModal/HelpModal";
import ThanksModal from "./components/ThanksModal/ThanksModal";
import { createContext, useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { useDisableBodyScroll } from "./hooks/useDisableBodyScroll";

const ThemeContext = createContext(null);

function App() {
  const [openedHelpModal, setOpenedHelpModal] = useState(false);
  const [openedThanksModal, setOpenedThanksModal] = useState(false);
  const [key, setKey] = useState(Math.random());
  const currentTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(currentTheme);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/" ? true : false;
  const isFormPage = pathname === "/form" ? true : false;
  const isSetBackground = isHomePage ? " home__page" : "";
  useDisableBodyScroll(openedThanksModal);
  useDisableBodyScroll(openedHelpModal);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // сброс зума при открытии новой страницы
  useEffect(() => {
    console.log(`pathname is ${pathname}`);
    setZoom();
  }, [pathname]);

  const setZoom = () => {
    console.log("set zoom");
    document.body.style.zoom = "100%";
  };

  // открытие главной страницы вместо страницы с шагами формы при успешной отправке данных
  useLayoutEffect(() => {
    if (openedThanksModal === false && (pathname === "/" ? true : false)) {
      return;
    }
    navigate("/", { replace: true });
  }, [openedThanksModal]);

  // открытие страницы с первым шагом формы при переключении по кнопкам вперед/назад
  useLayoutEffect(() => {
    window.onpopstate = () => {
      console.log("Click on back");
      if (openedHelpModal === true) {
        setOpenedHelpModal(false);
        return;
      }
      if (openedThanksModal === true) {
        setOpenedThanksModal(false);
        navigate(-2); // -4 - до главной
        return;
      }
    };
  }, [openedHelpModal, openedThanksModal]);

  /* useLayoutEffect(() => {
    window.onpopstate = () => {
      const index = searchParams.get("index");
      const newStep = Number(index);
      console.log(`newStep is ${newStep}`);
      if (isFormPage === true && newStep === 0) {
        console.log("Click on back from form index 0");
        navigate(-1);
        return;
      }
    };
  }, [isFormPage]); */

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleHelpModal = () => {
    setOpenedHelpModal((curr) => !curr);
  };

  const handleThanksModal = () => {
    setOpenedThanksModal((curr) => !curr);
  };

  const resetState = () => {
    //для сброса состояния формы при переходе на нее из хедера, если мы в этот момент уже в форме
    setKey(Math.random());
  };
  //console.log(`isFormPage ${isFormPage}`);
  //console.log(`openedThanksModal ${openedThanksModal}`);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${isSetBackground}`} id={theme}>
        <HelpModal
          handleModal={handleHelpModal}
          opened={openedHelpModal}
          theme={theme}
        />
        <ThanksModal
          handleModal={handleThanksModal}
          opened={openedThanksModal}
          theme={theme}
        />
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
          resetState={resetState}
        />
        <main className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-project" element={<AboutProjectPage />} />
            <Route path="/work-scheme" element={<WorkScheme />} />
            <Route
              path="/form"
              element={<FormPage handleModal={handleThanksModal} key={key} />}
            />
            <Route path="/thank-you" element={<FormThankYouPage />} />
            <Route path="/general-terms" element={<GeneralTermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route
              path="/cookies-policy-page"
              element={<CookiesPolicyPage />}
            />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        {/* <button className='app__chat'>
            {theme === 'light' ? <ChatIconBlack className='app__chatIcon'/>
            : <ChatIconWhite className='app__chatIcon'/>}
            <OnlineMark className='app__chatOnline'/>
          </button> */}
        <Footer handleModal={handleHelpModal} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
