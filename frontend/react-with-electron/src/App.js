
import './App.css';
import HorizontalNav from './components/HorizontalNav';
import VerticalNav from './components/VerticalNav';
import BOMPage from './pages/BOMPage';
import Dashboard from './pages/Dashboard';
import PurchasePage from './pages/PurchasePage';
import SalesPage from './pages/SalesPage';
import { Route, Routes,Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfographicsPage from './pages/InfographicsPage';

function App() {
  return (
    <>
    <Routes>
    <Route index element={<Dashboard/>}></Route>
    <Route path='/purchases' element={<PurchasePage/>}></Route>
    <Route path='/sales' element={<SalesPage/>}></Route>
    <Route path='/bom' element={<BOMPage/>}></Route>
    <Route path='/infographics' element={<InfographicsPage/>}></Route>
   </Routes>
   <ToastContainer/>
    </>
  );
}

export default App;
