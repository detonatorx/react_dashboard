import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="appGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
