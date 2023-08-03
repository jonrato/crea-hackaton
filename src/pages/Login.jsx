/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import RightSection from '../components/Right';
import LeftSection from '../components/Left';
import Header from '../components/Header';

const Login = () => {
  return (
    <div className='app-container'>
        <Header/>
        <LeftSection/>
        <RightSection/>
    </div>
  );
};

export default Login;
