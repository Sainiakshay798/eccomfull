import './App.css';


import Header from './components/Header';
import { Outlet } from 'react-router-dom'; 
import Footer from './components/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
     
    <Header/>
    <main className='min-h-[calc(100vh-130px)]'>
    <Outlet/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
