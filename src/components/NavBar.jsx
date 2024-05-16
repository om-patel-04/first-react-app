import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/first-react-app/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/first-react-app/">{props.home}</Link>
                                {/* <a className="nav-link active" href="#">{props.home}</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className={`form-check-label text-${props.mode==='light'? 'dark':'white'} mx-2`} htmlFor="flexSwitchCheckDefault">{props.navStyle}</label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
