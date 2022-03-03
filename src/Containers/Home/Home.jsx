
import React from 'react';

import "./Home.css";

import Contador from "../../Components/Contador/Contador";

const Home = () => {


    return (
        <div className="designHome">

            
            <Contador paso={5} color={"verde"}/>

            <Contador paso={2}/>

            <Contador paso={6}/>

        </div>
    )
}

export default Home;