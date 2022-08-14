
import React from 'react'
import { auth, provider } from './firebase'
import './login.css'
import WhatsApp from './WhatsApp-Logo.wine.png'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
    const [ {}, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>{ 
        dispatch({
            type:actionTypes.SET_USER,
            user: result.user,
        })
    })
     .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__img">
                    <img src={WhatsApp} alt="" />
                </div>
                <div className="login__text">
                    <h1>Sign in to whatsapp</h1>
                </div>

                <button type='submit' onClick={signIn}>Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login