import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import AboutProjectPage from './pages/AboutProjectPage/AboutProjectPage';
import AboutRecyclexPage from './pages/AboutRecyclexPage/AboutRecyclexPage';
import FormPage from './pages/FormPage/FormPage';
import FormThankYouPage from './pages/FormThankYouPage/FormThankYouPage';
import GeneralTermsPage from './pages/GeneralTermsPage/GeneralTermsPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage/CookiesPolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <main className="container">
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/about-project' element={<AboutProjectPage/>}/>
              <Route path='/about-recyclex' element={<AboutRecyclexPage/>}/>
              <Route path='/form' element={<FormPage/>}/>
              <Route path='/thank-you' element={<FormThankYouPage/>}/>
              <Route path='/general-terms' element={<GeneralTermsPage/>}/>
              <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
              <Route path='/cookies-policy-page' element={<CookiesPolicyPage/>}/>
            </Routes>
          </main>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;
