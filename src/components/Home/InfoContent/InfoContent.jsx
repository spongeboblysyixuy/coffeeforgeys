import React from 'react';
import './InfoContent.css'
import {Route} from "react-router-dom";
import background from '../../../assets/Background.png'
import coffeeImage from '../../../assets/Imagem.png'
import TextContent from "./TextContent/TextContent";

function InfoContent() {
    return (
        <div className="textcontent_wrapper">
            <TextContent/>
            <img className="coffee-image" src={coffeeImage} alt="coffeeImage"/>
        </div>
    )
}

export default InfoContent;