import React, { Component } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'

export default class Login extends Component {

    constructor(props) {
        super(props);
        const elementBody = document.getElementById('body');
        elementBody.classList.add("bg-gradient-primary");
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


      validationSchema = Yup.object().shape({
        username: Yup.string()
          .email('Invalid email')
          .required('Required'),
        password: Yup.string()
          .required('Required'),
      });

    render() {
        return (
            <Formik
                initialValues = {{
                    username: '',
                    password: ''
                }}
                initialValues={this.initialValues}
                validate={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(props) => 
                {
                const { touched, errors } = props;
                console.log(errors);
            return (
            <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            
                                            <Form className="user">
                                                <div className="form-group">
                                                    <Field
                                                        name='username'
                                                        type="text" 
                                                        className="form-control form-control-user" 
                                                        id="username" 
                                                        placeholder="Enter Email Address..." />
                                                </div>
                                                {touched.username && <ErrorMessage name="username" />}
                                                <div className="form-group">
                                                    <Field
                                                        name='password' 
                                                        type="password" 
                                                        className="form-control form-control-user" 
                                                        id="exampleInputPassword" 
                                                        placeholder="Password" />
                                                </div>
                                                {touched.password && <ErrorMessage name="password" />}
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                    </div>
                                                </div>
                                                <input type='submit' value='Submit' className="btn btn-primary btn-user btn-block"/>
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw" /> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                                </a>
                                            </Form>
                                            
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}}
            </Formik>
        );
    }
}
