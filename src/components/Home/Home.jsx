import React from "react";
import './Home.css'
import InfoContent from "./InfoContent/InfoContent";
import CoffeeList from "./CoffeeList/CoffeeList";

function Home(){
    return(
        <div className="home_wrapper">
            <div className="content">
                <InfoContent/>
                <CoffeeList/>
            </div>
        </div>
    )
}

export default Home;