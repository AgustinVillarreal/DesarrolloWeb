import React from 'react';
import DetallesProducto from '../components/layouts/DetallesProducto';
import Layout from '../components/layouts/Layout'
import useProductos from '../hooks/useProductos';


const Home = () => {

  const { productos } = useProductos('creado')

  return (
    <div>
      <Layout>
        <div className='listado-productos'>
          <div className='contenedor'>
            <div className='bg-white'>
              {productos.map(producto => (
                <DetallesProducto
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;