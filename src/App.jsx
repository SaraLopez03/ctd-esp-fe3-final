
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from "./Components/utils/global.context";



function App() {
  return (
      <ContextProvider>
        <div className="App">
            <Router>
              <Navbar/>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/dentist/:id' element={<Detail/>}/>
                <Route exact path='/favs' element={<Favs/>}/>
              </Routes>
              <Footer/>
            </Router>
        </div>
      </ContextProvider>
  );
}

export default App;
