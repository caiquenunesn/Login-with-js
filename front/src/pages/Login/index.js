import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import { FiUser , FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AuthC } from '../../Context/auth';
import './style.css';

export default function Login(){
    const { handleLogon } = AuthC();
    
    
    const validation = yup.object().shape({
        email: yup.string().email().required('*'),
        pass: yup.string().min(5).required('*')
    })
    return (
        <div className="test">
            <Formik initialValues={{}}
            onSubmit={handleLogon}
            validationSchema={validation} >
                <div className="box">
                <div className="Container-Login">
                    <Form className="Form-group">
                    
                        <h1>Faça seu Login</h1>
                        <div className="div-container">
                        <FiUser className="icon" size={70} color="#000" style={{marginLeft: '120px'}}/>
                            <Field className="Field-container" placeholder="Email" type="email" name="email" />
                        </div>
                        <div className="div-container">
                            <Field className="Field-container" placeholder="Password" type="password" name="pass" />
                            
                        </div>
                        <div className="div-container2">
                        <button className="button" type="submit">Entrar</button>
                        </div>
                        
                        <Link className="link" to="/register" >
                            Não tenho cadastro<FiArrowLeft size={16} color="#f00"/>
                            </Link>
                    </Form>
                    </div>
                </div>
            </Formik>
        </div>
    );
}