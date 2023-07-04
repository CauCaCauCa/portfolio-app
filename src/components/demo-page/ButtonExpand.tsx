import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useThemeContext } from './ThemeContext'

type Props = {
    child: JSX.Element;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    titleExpand?: string;
    curPage?: string;
}

export default function ButtonExpand({ onClick, child, style, titleExpand, curPage }: Props) {

    const { theme } = useThemeContext()!;

    const styleButtonExpand = {
        height: '3.2rem',
        width: '3.2rem',
        borderRadius: '50%',
        padding: '0rem',
        minWidth: '1rem',
        ...style,
    }

    function handleOnMouseOver() {
        if (titleExpand) {
            var expand = document.getElementById('btn-expand-title-' + titleExpand);
            var main = document.getElementById('btn-main-' + titleExpand);
            if (main) {
                main.style.backgroundColor = 'rgb(255,180,0)'
                main.style.color = 'white'
            }
            if (expand) {
                expand.style.padding = '0 3.7rem 0 1.2rem'
                expand.style.width = 'fit-content'
                expand.style.opacity = '1'
                expand.style.backgroundColor = 'rgb(255,180,0)'
                expand.style.color = 'white'
            }
        }
    }
    function handleOnMouseLeave() {
        if (titleExpand) {
            var expand = document.getElementById('btn-expand-title-' + titleExpand);
            var main = document.getElementById('btn-main-' + titleExpand);
            if (main) {
                // main.style.backgroundColor = mainColor
                // main.style.color = textColor  
                if (curPage == titleExpand) {
                    main.style.backgroundColor = 'rgb(255,180,0)'
                    main.style.color = 'white'
                } else {
                    main.style.backgroundColor =  theme === 'light' ? 'rgb(238,238,238)' : '#323232'
                    main.style.color = theme === 'light' ? 'rgb(102,102,102)' : 'white'
                }

            }
            if (expand) {
                expand.style.padding = '0 2.9rem 0 0'
                expand.style.width = 'fit-content'
                expand.style.opacity = '0'
                expand.style.backgroundColor = 'transparent'
            }
        }
    }
    return (
        <div id='btn-expand' onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
            {
                titleExpand &&
                <Button variant='contained' id={'btn-expand-title-' + titleExpand}
                    style={{
                        ...styleButtonExpand,
                        position: 'absolute' as 'absolute',
                        right: '0',
                        padding: '0 2.9rem 0 0',
                        opacity: '0',
                        width: 'fit-content',
                        borderRadius: '10rem',
                        overflow: 'hidden',
                        transition: 'all 0.2s',
                    }}
                    onClick={onClick} >{titleExpand}</Button>
            }
            <Button id={'btn-main-' + titleExpand} variant='contained' style={styleButtonExpand} onClick={onClick} >{child}</Button>
        </div>
    )
}