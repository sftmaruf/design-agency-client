import React from 'react';
import { useHistory } from 'react-router-dom';
import mainlogo from '../../../images/logos/main-logo.png';

const Navbar = () => {
    const history = useHistory();

    return (
        <nav style = {{zIndex: 2}} className="navbar navbar-expand-lg navbar-light">
            <img style = {{width: '150px'}} src={mainlogo} alt=""/>                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active ml-3">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ml-3">
                        <a className="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item ml-3">
                        <a className="nav-link" href="#">Our Team</a>
                    </li>
                    <li className="nav-item ml-3">
                        <a className="nav-link" href="#">Contact us</a>
                    </li>
                    <li className="nav-item ml-3 mr-3">
                        <button onClick = {() => history.push('/login')} type="button" class="btn btn-dark">Login</button>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;