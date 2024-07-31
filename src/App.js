import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className='h-screen bg-nav-white dark:bg-black'>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
