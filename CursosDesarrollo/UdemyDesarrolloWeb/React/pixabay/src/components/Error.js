import React from 'react';

const Error = ({mensaje}) => {
    return (  
        <p
            className='alert-primary p-4 my-3 text-center'
        >{mensaje}</p>
    );
}
 
export default Error