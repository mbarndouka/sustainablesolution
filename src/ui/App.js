import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Notfound from './pages/Notfound/Notfound';
import Loading from './pages/Loading/Loading';
import Signin from './pages/signin/Signin';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Loading' element={<Loading />} />
        <Route path='/' element ={< Home />}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/Signin' element = {<Signin/>}/>
        <Route path='*' element = {<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
