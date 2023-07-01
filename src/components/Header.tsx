import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import './../styles/other-page/Header.scss'
import ButtonStyle from './home-page/_button/ButtonStyle'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


type Props = {}

export default function Header({ }: Props) {
    const [isMobile, setIsMobile] = React.useState(true)
    const [isShow, setIsShow] = React.useState(false)

    useEffect(() => {
        // Check if the code is running on the client side
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 800);
            setIsShow(true);

            // Event listener to update the state when the window size changes
            const handleResize = () => {
                setIsMobile(window.innerWidth < 800);
            };

            window.addEventListener('resize', handleResize);

            // Clean up the event listener when the component is unmounted
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <div id='header'>
            {isShow && (isMobile ? <Mobile /> : <Desktop />)}
        </div>
    )
}

function Desktop() {
    return (
        <div id='desktop'>
            <div id='left'>
                <img src='/2-removebg-preview.png' alt='logo' id='logo' width={190} height={90} />
                <div className='list-menu'>
                    <Link href='#'><b>Home</b></Link>
                    <Link href='#'><b>Dashboard</b></Link>
                    <Link href='/demo'><b>Demo</b></Link>
                </div>
            </div>
            <div id='right'>
                <ButtonStyle option='1' value='Donate' bgroundColor='white' color='black' />
                <ButtonStyle option='1' value='Sign up' bgroundColor='rgb(216,234,204)' color='black' />
            </div>
        </div>
    )
}

function Mobile() {
    return (
        <div id='mobile'>
            <div id='top'>
                <img src='/2-removebg-preview.png' alt='logo' id='logo' width={190} height={90} />
            </div>
            <div id='bottom'>
                <div className='list-menu'>
                    <a href='#'><HomeRoundedIcon style={{ fontSize: '2.3rem' }} /></a>
                    <a href='#'><SpaceDashboardRoundedIcon style={{ fontSize: '2rem' }} /></a>
                    <a href='#'><VisibilityRoundedIcon style={{ fontSize: '2rem' }} /></a>
                    <a href='#'><AccountCircleRoundedIcon style={{ fontSize: '2rem' }} /></a>
                </div>
            </div>
        </div>
    )
}