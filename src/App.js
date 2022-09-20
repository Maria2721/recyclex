import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="container">
          <MainPage/>
        </main>
      <Footer/> 
    </div>
  );
}

export default App;
