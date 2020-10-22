import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './LoginDesign.css';
import logo from '../../../images/logos/main-logo.png';
import { googleSignIn, storeAuthTokens } from '../LoginMechanism/LoginMechanism';
import { pushSessionStorage } from '../../Shared/SessionManagement/SessionManagement';
import { signedUserContext } from '../../../App';

const LoginDesign = () => {
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: '/' } };
    
    const [signedUser, setSignedUser, token, setToken] = useContext(signedUserContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(newUser => {
                if (newUser.uid) {
                    loginProcedure(newUser);
                }
            });
    }

    const loginProcedure = (newUser) => {
        storeAuthTokens()
            .then(idToken => {
                setToken(idToken);
                pushSessionStorage('authToken', idToken);
                setSignedUser(newUser);
                pushSessionStorage('signeduser', newUser);
                alert('Signin Successful');
                history.replace(from);
            });
    }

    return (
        <div>
            <div className='text-center logo-size'><img onClick={() => history.push('/')} src={logo} alt="" /></div>
            <div className="login-container">
                <div className="authentication-card alignment sign-with-google-container">
                    <GoogleSignIn handleGoogleSignIn={handleGoogleSignIn} logo="google"></GoogleSignIn> {/*handleGoogleSignIn={handleGoogleSignIn}*/}
                    <p className="center-align">Don't have an account?<Link to='/signup' className="text-color">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginDesign;