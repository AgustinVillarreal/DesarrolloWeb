import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'
import axios from 'axios'

function App() {

  const [informacion, setInformacion] = useState({});
  const [letra, setLetra] = useState('');
  const [artistas, setArtistas] = useState({})

  useEffect(() => {
    if(Object.keys(informacion).length === 0) return;

    const consultarAPILetra = async() => {
      const {artista, cancion} = informacion;
      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlInformacion = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const [letra, infoArtistas] = await Promise.all([
        axios(urlLetra),
        axios(urlInformacion)
      ])
      setLetra(letra.data.lyrics)
      setArtistas(infoArtistas.data.artists[0])
      //EVITAR LOOP
      setInformacion({});

      
    }

    consultarAPILetra()
  }, [informacion, artistas])
  
  return (
    <Fragment>
      <Formulario setInformacion={setInformacion}/>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Info info={artistas}/>
          </div>
          <div className='col-md-6'>
            <Cancion letra={letra} />  
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
