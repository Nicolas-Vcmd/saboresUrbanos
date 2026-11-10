import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a Sabores Urbanos</h1>
      <h3>Sistema de Gestión de Restaurantes</h3>

      <p>
        Consulta la disponibilidad de mesas y gestiona
        la atención de tus clientes de manera sencilla.
      </p>

      <Link to="/mesas" className="home-btn">
        Ver mesas disponibles
      </Link>
      <Link to="/login" className="home-btn home-btnl">
        Ingresar
      </Link>
    </div>
  );
};

export default Home;
