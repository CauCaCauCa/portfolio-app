import { Button } from '@mui/material'
import exp from 'constants';
import React from 'react'

type Props = {
    child: JSX.Element;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    titleExpand?: string;
}

export default function ButtonExpand({ onClick, child, style, titleExpand }: Props) {

    const styleButtonExpand = {
        ...style,
        borderRadius: '50%',
        padding: '0rem',
        height: '3rem',
        width: '3rem',
        minWidth: '1rem',
    }
    function handleOnMouseOver() {
        var expand = document.getElementById('btn-expand-title-' + titleExpand);
        if (expand) {
            expand.style.padding = '0 3.5rem 0 1rem'
            expand.style.width = 'fit-content'
            expand.style.opacity = '1'
        }
    }
    function handleOnMouseLeave() {
        var expand = document.getElementById('btn-expand-title-' + titleExpand);
        if (expand) {
            expand.style.padding = '0 2.9rem 0 0'
            expand.style.opacity = '0'
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
            <Button variant='contained' style={styleButtonExpand} onClick={onClick} >{child}</Button>
        </div>
    )
}