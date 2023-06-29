import React from 'react'
import './styles/LoginPage.scss'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './utils/firebase_config';
import { Button } from '@mui/material';

type Props = {
    setIsLogin: (isLogin: boolean) => void;
}

export default function LoginPage({ setIsLogin }: Props) {

    const styleButton = {
        backgroundColor: 'white',
        border: 'none',
    }

    const handleLogin = () => {
        // Initialize Firebase
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((res: any) => {
            localStorage.setItem('email', res.user.email);
            localStorage.setItem('avatar', res.user.photoURL);
            localStorage.setItem('username', res.user.displayName);
            console.log(res);
            setIsLogin(true);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div id='login-page'>
            <div id='box'>
                <b>Sign in to use features</b>
                <br />
                <br />
                <Button variant="contained" style={{backgroundColor:'rgba(96, 97, 99, 0.468)', gap: '1rem'}} onClick={handleLogin}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'
                        alt='google-logo' width='30px' height='30px'
                    ></img>
                    Sign in with Google
                </Button>
            </div>
        </div>

    )
}