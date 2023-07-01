import React from 'react'

type Props = {
    title: string,
    value: number,
}

export default function CircleProgress({ title, value }: Props) {

    const progressBarStyle = {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        textAlign: 'center' as 'center',
        background: 'radial-gradient(closest-side, rgb(17, 17, 17) 79%, transparent 80% 100%), conic-gradient(rgb(255,180,0) ' + value + '%, rgba(149, 149, 149, 0.588) 0)',
    };

    const progressValueStyle = {
        position: 'relative' as 'relative',
        top: '2.1rem',
        color: 'white',
    }

    const progressTitleStyle = {
        position: 'relative' as 'relative',
        top: '3rem',
        color: 'white',
        fontWeight: 'bold' as 'bold',
    }

    return (
        <div className="progress-bar" style={progressBarStyle}>
            <progress value={value} max={100} style={{ visibility: 'hidden', height: '0', width: '0' }} />
            <div className="progress-value" style={progressValueStyle}>{value}%</div>
            <div className="progress-title" style={progressTitleStyle}>{title}</div>
        </div>
    )
}