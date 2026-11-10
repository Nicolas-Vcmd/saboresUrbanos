

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const AbrirPedido = () => {
  const { id } = useParams();

  const { data: mesa, isPending, error } = useFetch(`http://localhost:3001/mesas/${id}`);

  const [personas, setPersonas] = useState(1);
  const [observaciones, setObservaciones] = useState("");
  const [pedidoAbierto, setPedidoAbierto] = useState(false);

  const abrirPedido = (e) => {
    e.preventDefault();
    setPedidoAbierto(true);
  };

  return (
    <div className="pedido-container">
      <div className="pedido-card">
        {isPending && <p>Cargando mesa...</p>}
        {error && <p>{error}</p>}

        {mesa && (
          <>
            <h2>Abrir pedido</h2>

            <p>Mesa N° {mesa.numero}</p>
            <p>Sucursal: {mesa.sucursal}</p>
            <p>Capacidad: {mesa.capacidad} personas</p>

            {pedidoAbierto ? (
              <div className="pedido-confirmacion">
                <h3>Pedido abierto correctamente</h3>
                <p>Mesa: {mesa.numero}</p>
                <p>Comensales: {personas}</p>
                <p>Estado: Abierto</p>
                {observaciones && (
                  <p>Observaciones: {observaciones}</p>
                )}
              </div>
            ) : mesa.estado !== "disponible" ? (
              <p>Esta mesa no está disponible.</p>
            ) : (
              <form className="pedido-form" onSubmit={abrirPedido}>
                <label>Cantidad de comensales</label>
                <input
                  type="number"
                  min="1"
                  max={mesa.capacidad}
                  value={personas}
                  onChange={(e) => setPersonas(Number(e.target.value))}
                  required
                />

                <label>Observaciones</label>
                <textarea
                  value={observaciones}
                  onChange={(e) => setObservaciones(e.target.value)}
                  placeholder="Observaciones del pedido..."
                  rows="3"
                />

                <button type="submit">
                  Abrir pedido
                </button>
              </form>
            )}

            <Link
              className="pedido-volver"
              to={`/mesas/${mesa.id}`}
            >
              Volver a la mesa
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AbrirPedido;
