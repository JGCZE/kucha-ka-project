import './App.css';
import Main from './pages/Main'
import AddMaterial from './pages/AddMaterial'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'
const App = () => {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Main" element={<Main />}/>
        <Route path="/add-material" element={<AddMaterial />} />
       
      </Routes>
    </BrowserRouter>
  )
}


export default App;
