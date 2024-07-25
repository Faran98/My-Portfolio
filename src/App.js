import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/header';

function App() {
  return (
    <div className='h-screen bg-nav-white dark:bg-black'>
      <Header />
      <main>
        <Home />
      </main>
      {/* <footer /> */}
    </div>
  );
}

export default App;
