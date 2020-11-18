import React, { Fragment } from 'react'
import './Landing.scss'

const Landing = () => {
    return (
        <Fragment>
        <section id="header">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">

                    <div className="container">
                        <a href="!#" className="navbar-brand">WeConnect</a>
                        <button className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a href="!#" className="nav-link">SignUp</a>
                                </li>
                                <li className="nav-item">
                                    <a href="!#" className="nav-link">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a href="!#" className="nav-link">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

        <section className="main">

            <div className="container">
                <div className="row pt-md-5">
                    <div className="col-sm-6">
                        <h2>Welcome to weConnect</h2>
                        <p>Velit deserunt aliquip anim eiusmod laborum quis cupidatat commodo eiusmod qui aliqua et commodo enim. Aliquip nisi est fugiat esse ipsum Lorem Lorem proident nisi esse deserunt adipisicing. Ut eiusmod exercitation nostrud laborum esse. Ullamco duis enim veniam enim. Magna labore elit adipisicing id. Quis occaecat incididunt minim elit eiusmod minim in minim do ipsum cupidatat duis laboris.</p>
                        <a href="/login" className="btn">Login/SignUp</a>
                    </div>
                </div>
            </div>
        </section>

        </Fragment>
    )
}

export default Landing
