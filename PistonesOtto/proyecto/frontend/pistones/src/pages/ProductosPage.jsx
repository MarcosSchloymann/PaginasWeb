import { React, useState, useEffect } from "react";
import axios from 'axios';
import ProductosItem from "../components/ProductosItem";
import { Col, Row } from "react-bootstrap";

const ProductosPage = (props) => {

    <Row>
        <Col><div className="Productos">
            <h1 className='nosotros GridH1' style={{ marginTop: "120px" }}> Productos </h1>
            <hr color='black' size='6'></hr></div>
        </Col>
        <Col></Col>
        <Col></Col>
    </Row>

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();
    }, []);
    return (
        <div className="holder">
            <Row>
                <Col>
                </Col>
                <Col><div className="Productos">
                    <h1 className='nosotros GridH1' style={{ marginTop: "110px" }}> Productos </h1>
                    <hr color='black' size='6'></hr></div></Col>
                <Col></Col>
            </Row>
            {
                loading ?
                    (<p>Cargando...</p>
                    ) : (productos.map(item => <ProductosItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} />)
                    )
            }
        </div>)
};

// function ProductosPage (){
//     return (
//         // const {title, subtitle, imagen} = props;
//         <div className=''>
//             <Row>
//                 <Col></Col>
//                 <Col>
//             <h1 className='nosotros GridH1'>
//                         Productos
//                     </h1>
//                     <hr color='black' size='6'></hr>
//                     </Col>
//                     <Col></Col>
//             </Row>
//             <div className="container">
//             <Row>     
//                 <Col>
//                 <h1 className='GridH1' >Producto</h1>
//                 <h3 style={{textAlign:"center"}}>Subtitulo de producto</h3>
//                 </Col>
//                 <Col>
//                 <img src="x" width='100%' height='100%'/>
//                 </Col>
//             </Row>
//             </div>

//         </div>
//     );
// }

export default ProductosPage;