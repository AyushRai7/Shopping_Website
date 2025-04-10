import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import { toast } from 'react-toastify';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    if (res.token) {
      localStorage.setItem('token', res.token);
      toast.success("Logged in successfully!");
      nav('/home');
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
        <p className="footer-text">Developed by Ayush Rai</p>
      </form>
    </div>
  );
}
