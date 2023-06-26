import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeContext } from './ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';

function App() {

  const {theme} = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar />
        <div className="main">
          
          <Routes>
            <Route path="/post/:postId" element={ <PostPage />} />
            <Route path="/" element={ <HomePage /> } />
            <Route path="/search/:query?" element={<HomePage />} />
            <Route path="/user/:userId" element={<HomePage />} />
          </Routes>
        </div>
        <div className="footer">
          <p>All right reserved, @Taninblog2023</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
