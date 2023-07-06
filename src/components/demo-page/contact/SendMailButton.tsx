import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import '../page.scss'
import { useThemeContext } from '@/components/demo-page/ThemeContext'

type Props = {
    isMobile?: boolean,
}

export default function SendMailButton({ isMobile }: Props) {
    const { theme } = useThemeContext()!;

    function handleOnMouseOver() {
        const btnMoreAboutMe = document.getElementById('btn-more-about-me')!;
        btnMoreAboutMe.style.width = '14rem';
    }

    function handleOnMouseOut() {
        const btnMoreAboutMe = document.getElementById('btn-more-about-me')!;
        btnMoreAboutMe.style.width = '1px';
    }

    return (
        <div id='modal-more-about-me'>
            <div
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
                style={{
                    borderRadius: '10rem',
                    border: '1px solid rgb(255,180,0)',
                    width: '14rem',
                    float: 'right',
                    overflow: 'hidden',
                    marginRight: isMobile ? '-1.5rem' : '0',
                }}
            >
                <b style={{
                    fontSize: '.8rem',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    userDrag: 'none',
                    position: 'absolute',
                    left: '43.5%',
                    zIndex: 5,
                    padding: isMobile ? '1rem' : '1.3rem 0',
                    color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                } as any}
                >SEND MESSAGE</b>
                <Button
                    id='btn-more-about-me'
                    style={{
                        backgroundColor: 'rgb(255,180,0)',
                        width: '1px',
                        height: isMobile ? '3rem' : '3.6rem',
                        minWidth: '0',
                        transition: 'all 0.25s',

                    }}
                >
                    <SendIcon
                        style={{
                            backgroundColor: 'rgb(255,180,0)',
                            position: 'absolute',
                            right: '0',
                            borderRadius: '50%',
                            padding: isMobile ? '.6rem' : '.85rem',
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: '2rem',
                            textAlign: 'center',
                        }}
                    />
                </Button>
            </div>
        </div>
    );
}