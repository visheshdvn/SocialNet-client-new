import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth';

const navbar = ({auth: {isAuthenticated, loading}, logout}) => {
    const authLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link active" to='/profiles'>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/posts'>
                    Developers
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/profile'>
                    Account
                </Link>
            </li>

            <li className="nav-item">
                <a className="nav-link" onClick={logout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to='/profiles'>Developers</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
        </ul>
    )

    return (
        <nav class="navbar navbar-expand-md navbar-light bg-secondary py-1 container-md fixed-top px-sm-1">
            <Link className="navbar-brand text-primary" to="/home">WeConnect</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            {!loading && (<Fragment> {isAuthenticated ? authLinks: guestLinks} </Fragment>)}
            </div>
        </nav>
    )
}

navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(navbar);
