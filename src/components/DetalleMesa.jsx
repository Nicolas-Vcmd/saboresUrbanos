
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const DetalleMesa = () => {
  const { id } = useParams();
  const { data: mesa, isPending, error } = useFetch(`http://localhost:3001/mesas/${id}`);

  return (
    <div className="mesa-details">
      {isPending && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {mesa && (
        <article className="detalle-card">
          <h2>Mesa N° {mesa.numero}</h2>

          <div className="detalle-fila">
            <span>Sucursal</span>
            <strong>{mesa.sucursal}</strong>
          </div>

          <div className="detalle-fila">
            <span>Capacidad</span>
            <strong>{mesa.capacidad} personas</strong>
          </div>

          <div className="detalle-fila">
            <span>Estado</span>
            <strong className={`estado ${mesa.estado}`}>
              {mesa.estado}
            </strong>
          </div>

          <h3>Reservas</h3>

          {mesa.reservas?.length > 0 ? (
            mesa.reservas.map((reserva) => (
              <div className="detalle-reserva" key={reserva.id}>
                <div className="detalle-fila">
                  <span>Cliente</span>
                  <strong>{reserva.cliente}</strong>
                </div>
                <div className="detalle-fila">
                  <span>Fecha</span>
                  <strong>{reserva.fecha}</strong>
                </div>
                <div className="detalle-fila">
                  <span>Hora</span>
                  <strong>{reserva.hora}</strong>
                </div>
                <div className="detalle-fila">
                  <span>Personas</span>
                  <strong>{reserva.cantidadPersonas}</strong>
                </div>
              </div>
            ))
          ) : (
            <p>Sin reservas registradas.</p>
          )}

          {mesa.estado === "disponible" && (
            <Link
              to={`/mesas/${mesa.id}/pedido`}
              className="btn-abrir-pedido"
            >
              Abrir pedido
            </Link>
          )}
        </article>
      )}
    </div>
  );
};

export default DetalleMesa;
