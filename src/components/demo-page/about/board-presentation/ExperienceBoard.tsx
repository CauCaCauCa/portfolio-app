import React from 'react'
import './_board.scss'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useThemeContext } from '@/components/demo-page/ThemeContext'

type Props = {
  style?: React.CSSProperties
}

export default function ExperienceBoard({ style }: Props) {
  const { theme } = useThemeContext()!;

  const styleExperienceBoard = {
    color: theme === 'light' ? 'rgb(30,37,48)' : 'white',
  }

  return (
    <div className='experience-board' style={styleExperienceBoard}>
      <h2 style={{ marginBottom: '4rem' }}>EXPERIENCE & EDUCATION</h2>
      <TimeStateBox time='2020 - 2024' postion='SOFTWARE ENGINEERING' workplace='FPT UNIVERSITY' detail="I'm still a student." />
    </div>
  )
}

type TimeStateBoxProps = {
  time: string
  postion: string
  workplace: string
  detail: string
}

function TimeStateBox({ time, postion, workplace, detail }: TimeStateBoxProps) {
  const { theme } = useThemeContext()!;

  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <i className='time-statee-box__icon'>
          <BusinessCenterIcon style={{ fontSize: '1.1rem', marginTop: '0.55rem', color: 'white' }} />
        </i>
      </div>
      <div className='time-state-box' style={{ borderRight: theme === 'light' ? '1px solid rgb(102,102,102)' : '1px solid white' }}>
        <div className='time-state-box__time' 
        style={{ 
          backgroundColor: theme === 'light' ? 'rgb(238,238,238)' : 'rgb(33,33,33)',
          color: theme === 'light' ? 'rgb(102,102,102)' : 'rgb(207,207,207)'
       }}>{time}</div>
        <div className='time-state-box__title'>{postion} - <span style={{ color: theme === 'light' ? 'rgb(102,102,102)' : 'rgb(106,106,106)'}}>{workplace}</span></div>
        <div className='time-state-box__detail'>{detail}</div>
      </div>
    </>
  )
}