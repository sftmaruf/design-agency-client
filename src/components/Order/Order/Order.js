import React, { useContext } from 'react';
import { signedUserContext } from '../../../App';
import { signOut } from '../../LoginDesign/LoginMechanism/LoginMechanism';
import SidePanel from '../../Shared/SidePanel';
import './Order.css';

const Order = (props) => {
    const [signedUser] = useContext(signedUserContext);

    return (
        <div className='row'>
            <SidePanel></SidePanel>
            <div className='volunteer-panel-container col-md-10 col-sm-12'>
                <div className="upper-bezel">
                    <h5>{props.title}</h5>
                    <h5 onClick = {() => signOut()}>{signedUser.name}</h5>
                </div>
                <div className='customize-panel'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Order;