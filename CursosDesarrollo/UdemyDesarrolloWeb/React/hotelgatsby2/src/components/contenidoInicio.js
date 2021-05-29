import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'

const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`
  query {
    allDatoCmsPagina(filter: { slug: {eq: "inicio"}}) {
      nodes {
        titulo
        contenido
        imagen{
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
  `);

  return (  
    <>
      <h2>titulo0</h2>
    </>
  );
}
 
export default ContenidoInicio;