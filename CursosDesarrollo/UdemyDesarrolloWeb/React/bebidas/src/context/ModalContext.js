import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

export const ModalContext = createContext();


const ModalProvider = (props) => {

   
    const [idReceta, setIdReceta] = useState(null);
    const [informacion, setReceta] = useState({});
    useEffect(() => {
        if(!idReceta) return;

        const obtenerReceta = async() => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resultado = await axios(url);
            setReceta(resultado.data.drinks[0])

        }
        obtenerReceta()
    }, [idReceta])

    return (  
        <ModalContext.Provider
            value={{
                informacion,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;