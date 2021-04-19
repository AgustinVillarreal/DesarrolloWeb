import React from 'react';

import Lottie from 'react-lottie';

import * as rosa from '../lottie/rosa.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rosa.default,
    rendererSettings:{
        preserveAspectRatio: 'xMidYMid slice',
    }
}

const Loading = () => {

    return (  
        <Lottie classList='.carga' options={defaultOptions} height={120} width={120}/>  
    );
}
 
export default Loading;