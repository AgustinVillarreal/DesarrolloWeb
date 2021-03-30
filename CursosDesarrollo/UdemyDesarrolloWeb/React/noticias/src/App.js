import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  //definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const consultarAPI = async() => {
      const keyId = '5f66925847a6480496b8194d77c37ca3'
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${keyId}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    } 
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo = 'Buscador de Noticias' />

      <div className='container white'>
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias = {noticias} />
      </div>

    </Fragment>
  );
}

export default App;
