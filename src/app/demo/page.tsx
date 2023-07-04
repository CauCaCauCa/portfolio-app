'use client'

import AvatarPanel from '@/components/demo-page/home/AvatarPanel'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/demo-page/Navbar'
import { ThemeProvider, useThemeContext } from '../../components/demo-page/ThemeContext'
import './page.scss'
import ProjectTitle from '@/components/demo-page/project/ProjectTitle'
import ContactTitle from '@/components/demo-page/contact/ContactTitle'
import PersonalBoard from '@/components/demo-page/about/board-presentation/PersonalBoard'
import ExperienceBoard from '@/components/demo-page/about/board-presentation/ExperienceBoard'
import TitleAvatar from '@/components/demo-page/home/TitleAvatar'
import Title from '@/components/demo-page/Title'
import NavbarMobile from '@/components/demo-page-mobile/NavbarMobile'

type Props = {}

export default function Page({ }: Props) {
  const [isMobile, setIsMobile] = useState(true);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(17,17,17)';
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 1200);
      setIsShow(true);

      // Event listener to update the state when the window size changes
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1100);
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
    // set curtain animation
    var curtain = document.getElementById('curtain');
    if (curtain) {
      curtain.style.animation = "curtainAnimation .6s ease-in-out";
      setTimeout(() => {
        if (curtain) {
          curtain.style.removeProperty("animation");
        }
      }, 600);
    }

    // set change page animation
    var e = document.getElementById(curPage + '-page-open');
    if (e) {
      e.style.animation = "changePage 1s";
      setTimeout(() => {
        if (e) {
          e.style.removeProperty("animation");
          e.style.position = 'relative';
        }
      }, 1000);
    }
  }, [curPage])

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#f5f5f5' : 'rgb(17,17,17)';
  }, [theme])


  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: any) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setPosition({ x: e.clientX, y: e.clientY + scrollTop });
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

  const styleItemBehindAvatar = {
    position: 'fixed' as 'fixed',
    left: '-35rem',
    height: '100vh',
    width: '50rem',
    backgroundColor: 'rgb(255,180,0)',
    transform: 'skewX(17deg)',
  }

  return (
    <div id='demo-page-desktop'
      style={{
        position: curPage === 'home' ? 'fixed' : 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 'fit-content',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleOnMouseLeave}>

      <div id='curtain'>
      </div>

      <div id='pointer'
        style={{
          position: 'absolute',
          backgroundColor: 'rgb(255,180,0)',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          pointerEvents: 'none',
          zIndex: 999,
          opacity: 0,
          transition: 'all 0.1s'
        }} />
      <Navbar curPage={curPage} setCurPage={setCurPage} />
      {
        curPage === 'home' &&
        <>
          <div style={styleItemBehindAvatar} />
          <div id='home-page-open'
            style={{
              position: 'fixed',
              width: '100%',
            }}
          >
            <AvatarPanel />
            <TitleAvatar />
          </div>
        </>
      }
      {
        curPage === 'about' &&
        <>
          <div id='about-page-open'
            style={{
              position: 'fixed',
              width: '100%',
            }}
          >
            <Title title='ABOUT' titleHighlight='ME' titleBehind='RESUME' />
            <PersonalBoard style={{
              marginTop: '10rem'
            }} />
            <ExperienceBoard />
          </div>
        </>
      }
      {
        curPage === 'project' &&
        <>
          <ProjectTitle />
        </>
      }
      {
        curPage === 'contact' &&
        <>
          <ContactTitle />
        </>
      }
    </div>
  )
}

function Mobile() {
  const [curPage, setCurPage] = useState('home');
  const { theme, toggleTheme } = useThemeContext()!;

  useEffect(() => {
    if (theme === 'dark') {
      toggleTheme();
    }
  }, [])
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#f5f5f5' : 'rgb(17,17,17)';
  }, [theme])

  return (
    <div id='demo-page-mobile'>
      {/* <p>Mobile feature in comming soon...</p> */}
      <NavbarMobile curPage={curPage} setCurPage={setCurPage} />
      {
        curPage === 'home' &&
        <div
          style={{
            width: '100%',
            position: 'fixed',
          }}
        >
          <AvatarPanel isMobile={true} />
          <TitleAvatar isMobile={true} />
        </div>
      }
      {
        curPage === 'about' &&
        <>
        </>
      }
      {
        curPage === 'project' &&
        <>
          <p
            style={{
              color: theme === 'light' ? 'black' : 'white',
            }}
          >
            Project page is in comming soon...
          </p>
        </>
      }
      {
        curPage === 'contact' &&
        <>
          <p>

          </p>
        </>
      }
    </div>
  )
}
