import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import AboutProjectPage from './pages/AboutProjectPage/AboutProjectPage';
import AboutRecyclexPage from './pages/AboutRecyclexPage/AboutRecyclexPage';
import FormPage from './pages/FormPage/FormPage';
import FormThankYouPage from './pages/FormThankYouPage/FormThankYouPage';
import GeneralTermsPage from './pages/GeneralTermsPage/GeneralTermsPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <main className="container">
            <Link to="/">MainPage</Link>
            <Link to="#aboutProjectPage">AboutProjectPage</Link>
            <Link to="#aboutRecyclexPage">AboutRecyclexPage</Link>
            <Link to="#formPage">FormPage</Link>
            <Link to="#formThankYouPage">FormThankYouPage</Link>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/aboutProjectPage' element={<AboutProjectPage/>}/>
              <Route path='/aboutRecyclexPage' element={<AboutRecyclexPage/>}/>
              <Route path='/formPage' element={<FormPage/>}/>
              <Route path='/formThankYouPage' element={<FormThankYouPage/>}/>
              <Route path='/generalTermsPage' element={<GeneralTermsPage/>}/>
            </Routes>
          </main>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;
