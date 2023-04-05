import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import List from './components/List';
import Add from './components/Add';
import {  Route, Routes, } from 'react-router-dom'
import NavbarComp from './components/Nav';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
       <Routes>
      <Route path="/" element={ <List/> } />
      <Route path="/add" element={ <Add/> } />
      <Route path="/edit/:id" element={ <Add/> } />
      
    </Routes>
    </div>
  );
}

export default App;
