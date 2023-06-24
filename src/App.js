import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <h1 className="gradient-text">Posts</h1>
        <ur>
          <li>
            <h2>Post 1</h2>
            <p>Post 1 content</p>
          </li>
          <li>
            <h2>Post 2</h2>
            <p>Post 2 content</p>
          </li>
        </ur>
      </div>
      <div className="footer">
        <p>All right reserved, @Taninblog2023</p>
      </div>
    </div>
  );
}

export default App;
