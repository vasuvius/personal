import HeaderBar from "./components/HeaderBar";
import Resume from "./components/resume";
import Bio from "./components/bio";
import './App.css';
import { 
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderBar />
        <Routes>
          <Route exact path="/" element={<Bio />} />
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
