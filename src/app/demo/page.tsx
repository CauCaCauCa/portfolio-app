'use client'

import AvatarPanel from '@/components/demo-page/home/AvatarPanel'
import Title from '@/components/demo-page/home/TitleAvatar'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/demo-page/Navbar'
import { ThemeProvider, useThemeContext } from '../../components/demo-page/ThemeContext'
import InfoSlide from '@/components/demo-page/about/InfoSlide'
import './page.scss'

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
        document.body.style.backgroundColor = 'white';
      }
    }
  }, [])

  return (
    <div id='demo-page'>
      <ThemeProvider>
        {isShow ? (isMobile ? <Mobile /> : <Desktop />) : null}
      </ThemeProvider>
    </div>
  )
}

function Desktop() {
  const [curPage, setCurPage] = useState('home');
  const { theme } = useThemeContext()!;

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#f5f5f5' : 'rgb(17,17,17)';
  }, [theme])


  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: any) {
    setPosition({ x: e.clientX, y: e.clientY });
    var ele = document.getElementById('pointer');
    if (ele) {
      ele.style.opacity = '0.2';
    }
  }

  function handleOnMouseLeave() {
    var e = document.getElementById('pointer');
    if (e) {
      e.style.opacity = '0';
    }
  }


  return (
    <div id='demo-page-desktop'
      style={{ position: 'fixed', width: '100%', height: '100vh' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleOnMouseLeave}>
      <div id='pointer'
        style={{
          position: 'absolute',
          backgroundColor: 'rgb(255,180,0)',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -25.25,
          top: -25.25,
          width: 55,
          height: 55,
          pointerEvents: 'none',
          zIndex: 999,
          opacity: 0,
        }} />
      <Navbar curPage={curPage} setCurPage={setCurPage} />
      {
        curPage === 'home' &&
        <>
          <AvatarPanel />
          <Title />
        </>
      }
      {
        curPage === 'about' &&
        <>
          <InfoSlide />
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
