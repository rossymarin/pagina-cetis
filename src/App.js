import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PluginFB from './components/PluginFB';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <Carousel />
        <PluginFB />
        <Footer />
    </div>
  );
}

export default App;
