/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import ContentSection from '../components/ContentSection';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={5} style={{ backgroundColor: 'rgba(0, 0, 128, 0.8)', color: '#fff', height: '100vh' }}>
          <Sidebar handlePageChange={handlePageChange} />
        </Col>
        <Col md={7}>
          <ContentSection currentPage={currentPage} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
