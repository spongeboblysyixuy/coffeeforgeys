import React from 'react';
import './CoffeeList.css'
import CoffeeBlock from "./CoffeeBlock/CoffeeBlock";

function CoffeeList() {
    return(
        <div className="coffeelist">
            <span>Nossos cafés</span>
            <CoffeeBlock/>
        </div>
    )
}

export default CoffeeList;