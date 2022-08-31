import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./../styles/components/pages/NosotrosPage.css";

function NosotrosPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='nosotros GridH1'>
                        La Empresa
                    </h1>
                    <hr color='black' size='6'></hr>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="texto-empresa">
                        Nuestra empresa nació como Pistones Oddi y hoy queremos compartir nuestro nuevo enfoque en la compañía.
                        La calidad es fundamental y es un factor estratégico en nuestros valores,
                        para continuar sirviendo al mercado Nacional y competir a nivel internacional.
                    </p>
                </Col>
                <Col>
                    <p className="texto-empresa">
                        Ofrecemos servicios de fundición para casos particulares, somos especialistas en la fabricación de piezas de todo tipo de aluminio según plano o muestra.
                        Diseñamos modelos complejos con impresión en 3D y volcamos el proyecto en fundición de aluminio.
                    </p>
                </Col>
                <Col>
                    <img className="texto-empresa" src="./img/laEmpresa.jpg" width='100%' height='auto' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="texto-empresa">
                        También contamos con servicio de rectificado de motores.
                        Realizamos la reparación de una línea extensa de motores diesel y nafteros,
                        en lo que se destacan las siguientes actividades:
                    </p>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div className="textocheck">
                                <img src="./img/1828640.png" height='30' />
                                <p style={{ fontZise: 30, }}>
                                    Rectificación de cigüenales
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="textocheck">
                                <img src="./img/1828640.png" height='30' />
                                <p style={{ fontZise: 30, }}>
                                    Rectificado de camisas
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="textocheck">
                                <img src="./img/1828640.png" height='30' />
                                <p style={{ fontZise: 30, }}>
                                    Reparación y mecanizado de tapas de cilindro
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="textocheck">
                                <img src="./img/1828640.png" height='30' />
                                <p style={{ fontZise: 30, }}>
                                    Semi-armados de motores
                                </p>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="fondo-azul">
                <Row>
                    <Col>
                        <h1 className="fondo-azul">Política de calidad</h1>
                        <hr color='white' width='300px' size='6'></hr>
                        <p>
                            En OTTO Pistones trabajamos para cumplir las metas propuestas orientados por el valor que,
                            para nosotros, tiene honrar nuestra palabra. Así elaboramos de manera personalizada, la mejor solución para cada cliente,
                            adaptando nuestro servicio a cada necesidad particular.</p>
                    </Col>
                    <Col>
                        <img src="./img/laEmpresa.jpg" width='100%' height='100%' />
                    </Col>
                </Row>
            </div>
            <hr></hr>
        </Container>
        
    )
}

export default NosotrosPage;