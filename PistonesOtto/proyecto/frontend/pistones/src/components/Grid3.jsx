import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../styles/components/layout/Grid3.css';

function Grid3() {
    return (
        <Container>
            <Row>
                <Col><div className='text-center'>
                    <h1 className='GridH1'>
                        Quiénes Somos
                    </h1>
                    <hr color='black' width='300px' size='6'></hr>
                </div>
                </Col>
                <Col>
                    <p>Somos una empresa dedicada a la fabricación de pistones de fundición.
                        Tenemos una amplia variedad de modelos de todo tipo. Fabricamos pistones de automóviles diesel y nafteros,
                        camiones, tractores, motocicletas, compresores, barcos, aviones y vehículos de gran porte de uso minero.
                    </p>
                </Col>
                <Col>
                    <p>Somos una em​Tenemos un equipo de trabajo con una trayectoria de 30 años de experiencia en el rubro,
                        bajo una renovada directiva de jóvenes ingenieros con orientación en la mejora continua.
                    </p></Col>
            </Row>
            <Row>
                <Col>
                    <img src='./img/quienes.jpg' width='100%' height='auto' />
                </Col>
                <Col>
                    <img src='./img/quienes1.jpg' width='100%' height='auto' />
                </Col>
                <Col>
                    <img src='./img/quienes2.jpg' width='100%' height='auto' />
                </Col>
            </Row>
            <Row>
                <Col><div className='text-center'>
                    <h1 className='GridH1'>
                        Productos
                    </h1>
                    <hr color='black' width='300px' size='6'></hr>
                </div>
                </Col>
                <Col>
                    <h3>Método de Fabricacicón</h3>
                    <p>Se realiza la fundición por gravedad, ya sea con matriz o tierra.
                        Después se somete tratamiento a térmico T6,
                        para obtener una dureza y resistencia a la tracción.
                        Luego comienza el proceso de mecanizado,
                        que lleva en cada etapa un control de calidad específico de cada operación.
                        Posteriormente, se procede a un control final y por último, su embalaje para entrega inmediata o almacenamiento.
                    </p>
                </Col>
                <Col>
                    <h3>Control de calidad</h3>
                    <p>Se efectúan ensayos con máquinas universales de tracción para el control de la
                        calidad del material y se utiliza el durómetro para garantizar una correcta dureza.
                        Se llevan a cabo, en ciertos casos,  controles de ensayos no destructivo (END) sobre
                        el material, para evaluar presencias de poros,
                        fisuras o discontinuidades del material.
                    </p>
                </Col>
            </Row>
            <Row><div className='text-center'>
                    <h1 className='GridH1'>
                        Servicios
                    </h1>
                    <hr color='black' width='300px' size='6'></hr>
                    </div></Row>
            <Row>
                <Col>
                <div className='text-center'>
                    <img src='./img/Herramienta.jpg' height='auto' width='80px'/>
                <h2>Rectificación de Motores</h2>
                   </div>
                </Col>
                <Col>
                <div className='text-center'>
                <img src='./img/1063308-704073bd.png' height='auto' width='80px'/>
                <h2>Diseño de piezas con CAD</h2>
                   <span>Diseño con software, uso de FEM para el análisis mecánico del diseño de piezas</span>
                </div></Col>
                <Col>
                <div className='text-center'>
                <img src='./img/3322490-312a2b27.png' height='auto' width='80px'/>
                <h2>Reparación de grandes pistones y bruñido de camisas navales</h2>
                   </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Grid3;