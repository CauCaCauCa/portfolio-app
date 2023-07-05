import React from 'react'
// import './Title.scss'
import { useThemeContext } from './ThemeContext'

type Props = {
    title: string,
    titleHighlight: string,
    titleBehind: string,
    isMobile?: boolean
}

export default function Title({ title, titleHighlight, titleBehind, isMobile }: Props) {
    const { theme } = useThemeContext()!;

    return (
        <div id='title'
            style={{
                paddingTop: '1rem',
                textAlign: isMobile ? 'left' : 'center',
            }}
        >
            <div
                id='title-behind'
                style={{
                    position: 'absolute',
                    width: '50%',
                    left: isMobile ? '5%' : '25%',
                    fontSize: isMobile ? '3rem' : '6.5rem',
                    color: theme === 'light' ? 'rgba(30,37,48,.07)' : '#323232',
                    fontWeight: 900,
                    letterSpacing: '.4rem',
                    // backgroundColor: 'red'

                }}>
                {titleBehind}
            </div>
            <div
                id='title-main'
                style={{
                    position: 'relative',
                    top: '1.7rem',
                    fontSize: isMobile ? '2rem' : '3.5rem',
                    color: theme === 'light' ? '#666' : 'white',
                    fontWeight: 900,
                    userSelect: 'none',
                    width: isMobile ? '80%' : '40%',
                    marginLeft: isMobile ? '5%' : '30%',
                }}
            >{title}
                <span
                    style={{
                        color: 'rgb(255,180,0,0.8)'
                    }}
                >
                    {" " + titleHighlight}
                </span>
            </div>
        </div>
    )
}