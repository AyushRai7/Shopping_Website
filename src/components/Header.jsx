import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

export default function Header() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    toast.info("Logged out!");
    navigate('/'); 
  };

  return (
    <header className="header">
      <nav>
        <div className="nav-items">
          <Link to="/home">Home</Link>
          <Link to="/cart">Cart</Link>
          {token && <button onClick={handleLogout}>Logout</button>}
        </div>
      </nav>
    </header>
  );
}
