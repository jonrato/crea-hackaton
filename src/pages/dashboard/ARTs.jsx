/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';
import ContentARTs from './ContentARTs';
import Header from '../../components/Header';
import './Art.css'
const ARTs = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevState) => !prevState);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{ height: '13vh' }}>
          <Header />
        </div>
        <Container fluid style={{ height: '93.5vh' }}>
          <Row>

              <div
                className="bg-warning sidebar-shadow"
                style={{
                  width: '20vw',
                  backgroundColor: 'rgba(0, 0, 128, 0.8)',
                  color: 'black',
                  height: 'calc(100vh - 60px)',
                }}
              >
                <Sidebar/>
              </div>
            <Col md={7}>
              <ContentARTs/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ARTs;
