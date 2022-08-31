import React from "react";
import { Col, Row } from "react-bootstrap";

const SeguimientoItem = (props) => {
    const {number, status, comentary} = props;
    return(
        <div>
      
        <Row>
            <Col>
            <h4 className='GridH1' style={{padding:"30px"}}>{number}</h4>
             </Col>
            <Col>
      <h4 style={{textAlign:"center"}}>{status}</h4>      
            </Col>
            <Col>
            <h4 style={{textAlign:"center"}}>{comentary}</h4>
            </Col>
        </Row>
           <Row>
           <hr color='black' size='6'></hr>
           </Row>
           
        </div>
        
    );
}

export default SeguimientoItem