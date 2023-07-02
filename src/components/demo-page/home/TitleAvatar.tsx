import React from 'react'
import { useThemeContext } from '../ThemeContext'
import ModalMoreAboutMe from './ModalMoreAboutMe';

export default function Title() {
    const { theme } = useThemeContext()!;

    const styleTitle = {
        position: 'absolute' as 'absolute',
        top: '28%',
        left: '50%',
        width: '34rem',
        color: theme === 'light' ? '#323232' : 'white',
        textAlign: 'right' as 'right',
    }

    return (
        <div style={styleTitle}>
            <div style={{ fontSize: '3rem', fontWeight: '750', color: 'rgb(255,180,0)' }}>
                .I&apos;M NG TRONG TIEN<span style={{ userSelect: 'none' }}> --</span>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: '750', }}>
                WEB DEVELOPER<span style={{ opacity: '0' }}> --</span>
            </div>
            <p style={{ lineHeight: '2rem', fontSize: '1.1rem' }}>
                I&apos;m a VietNam based web developer focused on
                crafting clean & user‑friendly experiences, I am passionate about building
                excellent software that improves the lives of those around me
            </p>
            <ModalMoreAboutMe />
        </div>
    )
}