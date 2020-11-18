import React from 'react'
import './Register.scss'
import {Link} from 'react-router-dom'
import image from '../../images/register.jpg'

const Register = () => {
    return (
        <div className="parent">
            <div className="container">
    <div className="row px-3">
      <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
        <div style={{backgroundImage: `url(${image})`, backgroundPosition:"center"}} className="img-left d-none d-md-flex"></div>

        <div className="card-body">
          <h4 className="title text-center mt-4 text-danger">
            Login into account
          </h4>
          <form className="form-box px-3">
            <div className="form-input forRegister text-danger">
              <span><i className="fa fa-envelope-o"></i></span>
              <input type="email" name="" placeholder="Email Address" required />
            </div>

            <div className="form-input forRegister text-danger">
              <span><i className="fa fa-key"></i></span>
              <input type="password" name="" placeholder="Password" required />
            </div>

            <div className="mb-3" style={{opacity: "0"}}>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="cb1" name="" />
                <label className="custom-control-label" >Remember me</label>
              </div>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-block text-uppercase bg-danger">
                Login
              </button>
            </div>

            <div className="text-center">
              <a href="!#" className="forget-link text-danger">
                Forget Password?
              </a>
            </div>

            {/* <div className="text-center mb-3">
              or login with
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <a href="!#" className="btn btn-block btn-social btn-facebook">
                  facebook
                </a>
              </div>

              <div className="col-4">
                <a href="!#" className="btn btn-block btn-social btn-google">
                  google
                </a>
              </div>

              <div className="col-4">
                <a href="!#" className="btn btn-block btn-social btn-twitter">
                  twitter
                </a>
              </div>
            </div> */}

            <hr className="my-4" />

            <div className="text-center mb-2">
              Don't have an account?
              <Link to="/login" className="register-link text-primary">
                &nbsp; Login Instead
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Register
