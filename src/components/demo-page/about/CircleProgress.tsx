import React from 'react'
import { useThemeContext } from '../ThemeContext';

type Props = {
    title: string,
    value: number,
    isMobile?: boolean
}


export default function CircleProgress({ title, value, isMobile }: Props) {

    const { theme } = useThemeContext()!;

    const progressBarStyle = {
        width: isMobile ? '100px' : '140px',
        height: isMobile ? '100px' : '140px',
        borderRadius: '50%',
        textAlign: 'center' as 'center',
        background: 'radial-gradient(closest-side,' + (theme === 'light' ? 'white' : 'rgb(17,17,17)') + ' 83%, transparent 85% 100%), conic-gradient(rgb(255,180,0) ' + value + '%, rgba(30,37,48,.07) 0)',
    };

    const progressValueStyle = {
        position: 'relative' as 'relative',
        top: isMobile ? '1rem' : '2.1rem',
        color: theme === 'light' ? 'rgb(17,17,17)' : 'white',
        fontSize: isMobile ? '.9rem' : '1rem',
    }

    const progressTitleStyle = {
        position: 'relative' as 'relative',
        top: isMobile ? '1rem' : '3rem',
        color: theme === 'light' ? 'rgb(17,17,17)' : 'white',
        fontWeight: 'bold' as 'bold',
        fontSize: isMobile ? '.9rem' : '1rem',
    }

    return (
        <div className="progress-bar" style={progressBarStyle}>
            <progress value={value} max={100} style={{ visibility: 'hidden', height: '0', width: '0' }} />
            <div className="progress-value" style={progressValueStyle}>{value}%</div>
            <div className="progress-title" style={progressTitleStyle}>{title}</div>
        </div>
    )
}