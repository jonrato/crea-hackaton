
import { Container, Row, Col, Card } from 'react-bootstrap';
import buscarArt from "../../images/ic-busca-art.png"
import consultaObra from "../../images/ic-consulta-obra.png";
import personalizacao from "../../images/ic-personalizacao.png";
import novaCargo from "../../images/ic-nova-cargo-funcao.png";
import artObra from "../../images/ic-busca-art.png";
import artMultipla from "../../images/ic-art-multipla.png"
import alertaCrea from "../../images/ic-alerta-crea.png"


const ContentARTs = () => {
    return(

        <div className=' d-flex align-items-center justify-content-center'>
        <Container fluid>
            {/* Primeira linha de cards */}
            <Row 
                className='d-flex justify-content-center' 
                style={{
                    width:'60vw', 
                    marginTop:'2vw',
                    marginLeft:'1rem'
                }}
            >
                <Col >
                    <img src={alertaCrea}
                    className='col-3'
                    style={{width:'5rem'}}
                    />
                    <p className=''>
                        Atenção!
                    </p>
                    <small>
                        Para preencher as A.R.T.s 
                        retificadoras, primeiramente acesse Consulta A.R.T e
                        selecione a A.R.T. a vincular.
                    </small>
                </Col>
                <Col  style={{width:'23vw'}}>
                    <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
                    <Card.Title>
                        <img src={buscarArt} />
                    </Card.Title>
                    <Card.Subtitle>
                        Consulta A.R.T.
                    </Card.Subtitle>
                    <Card.Text className="col-6 text-center">
                        Busca A.R.T.s iniciadas para dar baixa, substituir, retificar
                    </Card.Text>
                    </Card>
                </Col>
                <Col style={{width:'23vw'}}>
                <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
                    <Card.Title>
                        <img src={consultaObra} />
                    </Card.Title>
                    <Card.Subtitle>
                        Consulta Obras/Serviços
                    </Card.Subtitle>
                    <Card.Text className="col-6 text-center">
                        Consultas área de atuação, sub-área...
                    </Card.Text>
                    </Card>
                </Col>
                <Col style={{width:'23vw'}}>
                <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
                    <Card.Title>
                        <img src={personalizacao} />
                    </Card.Title>
                    <Card.Subtitle>
                        Personalização da A.R.T.
                    </Card.Subtitle>
                    <Card.Text className="col-6 text-center">
                        Consultas, Preenchimento, Personalização
                    </Card.Text>
                    </Card>
                </Col>
            </Row>

            {/* Segunda linha de cards */}
            <Row 
                className='justify-content-center' 
                style={{
                    width:'60vw', 
                    marginTop:'2rem',
                    marginLeft:'1rem'
                    }}
                >
                    <Col
                        style={{width:'5rem'}}
                    >
                    </Col>
                <Col style={{width:'23vw'}}>
                <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
                    <Card.Title>
                        <img src={novaCargo} />
                    </Card.Title>
                    <Card.Subtitle>
                        Nova A.R.T. Cargo/Função
                    </Card.Subtitle>
                    <Card.Text className="col-6 text-center">
                        Currículo, Convênios, Dados do Profissional
                    </Card.Text>
                    </Card>
                </Col>
                <Col style={{width:'23vw'}}>
                <a href="/novaart">
                    <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
                        <Card.Title>
                            <img src={artObra} />
                        </Card.Title>
                        <Card.Subtitle>
                            Nova A.R.T
                        </Card.Subtitle>
                        <Card.Text className="col-6 text-center">
                            Obra/Serviço
                        </Card.Text>
                    </Card>
                </a>
                </Col>
                <Col style={{width:'23vw'}}>
                <Card className="rounded d-flex align-items-center justify-content-center" style={{ border: '2px solid #004D8E', backgroundColor: 'white', height: '30vh' }}>
                    <Card.Title>
                        <img src={artMultipla} />
                    </Card.Title>
                    <Card.Subtitle className='text-center'>
                        Nova A.R.T. Múltipla
                    </Card.Subtitle>
                    <Card.Text className="col-6 text-center">
                        Currículo, Convênios, Dados do Profissional
                    </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContentARTs;