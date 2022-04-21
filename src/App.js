import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
            
          </li>

          <li>
            <Link to="/login">Login</Link>
            
          </li>         
          
        </ul>
      </nav>
  
    </div>
  );
}

export default App;
