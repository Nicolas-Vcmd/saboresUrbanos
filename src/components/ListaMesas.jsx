
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ListaMesas = () => {
  const { data: mesas, isPending, error } = useFetch("http://localhost:3001/mesas");

  return (
    <div className="mesas">
      <h2>Listado de Mesas</h2>

      {isPending && <p>Cargando mesas...</p>}
      {error && <p>{error}</p>}

      <div className="mesas-grid">
        {mesas && mesas.map((mesa) => (
          <div className="mesa-item" key={mesa.id}>
            <h3>Mesa N° {mesa.numero}</h3>
            <p>Sucursal: {mesa.sucursal}</p>
            <p>Capacidad: {mesa.capacidad} personas</p>
            <p>Estado: {mesa.estado}</p>

            <Link to={`/mesas/${mesa.id}`}>
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaMesas;
