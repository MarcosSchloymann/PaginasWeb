import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../../styles/components/layout/Footer.css';

function Footer() {
  return (
    <div className='estilos'>
      <Container>
        <Row>
          <Col>
            <div className='footer'><img src='./img/Otto-isologo-2a.png' height='80' width='auto' /></div>

          </Col>
          <Col>
            <div className='footer'>
              <img src='./img/2111774.png' height='50' width='auto' />
              <p>33335555</p>
            </div>

          </Col>
          <Col>
            <div className='footer'>
              <img src='./img/2111774.png' height='50' width='auto' />
              <p>33335555</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='iconos'>
              <a href='' target="_blank"><img src='./img/icons8-facebook-f-50.png' style={{ padding: 20 }} /></a>
              <a href='' target="_blank"><img src='./img/icons8-twitter-30.png' style={{ padding: 20 }} /></a>
              <a href='' target="_blank"><img src='./img/icons8-instagram-30.png' style={{ padding: 20 }} /></a>
            </div>
          </Col>
          <Col>
            <div className='footer'>
              <img src='./img/2111774.png' height='50' width='auto' />
              <p>33335555</p>
            </div>
          </Col>
          <Col>
            <div className='footer'>
              <img src='./img/2111774.png' height='50' width='auto' />
              <p>33335555</p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className='fondo'>
            ©2021 • Otto • Todos los derechos reservados
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;