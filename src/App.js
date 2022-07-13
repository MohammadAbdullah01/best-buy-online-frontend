import './App.css';
import Index from './routes/Index'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Index />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
