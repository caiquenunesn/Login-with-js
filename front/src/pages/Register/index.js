import React from 'react';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import * as yup from 'yup';
import { AuthC } from '../../Context/auth';

import './style.css';

export default function Register(){
    const { handleSubmit } = AuthC();

    const validations = yup.object().shape({
        name: yup.string().required('*'),
        email: yup.string().email().required('*'),
        passwordn: yup.string().required().min(5).max(22).required('*'),
        passwordC: yup.string().equals([yup.ref('passwordn'), null], 'Passowrd Errado'),
        whatsapp: yup.number().typeError('Apenas numeros').required('*').min(10),
        city: yup.string().required('*'),
        uf: yup.string().required('*').min(2).max(2)
    })

    return(
        <div className="register-container">
                
                <Formik initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
                >
                    <Form className="Form-content">
                    <h2 style={{color: "#454"}}>Faça Seu Cadastro</h2>
                        <div className="dubla-container">
                            <ErrorMessage name="name"/>
                            <Field className="Field-campo" type="text" placeholder="Nome" name="name" />
                            <ErrorMessage name="email" />
                            <Field className="Field-campo" type="email" placeholder="Email" name="email" style={{marginLeft: "30px"}}/>
                       </div>
                            <ErrorMessage name="passwordn" />
                            <Field className="Field-camp" type="password" placeholder="Senha" name="passwordn" style={{maxWidth: "400px"}} />
                            <ErrorMessage name="passwordc" />
                            <Field className="Field-camp" type="password" placeholder="Confirmar Senha" name="passwordC" style={{maxWidth: "400px"}} />
                            <ErrorMessage name="whatsapp" />
                            <Field className="Field-camp" type="text" placeholder="Telefone -  Ex (11) 90000-0000" name="whatsapp" style={{maxWidth: "400px"}} />
                        <div className="dubla-container">
                            <ErrorMessage name="city" />
                            <Field className="Field-campo" type="text" placeholder="Cidade" name="city" />
                            <ErrorMessage name="uf" />
                            <Field className="Field-campo" type="text" placeholder="UF" name="uf" style={{maxWidth: "50px", marginLeft: "30px"}}/>
                        </div>
                        <div className="dubla-buttons">
                            <Link className="link" to="/">
                                <FiLogIn size={16} color="#f00" style={{marginRight: "10px"}} />
                                Já tenho uma conta
                                </Link>
                            <button className="buttonc" type="submit">Cadastrar</button>
                        </div>
                    </Form>
                </Formik>
                
        </div>
    );
}