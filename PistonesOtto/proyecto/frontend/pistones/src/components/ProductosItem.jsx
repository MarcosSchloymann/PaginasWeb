import React from "react";
import { Col, Row } from "react-bootstrap";

const ProductosItem = (props) => {
    const {title, subtitle, imagen} = props;
    return( 
        <div>
      
        <Row>
            <Col>
            <h1 className='GridH1' style={{padding:"30px"}}>{title}</h1>
            
<h3 style={{textAlign:"center"}}>{subtitle}</h3>
            </Col>
            <Col>
            <div style={{ display:"flex", justifyContent:"center", alignContent:"center"}}>
            <img src={imagen} style={{padding:"30px"}} width="auto" height="250"/>
            </div>
            </Col>
        </Row>
           
        </div>
        
    );
}

export default ProductosItem