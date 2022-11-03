import './App.css'
import Navbar from './comp/Navbar';
import Footer from './comp/Footer';



function App() {

  return (
    <div className="App">
      <Navbar title='TextModifier'/>
      <Footer name='Copyright 2022 &copy; TextModifier'/>
    </div>
  );
}

export default App;
