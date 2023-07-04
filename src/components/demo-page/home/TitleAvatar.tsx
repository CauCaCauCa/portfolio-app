import React from 'react'
import { useThemeContext } from '../ThemeContext'
import ModalMoreAboutMe from './ModalMoreAboutMe';
import { type } from 'os';

type Props = {
    isMobile?: boolean;
}

export default function TitleAvatar({ isMobile }: Props) {
    const { theme } = useThemeContext()!;

    const styleTitle = {
        position: 'absolute' as 'absolute',
        top: '28%',
        left: '50%',
        width: '38%',
        color: theme === 'light' ? '#323232' : 'white',
        textAlign: 'right' as 'right',
    }

    const styleTitleMobile = {
        position: 'absolute' as 'absolute',
        color: theme === 'light' ? '#323232' : 'white',
        top: '20rem',
        padding: '0 5%',
    }

    return (
        <div style={isMobile ? styleTitleMobile : styleTitle}>
            <div style={{
                fontSize: isMobile ? '1.5rem' : '3rem',
                fontWeight: '750', color: 'rgb(255,180,0)',
                textAlign: isMobile ? 'center' : 'right',
            }}>
                .I&apos;M NG TRONG TIEN<span style={{ userSelect: 'none', display: isMobile ? 'none' : '' }}> --</span>
            </div>
            <div style={{
                fontSize: isMobile ? '1.5rem' : '3rem',
                fontWeight: '850',
                textAlign: isMobile ? 'center' : 'right',
            }}>
                WEB DEVELOPER<span style={{ opacity: '0', display: isMobile ? 'none' : '' }}> --</span>
            </div>
            <p style={{
                lineHeight: '2rem',
                fontSize: isMobile ? '.9rem' : '1.1rem',
                textAlign: isMobile ? 'center' : 'right',
            }}>
                I&apos;m a VietNam based web developer focused on
                crafting clean & user‑friendly experiences, I am passionate about building
                excellent software that improves the lives of those around me
            </p>
            <ModalMoreAboutMe isMobile={isMobile} />
        </div>
    )
}