'use client'
import React from 'react'
import { Button } from '@mui/material'
import './ButtonStyle.scss'
type Props = {
  option: string,
  value: string,
  style?: any,
  bgroundColor?: string,
  color?: string,
  onClick?: () => void,
}

export default function ButtonStyle({ option, value, style, bgroundColor, color, onClick }: Props) {
  return (
    <>
      {option === '1' &&
        <div id='btn-opt-1' style={style} onClick={onClick}>
          <Button className='btn' variant="contained" style={{ backgroundColor: 'black', position: 'absolute' }}>{value}</Button>
          <Button className='btn btn-hover' variant="contained" style={{ backgroundColor: bgroundColor, color: color }}>{value}</Button>
        </div>
      }
    </>
  )
}