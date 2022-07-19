import './App.css';
import Index from './routes/Index'
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App max-w-[1920px]	mx-auto">
      <Index />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
