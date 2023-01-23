import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogMain from './blog/1. blogMain/BlogMain';



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogMain />} />
      </Routes>
    </Router>
  );
}

export default App;
