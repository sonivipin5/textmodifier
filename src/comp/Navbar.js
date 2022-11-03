
import { Routes, Route, Link, useLocation} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Mode from "./Mode";
import "./css/main.css";
export default function Navbar(prop) {
  const location = useLocation()
 
  const active = () => {
    let varName = document.querySelector('#check')
    varName.click()
  }
  return (

    <>
      <div className="Navbar">
      
          <header>
            <nav>
              <a href="/" className="logo">
                {prop.title}
              </a>
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check" className="check"></label>

              <ul id="ullist">
                <li onClick={active}><Link className={`atag ${location.pathname==='/' && 'active'}`} to="/">Home </Link></li>
                <li onClick={active}><Link className={`atag ${location.pathname==='/about' && 'active'}`} to="/about">About</Link> </li>
                <li onClick={active}><Link className={`atag ${location.pathname==='/contactUs' && 'active'}`} to="/contactUs"> contact </Link></li>
              </ul>
              <Mode />
             
            </nav>
          </header>
          <Routes>
            
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
       
      </div>
    </>
  );
}
