import './App.css';
import Footer from './componets/Footer';
import knicksLogo from './assets/NewYorkKnicksLogo-zyhLXOdc2Oo-1080p-1657080387358.mp4';

function App() {
  return (
      <div className='hero'>
        <center>
        <video height={1635} autoPlay loop muted  id='video'>
            <source src={knicksLogo} type='video/mp4' />
        </video>
        </center>
        <Footer />
    </div>
  );
}

export default App;
