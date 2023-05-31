import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import Termos from './routes/Termos'
import Tiss from './routes/Tiss'
import Links from './routes/Links'
import Contatos from './routes/Contatos'
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import { UserStorage } from './context/UserContext';
import ProtectedRoute from './routes/ProtectedRoute';
import ChangePassword from './pages/changePassword/ChangePassword';
import { InfoExams } from './routes/InfoExams';
import UserConfig from './routes/userConfig/userConfig';

const App = () =>  {

  return (
    <BrowserRouter>
      <UserStorage>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/login/register' element={ <Register /> } />
        <Route path='/login/changepassword' element={<ChangePassword />} />

         <Route path="/" element={<ProtectedRoute />}>
           <Route path="/" element={<Home />} />
           <Route path="/userconfig" element={ <UserConfig />} />
           <Route path="/exames" element={ <InfoExams />} />
           <Route path="/termos" element={<Termos />} />
           <Route path="/tiss" element={<Tiss />} />
           <Route path="/links" element={<Links />} />
           <Route path="/contatos" element={<Contatos />} />          
         </Route>    
      </Routes>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
