import React, { useContext, useState } from "react";
import { css } from "@emotion/react";
import Router, { useRouter } from "next/router";
import Layout from "../components/layouts/Layout";
import {
  Campo,
  Error,
  Formulario,
  InputSubmit,
} from "../components/ui/Formulario";

// Validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearProducto from "../validacion/validarCrearProducto";
import { FirebaseContext } from "../firebase";
import Error404 from "../components/layouts/404";

const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  // imagen: "",
  url: "",
  descripcion: "",
};
const NuevoProducto = () => {
  const [error, setError] = useState(false);
  const [imagen, setImagen] = useState(null);

  const { valores, errores, handleChange, handleBlur, handleSubmit } =
    useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);

  const { nombre, empresa, url, descripcion } = valores;

  // hook de routing para redireccionar
  const router = useRouter();

  // context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  const handleFile = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setImagen(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const uploadTask = await firebase.storage
      .ref(`products/${imagen.lastModified}${imagen.name}`)
      .put(imagen);
    const downloadURL = await uploadTask.ref.getDownloadURL();
    return downloadURL;
  };

  async function crearProducto() {
    // si el usuario no esta autenticado llevar al login
    if (!usuario) {
      return router.push("/login");
    }

    // crear el objeto de nuevo producto
    const producto = {
      nombre,
      empresa,
      url,
      imagenUrl: await handleUpload(),
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName,
      },
      haVotado: []
    };

    // Insertarlo en la base de datos
    await firebase.db.collection("productos").add(producto);

    return router.push("/");
  }

  return (
    <div>
      <Layout>
        {!usuario ? (
          <Error404 />
        ) : (
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              Nuevo Producto
            </h1>
            <Formulario onSubmit={handleSubmit} noValidate>
              <fieldset>
                <legend>Información General</legend>

                <Campo>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre del Producto"
                    value={nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.nombre && <Error>{errores.nombre}</Error>}
                <Campo>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    id="empresa"
                    placeholder="Nombre Empresa o Compañía"
                    value={empresa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.empresa && <Error>{errores.empresa}</Error>}

                <Campo>
                  <label htmlFor="imagen">Imagen</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="imagen"
                    id="imagen"
                    onInput={(e) => handleFile(e)}
                  />
                </Campo>

                <Campo>
                  <label htmlFor="url">URL</label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    placeholder="URL de tu producto"
                    value={url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.url && <Error>{errores.url}</Error>}
              </fieldset>
              <fieldset>
                <legend>Sobre tu Producto</legend>
                <Campo>
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.descripcion && <Error>{errores.descripcion}</Error>}
              </fieldset>
              {error && <Error>{error}</Error>}
              <InputSubmit type="submit" value="Crear Producto" />
            </Formulario>
          </>
        )}
      </Layout>
    </div>
  );
};

export default NuevoProducto;
