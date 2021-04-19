import React, {Fragment, useState, useEffect} from 'react';
import Navbar from '../ui/Navbar'
import Loading from '../ui/Loading'

const Home = () => {
    // const [carga, setCarga] = useState(false)

    // useEffect(() => {
    //         setCarga(true);
    //         setTimeout(() => {
    //             setCarga(false)
    //         }, 5000);   
    // }, [])
  
    // if(carga){
    //     return (
    //         <Loading />
    //     )
    // }
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    );
}
 
export default Home;