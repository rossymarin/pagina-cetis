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
        <div className="row">
          <Carousel />
          <PluginFB />
        </div>
        <Footer />
    </div>
  );
}

export default App;
