import React from "react"
import CarrouselHome from "../components/Carrousel";
import FormularioContacto from "../components/FormularioContacto";
import Grid3 from "../components/Grid3";
import "./../styles/components/pages/HomPage.css";
function HomPage() {
    return (
        <> 
            <CarrouselHome />
           <div className="separacion">
                <Grid3 />
            </div>
            <div className="separacion">
            <FormularioContacto />
            </div>
        </>
    );
}

export default HomPage;