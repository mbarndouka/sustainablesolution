import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import "@fontsource/lexend";
import Home from './pages/Home/Home';
import Notfound from './pages/Notfound/Notfound';
import Loading from './pages/Loading/Loading';
import Signin from './pages/signin/Signin';
import Signup from './pages/Signup/Signup';
import Dashspon from './pages/Dashborbsponsor/Dashspon';
import Searchsch from './pages/Searchschool/Searhsch';
import Contactus from './components/Contactus/Contactus'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Loading' element={<Loading />} />
        <Route path='/' element ={< Home />}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/Signin' element = {<Signin/>}/>
        <Route path='/Contactus' element = {<Contactus/>}/>
        <Route path='/Dashspon' element = {<Dashspon/>}/>
        <Route path='/Searchsch' element = {<Searchsch/>}/>
        <Route path='*' element = {<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
