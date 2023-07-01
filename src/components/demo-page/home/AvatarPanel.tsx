import React from 'react'

export default function AvatarPanel() {
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
    width: '31rem',
    pointerEvents: 'none' as 'none',
    userSelect: 'none' as 'none',
    userDrag: 'none',
  }
  return (
    <div id='avatar-panel' style={styleAvatarPanel}>
      <img src="/0.png" alt="avatar" style={styleAvatarImg} />
    </div>
  )
}