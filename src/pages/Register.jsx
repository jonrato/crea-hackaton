import React from "react";
import { Form, Button } from 'react-bootstrap';
import LeftSection from '../components/Left';
import Header from '../components/Header';
import RightRegister from "../components/RightRegister";

const Register = () => {

    return (
        <div className='app-container'>
            <Header/>
            <LeftSection/>
            <RightRegister/>
        </div>
      );
    };

export default Register;