import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TexrForm from './components/TexrForm';

function App() {
  // const [mode, setmode] = useState('light');
  return (
    <>
      {/* <Navbar title= "Text Utils" about= " About Us "/> */}
      <Navbar title="TextUtils"/>
      <div className='container my-5'>
      <TexrForm heading= "Enter Your Text to anlyze below"/>
      <About/>  
    
      

      </div>
      
      </>
  );
}

export default App;
