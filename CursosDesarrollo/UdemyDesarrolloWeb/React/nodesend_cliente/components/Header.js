import React, { useContext, useEffect } from "react";
import Link from "next/link";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import {useRouter} from 'next/router'


const Header = () => {
  //Extraer el usuario autenticado en el LS
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext;

  const AppContext = useContext(appContext);
  const { limpiarState } = AppContext;

  const router = useRouter();

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const redireccionar = () => {
    router.push('/');
    limpiarState()
  }

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
        <img
          className="cursor-pointer w-64 mb-8 md:mb-0"
          src="/logo.svg"
          alt="Logo"
          onClick = {() => {
            redireccionar()
          }}
        />
      <div>
        {usuario ? (
          <div className='flex items-center'>
            <p className='mr-2'>Hola <span className='font-bold'>{usuario.nombre}</span></p>
            <button
              type="button"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase mr-2"
              onClick={() => {
                cerrarSesion()
              }}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <>
            <Link href="/login">
              <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">
                Iniciar Sesion
              </a>
            </Link>
            <Link href="/crearcuenta">
              <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">
                Crear Cuenta
              </a>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
