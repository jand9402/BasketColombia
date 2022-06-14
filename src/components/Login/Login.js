import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imagenes/logo.png"
import "./Login.css"


function Login(){
return(
    <div className="divLogin">
    <section className="Form mx-5">
        <div className="container containerLogin">
            <div className="row rowLogin no-gutters">
                <div className="col-lg-5 col-lg-5Img">
                    <img className="img-fluid" src={logo} alt="logo"/>
                </div>
                <div className="col-lg-7 px-5 pt-5 col-lg-7form">
                    <h4 className="font-weight-bold py-3">Iniciar sesión</h4>
                    <form>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="email" className="form-control my-3 p-3" placeholder="Correo" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="password" className="form-control my-3 p-3" placeholder="Contraseña" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button type="button" className="btn1 mb-3" >Iniciar Sesión</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button type="button" className="btn1 mb-3" >Iniciar Sesión con Goolge</button>
                        <a className="olvido" href="#">¿Olvidaste la contraseña?</a>
                        <p>¿No tienes una cuenta? <a href="#">Crear cuenta</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
)
}

export default Login