import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    background-color: #fff;
    padding: 3rem;
    border-radius: .5rem;
    max-width: 800px;
    margin-top: 2rem;

    @media (min-width: 768px){
        margin-top: 5rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-size: 1.4;
        font-weight: bold;
    }
`;

const Frase = ({frase}) => {
    return (  
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
    );
}
 
export default Frase;