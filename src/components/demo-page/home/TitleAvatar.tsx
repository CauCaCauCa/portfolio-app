import React from 'react'
import { useThemeContext } from '../ThemeContext'
import ModalMoreAboutMe from './ModalMoreAboutMe';

export default function Title() {
    const { theme } = useThemeContext()!;
    const styleTitle = {
        position: 'absolute' as 'absolute',
        top: '27%',
        left: '49%',
        width: '34rem',
        color: theme === 'light' ? '#323232' : 'white',
        textAlign: 'right' as 'right',
    }
    return (
        <div style={styleTitle}>
            <div style={{ fontSize: '3rem', fontWeight: '750', color: 'rgb(255,180,0)' }}>
                .I'M NG TRONG TIEN<span style={{ userSelect: 'none' }}> --</span>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: '750', }}>
                WEB DEVELOPER<span style={{ opacity: '0' }}> --</span>
            </div>
            <p style={{ lineHeight: '2rem', fontSize: '1.1rem' }}>
                I'm a VietNam based web developer focused on
                crafting clean & user‑friendly experiences, I am passionate about building
                excellent software that improves the lives of those around me
            </p>
            <div className='btn-custom-2' style={{ marginTop: '1rem', float: 'right' }}>
                <div className='icon'>
                    <i className="fa-solid fa-arrow-right fa-2xl"></i>
                </div>
                <div className='detail' />
                <div style={{
                    border: 'solid 1px rgb(255,180,0)',
                    borderRadius: '8rem',
                    padding: '0 0 0 3rem',
                    height: '3.5rem',
                    width: '15rem',
                    textAlign: 'left' as 'left',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <b style={{
                        fontSize: '0.9rem',
                    }}>MORE ABOUT ME</b>
                    <ModalMoreAboutMe />
                </div>
            </div>
        </div>
    )
}