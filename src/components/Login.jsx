import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import './Login.css';
import logo from "../img/icono_sabores_urbanos.jpeg"


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarías con tu backend Node.js/Express (RF1)
    console.log('Datos de inicio de sesión:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        <div className="login-logo-container">
          <img 
            src={logo} 
            alt="Sabores Urbanos Logo" 
            className="login-logo"
          />
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <div className="input-wrapper">
              <User className="input-icon left" size={18} />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingresa tu usuario"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-wrapper">
              <Lock className="input-icon left" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Ingresar contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;