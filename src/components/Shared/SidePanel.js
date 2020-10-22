import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logos/main-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHdd, faCommentAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import './SidePanel.css';
import { signedUserContext } from '../../App';
import { extractSessionStorage, pushSessionStorage } from './SessionManagement/SessionManagement';

const SidePanel = () => {
    const history = useHistory();
    const [signedUser] = useContext(signedUserContext);
    const [isAdmin, setIsAdmin] = useState(extractSessionStorage('isAdmin') || false);

    useEffect(() => {
        !isAdmin && fetch('https://design-agency-server.herokuapp.com/adminValidation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: signedUser.email })
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setIsAdmin(true);
                    pushSessionStorage('isAdmin', true);
                }
            });
    }, [])

    return (
        <div className='side-panel col-md-2'>
            <div className='sidepanel-logo'>
                <img onClick={() => history.push('/')} src={logo} alt="" />
            </div>

            <Link to="/order">
                <div className="sidepanel-option-alignment">
                    <p><FontAwesomeIcon icon={faShoppingCart} /></p>
                    <p>Order</p>
                </div>
            </Link>

            <Link to = {!isAdmin ?  "/servicelist" : "/allServiceList" }>
                <div className="sidepanel-option-alignment">
                    <p><FontAwesomeIcon icon={faHdd} /></p>
                    <p>Service list</p>
                </div>
            </Link>

            <Link to="/review">
                <div className="sidepanel-option-alignment">
                    <p><FontAwesomeIcon icon={faCommentAlt} /></p>
                    <p>Review</p>
                </div>
            </Link>

            {
                isAdmin && <>
                    <Link to="/addService">
                        <div className="sidepanel-option-alignment">
                            <p><FontAwesomeIcon icon={faPlus} /></p>
                            <p>Add Service</p>
                        </div>
                    </Link>

                    <Link to="/makeAdmin">
                        <div className="sidepanel-option-alignment">
                            <p><FontAwesomeIcon icon={faUserPlus} /></p>
                            <p>Make Admin</p>
                        </div>
                    </Link>
                </>
            }
        </div>

    );
};

export default SidePanel;