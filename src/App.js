//Halil İbrahim Sabo 

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';
import Anket from './components/Anket';
import { useSelector } from 'react-redux';
function App() {
  const [token] = useToken(); //tokenı usetoken içerisinden iste 
  console.log(token.token,"token");

  const {anket} = useSelector(state => state.anket)//use selector ile stateleri dolaşıp anket değerini alcak //doğru ise gözüksün {anket && < Anket/>}
//navbar sayfasının açılması için token altında token olması gerekiyor
//token altindaki token yoksa link to ile /auth'a yönlendir
  return (
    <div className="App">

 <BrowserRouter>

 {token?.token && <Navbar/>}
 {anket && < Anket/>}
<Routes>
<Route path="/" element={!token?.token ? <Link to ={'/auth'}/>  : <Home />} /> 
<Route path="/auth" element={<Auth />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
