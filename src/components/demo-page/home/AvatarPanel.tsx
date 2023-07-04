import { type } from 'os';
import React, { useState } from 'react'

type Props = {
  isMobile?: boolean;
}

export default function AvatarPanel({ isMobile }: Props) {

  const styleAvatarPanel = {
    width: '50%',
    height: '100vh',
  }

  const styleAvatarImg = {
    position: 'absolute' as 'absolute',
    top: '9%',
    left: '4%',
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(to bottom, rgb(89,93,119), rgb(105,147,172))',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(89,93,119, 0.3) 0px 8px 16px -8px',
    width: '31%',
    objectFit: 'cover' as 'cover',
    height: '34.5rem',
    pointerEvents: 'none' as 'none',
    userSelect: 'none' as 'none',
    userDrag: 'none',
  }

  const styleAvatarImgMobile = {
    position: 'absolute' as 'absolute',
    top: '6rem',
    left: '22.5%',
    borderRadius: '50%',
    width: '55%',
    height: '13rem',
    objectFit: 'cover' as 'cover',
    border: '0.2rem solid rgb(238,238,238)',
    pointerEvents: 'none' as 'none',
    backgroundImage: 'linear-gradient(to bottom, rgb(89,93,119), rgb(105,147,172))',
  }

  // const styleItemBehindAvatar = {
  //   position: 'fixed' as 'fixed',
  //   left: '-35rem',
  //   height: '100vh',
  //   width: '50rem',
  //   backgroundColor: 'rgb(255,180,0)',
  //   transform: 'skewX(17deg)',
  // }
  return (
    <>
      {/* <div style={styleItemBehindAvatar} /> */}
      <div id='avatar-panel' style={styleAvatarPanel}>
        <img src="/0.png" alt="avatar" style={isMobile ? styleAvatarImgMobile : styleAvatarImg} />
      </div>
    </>
  )
}