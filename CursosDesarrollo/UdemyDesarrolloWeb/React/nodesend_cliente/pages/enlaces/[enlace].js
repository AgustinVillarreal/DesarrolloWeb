import Layout from "../../components/Layout";
import clienteAxios from "../../config/axios";
import React, { useContext, useState } from "react";
import appContext from "../../context/app/appContext";
import Alerta from "../../components/Alerta";

export async function getServerSideProps({ params }) {
  const { enlace } = params;
  const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);

  return {
    props: {
      enlace: resultado.data,
    },
  };
}

export async function getServerSidePaths() {
  const enlaces = await clienteAxios.get("/api/enlaces");
  return {
    paths: enlaces.data.enlaces.map((enlace) => ({
      params: {
        enlace: enlace.url,
      },
    })),
    fallback: false,
  };
}

export default ({ enlace }) => {
  
  const AppContext = useContext(appContext);
  const { mensaje_archivo, mostrarAlerta } = AppContext
  
  const [tienePassword, setTienePassword] = useState(enlace.password);
  const [password, setPassword] = useState("");

  const verificarPassword = async (e) => {
    e.preventDefault();

    const data = {
      password
    };

    try {
      const resultado = await clienteAxios.post(
        `/api/enlaces/${enlace.enlace}`,
        data
      );
      setTienePassword(resultado.data.password)
    } catch (error) {
      mostrarAlerta(error.response.data.msg)
    }
  };

  return (
    <Layout>
      {tienePassword ? (
        <>
          <p className="text-center">
            Este enlace esta protegido por un password, colocalo a continuación
          </p>
          { mensaje_archivo && <Alerta />}
          <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg">
              <form
                className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                onSubmit={(e) => {
                  verificarPassword(e);
                }}
              >
                <div className="mb-4">
                  <label
                    className="block text-black text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="shadow appearance-none border-rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                    id="password"
                    placeholder="Password del enlace"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <input
                  type="submit"
                  value="Validar Password"
                  className="bg-red-500 hover:bg-gray-900 hover:translate w-full p-2 text-white uppercase font-bold"
                />
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-gray-700 text-4xl text-center">
            Descarga tu archivo:
          </h1>
          <div className="flex mt-10 justify-center items-center">
            <a
              href={`${process.env.backendURL}/api/archivos/${enlace.archivo}`}
              className="bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer"
              download
            >
              Aqui
            </a>
          </div>
        </>
      )}
    </Layout>
  );
};
