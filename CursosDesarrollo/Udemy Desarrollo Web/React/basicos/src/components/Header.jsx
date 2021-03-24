import React from 'react';

// function Header(props) {

//     return (
//         <h1 className="encabezado"> {props.titulo} </h1>
//     );
// }
// Se puede utilizar destructuring con el props.titulo, es lo que la comunidad de react utiliza

function Header({titulo}) {

    return (
        <h1 className="encabezado"> {titulo} </h1>
    );
}
export default Header;