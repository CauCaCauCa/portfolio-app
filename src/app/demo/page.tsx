'use client'

import AvatarPanel from '@/components/demo-page/home/AvatarPanel'
import Title from '@/components/demo-page/home/TitleAvatar'
import React, { useEffect, useState, useContext } from 'react'
import '../../styles/demo-page/page.scss'
import Navbar from '@/components/demo-page/Navbar'
import { ThemeProvider, useThemeContext } from '../../components/demo-page/ThemeContext'

type Props = {}

export default function Page({ }: Props) {

  // const { theme } = useThemeContext()!;

  // check screen size
  const [isMobile, setIsMobile] = useState(true);
  // show page after load screen size
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // document.body.style.backgroundColor = theme === 'light' ? '#f5f5f5' : 'rgb(17,17,17)';
    document.body.style.backgroundColor = 'rgb(17,17,17)';
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 1200);
      setIsShow(true);

      // Event listener to update the state when the window size changes
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1200);
      }

      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }

  }, [])

  return (
    <>
      <ThemeProvider>
        {isShow ? (isMobile ? <Mobile /> : <Desktop />) : null}
      </ThemeProvider>
    </>
  )
}

function Desktop() {
  const [curPage, setCurPage] = useState('home');
  const { theme } = useThemeContext()!;
  
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#f5f5f5' : 'rgb(17,17,17)';
  }, [theme])

  return (
    <div id='demo-page-desktop'>

      <Navbar curPage={curPage} setCurPage={setCurPage} />
      {
        curPage === 'home' &&
        <>
          <AvatarPanel />
          <Title />
        </>
      }
    </div>

  )
}

function Mobile() {
  return (
    <div id='demo-page-mobile'>
      <p>Mobile feature in comming soon...</p>
    </div>
  )
}