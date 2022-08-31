import { React, useState, useEffect } from "react";
import axios from 'axios';
import SeguimientoItem from "./../components/SeguimientoItem"
import { Col, Row } from "react-bootstrap";

function Espera(props){
    return(
        <h4>En Espera</h4>
    );
}

const SeguimientoPage = (props) => {

    <Row>
        <Col><div className="">
            <h1 className='nosotros GridH1' style={{ marginTop: "120px" }}> Seguimiento </h1>
            <hr color='black' size='6'></hr></div>
        </Col>
        <Col></Col>
        <Col></Col>
    </Row>

    const [loading, setLoading] = useState(false);
    const [seguimientos, setSeguimientos] = useState([]);

    useEffect(() => {
        const cargarSeguimientos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/seguimiento');
            setSeguimientos(response.data);
            setLoading(false);
        };
        cargarSeguimientos();
    }, []);
    return (
        <div className="holder">
            <Row>
                <Col>
                </Col>
                <Col><div className="">
                    <h1 className='nosotros GridH1' style={{ marginTop: "110px" }}> Seguimientos </h1>
                    <hr color='black' size='6'></hr></div></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                <div className="">
                        <h4 className='nosotros GridH1' style={{ marginTop: "110px" }}> Número de Pedido </h4>
                       
                    </div>
                </Col>
                <Col>
                    <div className="">
                        <h4 className='nosotros GridH1' style={{ marginTop: "110px" }}> Estado de Pedido </h4>
                       
                    </div>
                </Col>
                <Col>
                <div className="">
                        <h4 className='nosotros GridH1' style={{ marginTop: "110px" }}> Comentarios </h4>
                        
                    </div>
                </Col>
            </Row>
            <Row>
           <hr color='black' size='6'></hr>
           </Row>
            {
                loading ?
                    (<p>Cargando...</p>
                    ) : (seguimientos.map(item => <SeguimientoItem key={item.id}
                        number={item.numero} status={item.estado}
                        comentary={item.comentario} />)
                    )
            }
        </div>)
};

export default SeguimientoPage