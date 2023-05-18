import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import Termos from './routes/Termos'
import Tiss from './routes/Tiss'
import Links from './routes/Links'
import Contatos from './routes/Contatos'

const App = () =>  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/termos' element={<Termos />} />
        <Route path='/tiss' element={<Tiss />} />
        <Route path='/links' element={<Links />} />
        <Route path='/contatos' element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
