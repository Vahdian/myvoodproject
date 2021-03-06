
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './core/routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
