import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [agregarGasto, setAgregarGasto] = useState(false);

  useEffect(() => {
    if (agregarGasto) {
      setGastos([...gastos, gasto]);
      const cantidadRestante = restante - gasto.cantidad;
      setRestante(cantidadRestante);
      setAgregarGasto(false);


    }

  }, [gasto, gastos, agregarGasto, restante ]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarPregunta ? (
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            actualizarPregunta={actualizarPregunta}
          />
        ) : (
          <div className="row">
            <div className="column one-half">
              <Formulario
                setGasto={setGasto}
                setAgregarGasto={setAgregarGasto}
              />
            </div>
            <div className="column one-half">
              <Listado gastos={gastos} />
              <ControlPresupuesto
                restante={restante}
                presupuesto={presupuesto}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
